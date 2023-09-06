import React from 'react';
import styled ,{css} from 'styled-components/native';
import background from "../../assets/images/creditBackground.jpg";
import SmallText from '../Texts/SmallText';
import { AppColors } from '../../utils/colors';

//Import cards logos for each type
import visaLogo from "../../assets/images/visa.png";
import americanExpressLogo from "../../assets/images/American-Express.png";
import discoverLogo from "../../assets/images/discover-logo.png";
import masterCardLogo from "../../assets/images/MasterCard.png";
import { screenWidth } from '../../utils/shared';


// Define an interface for the props of the 'InteractiveCard' component
interface InteractiveCardProps {
  number?:string;
  nameHolder?:string;
  expirationDate?:string;
};

// Create a styled 'View' component for the 'InteractiveCard'
const StyledView = styled.View`
  margin: 20px;
  height: 200px;
  width: ${screenWidth*0.9};
  border-radius: 20px;
`;

// Create a styled 'ImageBackground' component for the card
const StyledImageBackground = styled.ImageBackground`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`;

// Create a styled 'Image' component for the card's icon
const StyledImage = styled.Image`
  height: 60px;
  width: 60px;
  position: absolute;
  top: 10px;
  right: 20px;
  object-fit:contain;
  border-radius: 10px;
`;

// Define custom CSS for small text elements
const defaultSmallText = css`
  font-size: 13px;
  color: ${AppColors.lightGray};
  position: absolute;
`;

// Define custom CSS for the card number text
const cardNumberText = css`
  ${defaultSmallText};
  font-weight: bold;
  right: 40px;
  top: 80px;
  letter-spacing: 2px;
`;

// Define custom CSS for the card holder's name
const customCardHolderName = css`
  ${defaultSmallText};
  bottom: 50px;
  left: 20px;
`;

// Define custom CSS for the card expiration date
const customExpiration = css`
  ${defaultSmallText}
  bottom: 50px;
  right: 25px;
`;

// Define custom CSS for the card holder's name (alternative style)
const nameCss = css`
  ${defaultSmallText};
  bottom: 30px;
  left: 30px;
`;

// Define custom CSS for the card expiration date (alternative style)
const ExpirationCss = css`
  ${customExpiration};
  bottom: 30px;
  right: 40px;
`;

//This function returns the logo image based on the first digit of the card number.
const getCardLogo = (number: string) => {
  
  // Get the first digit of the card number
  const firstDigit = number.charAt(0);

  // Check the first digit to determine the card logo
  if (firstDigit === '4') {
    return visaLogo; // Return Visa logo
  } else if (firstDigit === '5') {
    return masterCardLogo; // Return MasterCard logo
  } else if (firstDigit === '3') {
    return americanExpressLogo; // Return American Express logo
  } else if (firstDigit === '6') {
    return discoverLogo; // Return Discover logo
  }

  // If no match is found, return null
  return null;
};


const InteractiveCard: React.FC<InteractiveCardProps> = (props) => {
  
  // Get the card logo based on the card number (or an empty string if the number is not provided)
  const cardLogo = getCardLogo(props.number || "");

  return (
    <StyledView>
      <StyledImageBackground source={background}>

        {cardLogo ? <StyledImage source={cardLogo}/> : null}

        <SmallText str={props.number? props.number : 'XXXX-XXXX-XXXX-XXXX'} customCss={cardNumberText} />
        
        <SmallText str='CARDHOLDER NAME' customCss={customCardHolderName}/>
        <SmallText str={props.nameHolder ? props.nameHolder : ""} customCss={nameCss} />
        
        <SmallText str='EXPIRATION' customCss={customExpiration}/>
        <SmallText str={props.expirationDate ? props.expirationDate : ""} customCss={ExpirationCss}/>
      </StyledImageBackground>
    </StyledView>
  );
}

export default InteractiveCard;