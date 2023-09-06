import React, { useEffect, useState } from 'react';
import styled , {css} from 'styled-components/native';
import { AppColors } from '../../utils/colors';
import { screenHeight, screenWidth } from '../../utils/shared';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Components 
import RegularBtn from '../Buttons/RegularBtn';
import FormInput from '../Inputs/FormInput';
import SmallText from '../Texts/SmallText';
import RegularText from '../Texts/RegularText';
import { getCoinValue } from '../../utils/api';
import { userDataTemplate } from '../../utils/data';
import AlertMessage from '../Alerts/AlertMessage';

interface TradeProps {
  close:()=>void;
}

const StyledView = styled.View`
  position: absolute;
  background-color: ${AppColors.background};
  height: ${screenHeight};
  width: ${screenWidth};
  z-index: 3;
  align-items: center;
  justify-content: center;
`;


const BackArrowView = styled.TouchableOpacity`
  z-index: 3;
  position: absolute;
  top: 85px;
  left: 5px;
`;

const customBtnCss = css`
  margin-top: 20px;
`;

const customSmallText = css`
  margin-top: 20px;
`;

const customErrorText = css`
  color: ${AppColors.error};
  margin-top: 30px;
`;


const Trade: React.FC<TradeProps> = (props) => {

  const [coinName ,setCoinName] = useState("");
  const [amount ,setAmount] = useState("0");
  const [coinPrice ,setCoinPrice] = useState(0);
  const [errorMsg ,setErrorMsg] = useState("");


  //Hook to get the coin value from api
  useEffect(()=>{
    async function fetchCoinValue() {
      const coinValue = await getCoinValue(coinName);
      if (coinValue) {
        setCoinPrice(parseFloat(coinValue));
      }else{

        setCoinPrice(0);
      }
    }
    fetchCoinValue();
  },[coinName]);

  //Hook to handel errors 
  useEffect(()=>{
    
    //Checks if coin name is valid
    if(coinName === "" && !coinPrice){
        setErrorMsg("Invalid coin name");
        return;
      }else{
        setErrorMsg("");
    }

    //Checks if amount has only numbers inside
    const containsLetters = /[a-zA-Z]/.test(amount);
    if(containsLetters){
      setErrorMsg("Amount cannot contain letters");
      return;
    }
    else{ 
      setErrorMsg("");
    };

    //Checks if balance has enough money in account 
    if(parseFloat(amount) * coinPrice > userDataTemplate.balance){
      setErrorMsg("Balance don`t have enough money");
      return;
    }else{
      setErrorMsg("");
    }

  },[coinName ,amount ,coinPrice]);


  const [alertTitle ,setAlertTitle] = useState("");
  const [alertText ,setAlertText] = useState("");

  //Function that handles when alert is closed after timeout
  const alertHandler = () =>{
    setAlertText("")
    setAlertTitle("");
  };

  const handelPress = () =>{
    if(errorMsg === ""){ 
      setAlertTitle("Success!");
      setAlertText("The asset is now on your account.");
      setTimeout(() => {
        props.close()
      }, 2000);
    };
  };


  return (
    <StyledView>

      <BackArrowView onPress={props.close}>
        <Ionicons name={"arrow-back-outline"} size={50} color='black'/>
      </BackArrowView>

      <RegularText str='Trade'/>

      <FormInput 
      tag='Enter coin' 
      secret={false}
      onChangeText={(value)=>setCoinName(value)}
      />

      <FormInput 
      tag='Enter amount' 
      secret={false} 
      onChangeText={(value)=>setAmount((value))}
      />

      <SmallText str={`${amount} X ${coinPrice} = ${(parseFloat(amount) * coinPrice).toFixed(2)}`} customCss={customSmallText} />

      <RegularBtn BtnText='Buy' customCss={customBtnCss} handelPress={handelPress}/>

      {errorMsg && <SmallText str={errorMsg} customCss={customErrorText} />}

      {alertText==="" ? null : <AlertMessage alertTitle={alertTitle} alertMsg={alertText} handelPress={alertHandler} />}

    </StyledView>
  );
}

export default Trade;