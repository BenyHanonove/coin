import React, { useEffect, useState } from 'react';
import styled ,{css} from 'styled-components/native';
import { screenHeight, screenWidth } from '../../utils/shared';
import { AppColors ,style} from '../../utils/colors';
import { getCoinIcon, getCoinValue} from "../../utils/api";
import { ImageSourcePropType } from 'react-native';

//Components
import SmallText from '../Texts/SmallText';
import BigText from '../Texts/BigText';


  interface CardProps {
    header: string;
    amount:number;
    symbol:string;
    name:string;
  }

  const defaultCss = css`
    background-color: ${AppColors.darkBlue};
    padding: 23px;
    border-radius: 12px;
    margin: 10px;
    height: ${screenHeight*0.20};
    width: ${screenWidth*0.42};
    display: flex;
    align-items: center;
    justify-content: space-around;
    `;

  const StyledView = styled.View`
    ${style.shadow};
    ${defaultCss};
  `;

  const StyledImage = styled.Image`
    height: 30px;
    width: 30px;
    margin: 5px;
  `;

  const customRegularText = css`
    font-weight: bold;
  `;

const TransactionCard: React.FC<CardProps> = (props) => {

  const [price, setPrice] = useState<number>(0);
  const [icon, setIcon] = useState<ImageSourcePropType | null>(null);

  //Use effect to get the coin value
  useEffect(() => {
    async function fetchCoinValue() {
      const coinValue = await getCoinValue(props.name);
      if (coinValue) {
        const calculatedPrice = (coinValue * props.amount).toFixed(2);
        setPrice(parseFloat(calculatedPrice));
      }
    }
    fetchCoinValue();
  }, [props.symbol]);

  //Use effect to get the coin value
  useEffect(()=>{
    async function fetchCoinIcon(){
      const coinIcon = await getCoinIcon(props.name);
      if(coinIcon){
        setIcon({ uri: coinIcon });      
      }
    }
    fetchCoinIcon();
  },[props.name]);

  return (
    <StyledView>
      <SmallText str={`$${price.toString()}`} />
      <BigText str={props.header} customCss={customRegularText}/>
      {icon ? <StyledImage source={icon} /> : null} 
      <SmallText str={`${props.amount.toString()} coins`}/>
    </StyledView>
  );
};

export default TransactionCard;
