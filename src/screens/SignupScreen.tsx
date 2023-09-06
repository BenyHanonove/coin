import React, { useState } from 'react';
import { Container } from '../utils/shared';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootStack';
import { useNavigation } from '@react-navigation/native';
import { css } from 'styled-components';
import {validateForm} from "../utils/form"
import { TouchableWithoutFeedback ,Keyboard ,KeyboardAvoidingView, ScrollView} from "react-native";

//Components for screen
import AlertMessage from '../components/Alerts/AlertMessage';
import BIgText from '../components/Texts/BigText';
import RegularBtn from '../components/Buttons/RegularBtn';
import FormInput from '../components/Inputs/FormInput';
import SmallText from '../components/Texts/SmallText';

interface SignupScreenProps {
  // define props
}


const SignupScreen: React.FC<SignupScreenProps> = () => {

  //Navigation props
  type SignupScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Signup'>;
  const navigation = useNavigation<SignupScreenNavigationProp>();

  //State to handle alert msg view 
  const [alertTitle ,setAlertTitle] = useState("");
  const [alertText ,setAlertText] = useState("");

  //Object for user information 
  const [userData ,setUserData] = useState({
    fullName:"",
    email:"",
    password:"",
    confirmPassword:""
  });


  //Function that handles the text change in each input 
  const handleInputChange = (field: string, value: string) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  

  //Custom css for button
  const customBtn = css`margin-top: 40px;`;

  //Custom css for smallText
  const customSmallText = css`padding: 20px;`;

  //Function that handles navigation to sign in screen
  const moveToSignin = () =>{ navigation.navigate('Signin');};


  //Function that handles btn press with form valid
  const pressHandler = () => {
    const checkForm = validateForm(userData);
    if(checkForm === ""){ 
      setAlertTitle("Success!");
      setAlertText("New user has been created");
      setTimeout(() => {
        moveToSignin();
      }, 2000);
    }
    else{ 
      setAlertTitle("Form invalid");
      setAlertText(checkForm) ;
    }
  };

  //Function that handles when alert is closed after timeout
  const alertHandler = () =>{
    setAlertText("")
    setAlertTitle("");
  };

  return (
    <Container style={{justifyContent:"center"}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView  >
          <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>

            <BIgText str='Create new account'/>



            <FormInput
              secret={false}
              tag='Full name'
              onChangeText={(value) => handleInputChange('fullName', value)}
            />

            <FormInput
              secret={false}
              tag='Email'
              onChangeText={(value) => handleInputChange('email', value)}
              />

            <FormInput
              secret={true}
              tag='Password'
              onChangeText={(value) => handleInputChange('password', value)}
              />
            
            <FormInput
              secret={true}
              tag='Verify password'
              onChangeText={(value) => handleInputChange('confirmPassword', value)}
              />


            <RegularBtn BtnText='Sign up' handelPress={pressHandler} customCss={customBtn}/>
        
            <SmallText str='Already has account.' handelPress={moveToSignin} customCss={customSmallText}/>

        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>


      {alertText==="" ? null : <AlertMessage alertTitle={alertTitle} alertMsg={alertText} handelPress={alertHandler} />}

    </Container>
  );
}

export default SignupScreen;