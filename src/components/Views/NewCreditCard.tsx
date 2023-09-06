import React, { useState } from 'react';
import styled ,{css} from "styled-components/native";
import { AppColors } from '../../utils/colors';
import { screenWidth } from '../../utils/shared';

//Components 
import InteractiveCard from '../Cards/InteractiveCard';
import CardNumberInput from '../Inputs/CardNumberInput';
import CardHolderInput from '../Inputs/CardHolderInput';
import CardExpirationInput from '../Inputs/CardExpirationInput';
import RegularBtn from '../Buttons/RegularBtn';

import {Card} from "../../screens/CardsScreen"

interface NewCreditCardProps {
  uploadCard:(card:Card)=>void;
};

const StyledView = styled.View`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const customInput = css`
  background-color: ${AppColors.background};
  width: ${screenWidth*0.7};
  height: 50px;
  margin: 10px;
  border: 1px ${AppColors.lightGray}; 
  padding:10px;
  border-radius:4px;
`;

const customButton = css`
  margin-top: 20px;
`;


const NewCreditCard: React.FC<NewCreditCardProps> = (props) => {

  //Object to keep the card data
  const [cardData, setCardData] = useState({
    number: "",
    nameHolder: "",
    expirationDate: "", // Change this property name to match Card type
  });

  //Function that handels onchange for inputs
  const handelNumber = (str:string)=>{setCardData({...cardData ,number:str})};
  const handelCardHolder = (str:string)=>{setCardData({...cardData ,nameHolder:str})};
  const handelCardExpiration = (str:string)=>{setCardData({...cardData ,expirationDate:str})};

  
  return (
    <StyledView>
      <InteractiveCard 
      number={cardData.number ? cardData.number :""} 
      nameHolder={cardData.nameHolder ?  cardData.nameHolder : ""} 
      expirationDate={cardData.expirationDate ? cardData.expirationDate : ""} />

      <CardNumberInput holder='Number' onType={handelNumber} customCss={customInput}/>
      <CardHolderInput holder='Holder name' onType={handelCardHolder} customCss={customInput} />
      <CardExpirationInput holder='Expiration'  onType={handelCardExpiration} customCss={customInput}/>

      <RegularBtn BtnText='CONFIRM CARD' customCss={customButton} handelPress={() => props.uploadCard(cardData)} />

    </StyledView>
  );
}

export default NewCreditCard;