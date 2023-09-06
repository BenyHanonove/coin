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


// Define an interface for Withdraw component props
interface AddMoneyProps {
  close:()=>void;
};


// StyledView: Represents a styled container for modal content
const StyledView = styled.View`
  position: absolute;
  background-color: ${AppColors.background};
  height: ${screenHeight};
  width: ${screenWidth};
  z-index: 3;
  align-items: center;
  justify-content: center;
`;

// BackArrowView: Represents a styled TouchableOpacity for a back arrow button
const BackArrowView = styled.TouchableOpacity`
  z-index: 4;
  position: absolute;
  top: 85px;
  left: 5px;
`;

// customBtnCss: Represents a custom CSS snippet for buttons
const customBtnCss = css`
  margin-top: 20px;
`;

// customBigText: Represents a custom CSS snippet for large text elements
const customBigText = css`
  margin-top: 20px;
`;

// customErrorText: Represents a custom CSS snippet for displaying error text in a specific color
const customErrorText = css`
  color: ${AppColors.error};
  margin-top: 30px;
`;

const AddMoney: React.FC<AddMoneyProps> = (props) => {

  //Stats to handel changes in this view
  const [amount ,setAmount] = useState("");
  const [obj, setObj] = useState<card>();
  const [errorMsg ,setErrorMsg] = useState("");



  // Use a useEffect hook to perform checks when 'obj' or 'amount' changes
  useEffect(() => {
    // Check if 'amount' contains any letters (alphabets)
    const containsLetters = /[a-zA-Z]/.test(amount);

    // If 'amount' contains letters, set an error message
    if (containsLetters) {
      setErrorMsg("Amount cannot contain letters");
      return;
    } else {
      // Clear the error message if there are no letters in 'amount'
      setErrorMsg("");
    }

    // Check if 'obj' is undefined
    if (obj === undefined) {
      setErrorMsg("Please select card");
      return;
    } else {
      // Clear the error message if 'obj' is defined
      setErrorMsg("");
    }
  }, [obj, amount]);


  // Define a function to handle button press
  const handelPress = () => {
    // Check if there are no error messages
    if (errorMsg === "") {
      // Set an alert title and text for success
      setAlertTitle("Success!");
      setAlertText("The money has been added to your account.");
      
      // Close the modal after a delay of 2000 milliseconds (2 seconds)
      setTimeout(() => {
        props.close(); // Call the 'close' function provided as a prop
      }, 2000);
    }
  };


  //Stats for handel alert data
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