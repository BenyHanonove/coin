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


interface InteractiveCardProps {
  number?:string;
  nameHolder?:string;
  expirationDate?:string;
};

const StyledView = styled.View`
  margin: 20px;
  height: 200px;
  width: ${screenWidth*0.9};
  border-radius: 20px;
`;

const StyledImageBackground = styled.ImageBackground`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`;

const StyledImage = styled.Image`
  height: 60px;
  width: 60px;
  position: absolute;
  top: 10px;
  right: 20px;
  object-fit:contain;
  border-radius: 10px;
`;

const defaultSmallText = css`
  font-size: 13px;
  color: ${AppColors.lightGray};
  position: absolute;
`;

const cardNumberText = css`
  ${defaultSmallText};
  font-weight: bold;
  right: 40px;
  top: 80px;
  letter-spacing: 2px;
`;

const customCardHolderName = css`
  ${defaultSmallText};
  bottom: 50px;
  left: 20px;
`;

const customExpiration = css`
  ${defaultSmallText}
  bottom: 50px;
  right: 25px;
`;

const nameCss = css`
  ${defaultSmallText};
  bottom: 30px;
  left: 30px;
`;

const ExpirationCss = css`
  ${customExpiration};
  bottom: 30px;
  right: 40px;
`;

const getCardLogo = (number: string) => {
  const firstDigit = number.charAt(0);
  if (firstDigit === '4') {
    return visaLogo;
  } else if (firstDigit === '5') {
    return masterCardLogo;
  } else if (firstDigit === '3') {
    return americanExpressLogo;
  } else if (firstDigit === '6') {
    return discoverLogo;
  }
  return null;
};


const InteractiveCard: React.FC<InteractiveCardProps> = (props) => {
  
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