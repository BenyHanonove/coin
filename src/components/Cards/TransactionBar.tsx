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

interface TransactionBarProps {
    name:string;
    symbol:string;
    image:ImageSourcePropType;
    date:Date;
    amount:number;
    onPress:()=>void;
};

//Touchable opacity view for the transaction card
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

const IconView = styled.View`
    position: absolute;
    right: 20px;
    position: absolute;
    top: 35px;
`;

const TransactionBar: React.FC<TransactionBarProps> = (props) => {

    const [priceUp ,setPriceUp] = useState(true);
    const [showGraph ,setShowGraph] =useState(false);

    const pressHandler = ()=>{
        props.onPress();
        setShowGraph(!showGraph)
    };

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