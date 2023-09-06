import React, { useEffect, useRef, useState } from 'react';
import styled ,{css} from 'styled-components/native';
import { screenHeight, screenWidth } from '../../utils/shared';
import { Animated } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Components
import BigText from '../Texts/BigText';
import { AppColors } from '../../utils/colors';

interface CreditCardBtnProps {
  press:()=>void;
}

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

const customBigText = css`
    color: ${AppColors.background};
`;

const CreditCardBtn: React.FC<CreditCardBtnProps> = (props) => {

  const animatedValue = useRef(new Animated.Value(0)).current;
  const loopedAnimation = useRef<Animated.CompositeAnimation | null>(null);

  useEffect(() => {
    const moveDuration = 700;
    const moveValue = 5;

    const upAnimation = Animated.timing(animatedValue, {
      toValue: -moveValue,
      duration: moveDuration,
      useNativeDriver: true,
    });

    const downAnimation = Animated.timing(animatedValue, {
      toValue: moveValue,
      duration: moveDuration,
      useNativeDriver: true,
    });

    const centerAnimation = Animated.timing(animatedValue, {
      toValue: 0,
      duration: moveDuration,
      useNativeDriver: true,
    });

    const animationSequence = Animated.sequence([downAnimation, upAnimation, centerAnimation]);
    loopedAnimation.current = Animated.loop(animationSequence);

    loopedAnimation.current.start();

    return () => {
      if (loopedAnimation.current) {
        loopedAnimation.current.stop();
      }
    };
  }, [animatedValue]);

  const stopAnimation = () => {
    if (loopedAnimation.current) {
      loopedAnimation.current.stop();
    }
  };
  

  const pressHandler = () =>{
    stopAnimation();
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