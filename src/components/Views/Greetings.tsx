import React from 'react';
import styled , {css} from 'styled-components/native';
import Background from "../../assets/images/walletBackground.jpg";
import { userDataTemplate } from '../../utils/data';


//Components
import SmallText from '../Texts/SmallText';
import { screenWidth } from '../../utils/shared';
import Balance from './Balance';


// Create a styled 'View' component with specific styles
const StyledView = styled.View`
  margin-top: 20px;
  border-radius: 20px;
  overflow: hidden;
  height: 33%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); ;
`;

// Create a styled 'ImageBackground' component with specific styles
const StyledBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  object-fit: cover;
  width: ${screenWidth*0.92};
`;

// Create a styled 'Image' component with image styles
const StyledImage = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    margin: 18px;
`;

// Define a CSS snippet for small text styles
const smallTextCss = css`
  font-weight: bold;
  margin-left: 14px;
`;

// Define a CSS snippet for custom balance styles
const customBalanceCss = css`
  margin-top: 8px;
`;

const Greetings: React.FC = () => {

  const emptyImage = "https://media.istockphoto.com/id/526947869/vector/man-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=5I7Vgx_U6UPJe9U2sA2_8JFF4grkP7bNmDnsLXTYlSc=";

  return (
    <StyledView>

    <StyledBackground source={Background}>
      <StyledImage source={{uri:userDataTemplate.img || emptyImage}} />
      <SmallText   str={userDataTemplate.fullName.toLocaleUpperCase()} customCss={smallTextCss}/>
      <Balance amount={userDataTemplate.balance} customCss={customBalanceCss}/>
    </StyledBackground>
    </StyledView>
  );
}

export default Greetings;