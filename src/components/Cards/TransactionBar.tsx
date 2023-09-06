import React, { useEffect, useState } from 'react';
import styled ,{css} from "styled-components/native";
import { ImageSourcePropType } from 'react-native';
import { getCoinValue } from '../../utils/api';
import { AppColors } from '../../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Components
import SmallText from '../Texts/SmallText';
import LinearChart from './LinearChart';
import { getCoinIcon } from '../../utils/api';

// Define an interface for the props of the 'TransactionBar' component
interface TransactionBarProps {
    name:string;
    symbol:string;
    image:ImageSourcePropType;
    date:Date;
    amount:number;
    onPress:()=>void;
};

// Touchable opacity view for the transaction card
const StyledTouchableOpacity = styled.TouchableOpacity`
    display: flex;
    margin: 7px;
    border :1px ${AppColors.text};
    border-radius: 6px;
    background-color: white;
    min-height: 100px;
    max-height: 500px;
`;

//Image for coin icon
const StyledImage = styled.Image`
    height: 60px;
    width: 40px;
    object-fit: contain;
    margin: 10px;
    position: absolute;
    top: 10px;
`;

//Css for coin name 
const customNameText = css`
    padding: 10px;
    position: absolute;
    left: 50px;
    font-weight:bold;
    position: absolute;
    top: 25px;
`;

//Css for date of purchase
const customDateText = css`
    position: absolute;
    left: 10px;
    top: 8px;
    font-size: 12px;
`;

//Css for Price of 1 coin
const customPriceText = css`
    position: absolute;
    right: 50px;
    position: absolute;
    top: 35px;
`;

//Css for amount of coins
const customAmountText = css`
    position: absolute;
    bottom: 17px;
    left:60px;
    font-size: 13px;
    position: absolute;
    top: 58px;
`;

// View for the coin icon
const IconView = styled.View`
    position: absolute;
    right: 20px;
    position: absolute;
    top: 35px;
`;

const TransactionBar: React.FC<TransactionBarProps> = (props) => {

    // Initialize state variables for priceUp and showGraph
    const [priceUp ,setPriceUp] = useState(true);
    const [showGraph ,setShowGraph] =useState(false);

    // Initialize state variables for 'price' and 'icon'
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


    // Function to handle button press and toggle showGraph state
    const pressHandler = () => {
        props.onPress(); // Call the 'onPress' function provided in props
        setShowGraph(!showGraph); // Toggle the 'showGraph' state
    };

    return (
        <StyledTouchableOpacity onPress={pressHandler}>
        <SmallText str={props.name} customCss={customNameText}/>
        <SmallText  str={`${props.amount.toString()} COINS`} customCss={customAmountText}/>
        {icon ? <StyledImage source={icon} /> : null} 
        <SmallText str={props.date.toDateString()} customCss={customDateText}/>
        <SmallText str={`$${price.toString()}`} customCss={customPriceText}/>

        <IconView>
            <Ionicons name={priceUp ? 'trending-up-outline' :'trending-down-outline'} size={25} color={priceUp ? 'green' :'red'} />
        </IconView>

        {showGraph ? <LinearChart symbol={props.symbol} /> :null}

    </StyledTouchableOpacity>
  );
}

export default TransactionBar;