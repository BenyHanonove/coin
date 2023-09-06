import React, { useEffect, useState } from 'react';
import styled ,{ css } from 'styled-components/native';
import { AppColors } from '../../utils/colors';
import { screenHeight, screenWidth } from '../../utils/shared';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { userDataTemplate , asset } from '../../utils/data';

//Components 
import RegularBtn from '../Buttons/RegularBtn';
import FormInput from '../Inputs/FormInput';
import AssetsSelector from '../Inputs/AssetsSelector';
import BigText from '../Texts/BigText';
import SmallText from '../Texts/SmallText';
import AlertMessage from '../Alerts/AlertMessage';

interface WithdrawProps {
  close:()=>void;
};

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

const Withdraw: React.FC<WithdrawProps> = (props) => {

  const [amount ,setAmount] = useState("");
  const [obj, setObj] = useState<asset>();
  const [errorMsg ,setErrorMsg] = useState("");


  useEffect(() => {
    if (obj !== undefined && obj.amount !== undefined) {
      if (parseFloat(amount) > obj.amount) {
        setErrorMsg("Amount is bigger than possible");
      } else {
        setErrorMsg("");
      }
    }else{
      setErrorMsg("Please select asset");
    }
  }, [obj, amount]);
  

  const handelPress = () =>{
    if(errorMsg === ""){ 
      setAlertTitle("Success!");
      setAlertText("The money will be delivered in 2-3 days to.");
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


      <BigText str='Withdraw' customCss={customBigText}/>

      <AssetsSelector arr={userDataTemplate.assets} header='Select asset' onChange={setObj}/>

      <FormInput tag='Amount' secret={false} onChangeText={(value)=>setAmount(value)}/>

      <RegularBtn BtnText="Withdraw" customCss={customBtnCss} handelPress={handelPress}/>    

      {errorMsg && <SmallText str={errorMsg} customCss={customErrorText} />}

      {alertText==="" ? null : <AlertMessage alertTitle={alertTitle} alertMsg={alertText} handelPress={alertHandler} />}

    </StyledView>
  );
}

export default Withdraw;