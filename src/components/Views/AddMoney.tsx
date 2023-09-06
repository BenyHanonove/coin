import React, { useEffect, useState } from 'react';
import styled ,{css} from 'styled-components/native';
import { AppColors } from '../../utils/colors';
import { screenHeight, screenWidth } from '../../utils/shared';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { card, userDataTemplate } from '../../utils/data';

//Components
import RegularBtn from '../Buttons/RegularBtn';
import FormInput from '../Inputs/FormInput';
import BigText from '../Texts/BigText';
import CardSelector from '../Inputs/CardSelector';
import SmallText from '../Texts/SmallText';
import AlertMessage from '../Alerts/AlertMessage';


interface AddMoneyProps {
  close:()=>void;
};

const StyledView = styled.View`
  position: absolute;
  background-color: ${AppColors.background};
  height: ${screenHeight};
  width: ${screenWidth};
  z-index: 3;
  display:flex;
  align-items: center;
  justify-content: center;
`;

const BackArrowView = styled.TouchableOpacity`
  z-index: 4;
  position: absolute;
  top: 85px;
  left: 5px;
`;

const customBtnCss = css`
  margin-top: 20px;
`;

const customBigText = css`
  margin-top: 20px;
`;

const customErrorText = css`
  color: ${AppColors.error};
  margin-top: 30px;
`;


const AddMoney: React.FC<AddMoneyProps> = (props) => {

  const [amount ,setAmount] = useState("");
  const [obj, setObj] = useState<card>();
  const [errorMsg ,setErrorMsg] = useState("");

  useEffect(() => {
    const containsLetters = /[a-zA-Z]/.test(amount);
    if(containsLetters){
      setErrorMsg("Amount cannot contain letters");
      return;
    }
    else{ 
      setErrorMsg("");
    };

    if(obj ===undefined){
      setErrorMsg("Please select card");
      return;
    }
    else{ 
      setErrorMsg("");
    }
  }, [obj, amount]);


  const handelPress = () =>{
    if(errorMsg === ""){ 
      setAlertTitle("Success!");
      setAlertText("The money has been added to your account.");
      setTimeout(() => {
        props.close()
      }, 2000);
    };
  };

  const [alertTitle ,setAlertTitle] = useState("");
  const [alertText ,setAlertText] = useState("");

  //Function that handles when alert is closed after timeout
  const alertHandler = () =>{
    setAlertText("")
    setAlertTitle("");
  };

  return (
    <StyledView>
      
      <BackArrowView onPress={props.close}>
        <Ionicons name={"arrow-back-outline"} size={50} color='black'/>
      </BackArrowView>

      <BigText str='Add Money' customCss={customBigText}/>

      <CardSelector arr={userDataTemplate.cards} header='Select card' onChange={setObj}/>

      <FormInput tag='Amount' secret={false} onChangeText={(value)=>setAmount(value)}/>

      <RegularBtn BtnText="Add" customCss={customBtnCss} handelPress={handelPress}/>

      {errorMsg && <SmallText str={errorMsg} customCss={customErrorText} />}

      {alertText==="" ? null : <AlertMessage alertTitle={alertTitle} alertMsg={alertText} handelPress={alertHandler} />}

    </StyledView>
  );
}

export default AddMoney;