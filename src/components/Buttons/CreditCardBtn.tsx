import React, { useEffect, useRef, useState } from 'react';
import styled ,{css} from 'styled-components/native';
import { screenHeight, screenWidth } from '../../utils/shared';
import { Animated } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Components
import BigText from '../Texts/BigText';
import { AppColors } from '../../utils/colors';

// Interface for Credit Card Button Props
interface CreditCardBtnProps {
  press:()=>void;
}

// Create a styled 'TouchableOpacity' component for the Credit Card Button
const StyledTouchableOpacity = styled.TouchableOpacity`
    width: ${screenWidth*0.9};
    margin: 20px;
    background: ${AppColors.darkBlue};
    border-radius: 30px;
    height: ${screenHeight*0.21};
    align-items: center;
    justify-content: space-around;
    display: flex;
`;

// Define custom CSS for the text inside the button
const customBigText = css`
    color: ${AppColors.background};
`;

const CreditCardBtn: React.FC<CreditCardBtnProps> = (props) => {

  // Create a ref to hold the animated value
  const animatedValue = useRef(new Animated.Value(0)).current;

  // Create a ref to hold the looped animation
  const loopedAnimation = useRef<Animated.CompositeAnimation | null>(null);

  useEffect(() => {
    // Duration and value for the move animations
    const moveDuration = 700;
    const moveValue = 5;
  
    // Define up animation
    const upAnimation = Animated.timing(animatedValue, {
      toValue: -moveValue,
      duration: moveDuration,
      useNativeDriver: true,
    });
  
    // Define down animation
    const downAnimation = Animated.timing(animatedValue, {
      toValue: moveValue,
      duration: moveDuration,
      useNativeDriver: true,
    });
  
    // Define center animation
    const centerAnimation = Animated.timing(animatedValue, {
      toValue: 0,
      duration: moveDuration,
      useNativeDriver: true,
    });
  
    // Create an animation sequence
    const animationSequence = Animated.sequence([downAnimation, upAnimation, centerAnimation]);
  
    // Create a looped animation
    loopedAnimation.current = Animated.loop(animationSequence);
  
    // Start the looped animation
    loopedAnimation.current.start();
  
    // Cleanup function to stop the animation on unmount
    return () => {
      if (loopedAnimation.current) {
        loopedAnimation.current.stop();
      };
    };
    }, [animatedValue]);


  // Function to stop the looped animation
  const stopAnimation = () => {
    if (loopedAnimation.current) {
      loopedAnimation.current.stop();
    }
  };

  

  // Function to handle button press
  const pressHandler = () => {
    // Stop the animation when the button is pressed
    stopAnimation();
    // Trigger the provided press function
    props.press();
  };

  return (
    <StyledTouchableOpacity
      onPress={pressHandler}
      style={{
        transform: [{ translateY: animatedValue }],
      }}
    >        
      <BigText str='Add new card' customCss={customBigText}/>
      <Ionicons name={"arrow-down"} size={32} color={"white"}/>
    </StyledTouchableOpacity>
  );
}

export default CreditCardBtn;