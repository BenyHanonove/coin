import React, { useEffect, useState } from 'react';
import styled ,{css} from 'styled-components/native';
import { screenHeight, screenWidth } from '../../utils/shared';
import { AppColors ,style} from '../../utils/colors';
import { getCoinIcon, getCoinValue} from "../../utils/api";
import { ImageSourcePropType } from 'react-native';

//Components
import SmallText from '../Texts/SmallText';
import BigText from '../Texts/BigText';

// Define an interface for the props of the 'Card' component
interface CardProps {
  header: string;
  amount:number;
  symbol:string;
  name:string;
};

// Define default CSS styles for the 'Card' component
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

// Create a styled 'View' component for the 'Card' with default and custom CSS
const StyledView = styled.View`
  ${style.shadow};
  ${defaultCss};
`;

// Create a styled 'Image' component for the 'Card'
const StyledImage = styled.Image`
  height: 30px;
  width: 30px;
  margin: 5px;
`;

// Define custom CSS for regular text
const customRegularText = css`
  font-weight: bold;
`;

const TransactionCard: React.FC<CardProps> = (props) => {

  // Initialize state variables for price and icon
  const [price, setPrice] = useState<number>(0);
  const [icon, setIcon] = useState<ImageSourcePropType | null>(null);

  // Use effect to fetch the current coin value based on symbol
  useEffect(() => {
    async function fetchCoinValue() {
      // Retrieve the current coin value using the 'getCoinValue' function
      const coinValue = await getCoinValue(props.name);
      
      // If a valid coin value is retrieved, calculate the price and update the state
      if (coinValue) {
        const calculatedPrice = (coinValue * props.amount).toFixed(2);
        setPrice(parseFloat(calculatedPrice));
      }
    }
    
    // Call the 'fetchCoinValue' function when 'props.symbol' changes
    fetchCoinValue();
  }, [props.symbol]);


  // Use effect to fetch the coin icon based on the coin's name
  useEffect(() => {
    async function fetchCoinIcon() {
      // Retrieve the coin's icon using the 'getCoinIcon' function
      const coinIcon = await getCoinIcon(props.name);
      
      // If a valid coin icon is retrieved, update the 'icon' state
      if (coinIcon) {
        setIcon({ uri: coinIcon });
      }
    }
    
    // Call the 'fetchCoinIcon' function when 'props.name' changes
    fetchCoinIcon();
  }, [props.name]);
// Use effect to fetch the current coin value based on symbol
useEffect(() => {
  async function fetchCoinValue() {
    // Retrieve the current coin value using the 'getCoinValue' function
    const coinValue = await getCoinValue(props.name);
    
    // If a valid coin value is retrieved, calculate the price and update the state
    if (coinValue) {
      const calculatedPrice = (coinValue * props.amount).toFixed(2);
      setPrice(parseFloat(calculatedPrice));
    }
  }
  
  // Call the 'fetchCoinValue' function when 'props.symbol' changes
  fetchCoinValue();
}, [props.symbol]);


// Use effect to fetch the coin icon based on the coin's name
useEffect(() => {
  async function fetchCoinIcon() {
    // Retrieve the coin's icon using the 'getCoinIcon' function
    const coinIcon = await getCoinIcon(props.name);
    
    // If a valid coin icon is retrieved, update the 'icon' state
    if (coinIcon) {
      setIcon({ uri: coinIcon });
    }
  }
  
  // Call the 'fetchCoinIcon' function when 'props.name' changes
  fetchCoinIcon();
}, [props.name]);


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
