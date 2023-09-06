import React from 'react';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';


interface TopLottieProps {
  file:any;
  size:number;
}

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