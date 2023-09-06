import React from 'react';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';


// Define an interface for the props of the 'TopLottie' component
interface TopLottieProps {
  file:any;
  size:number;
};

// Create a styled 'View' component for the 'TopLottie' component
const StyledView = styled.View`
    justify-content: center;
    align-items: center;
    height: size;
`;


const TopLottie: React.FC<TopLottieProps> = (props) => {
  return (
    <StyledView>
        <LottieView
        source={props.file}
        autoPlay
        loop
        style={{
            width:props.size,
            height:props.size,
        }}
        />
    </StyledView>
  );
}

export default TopLottie;