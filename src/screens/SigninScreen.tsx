import React, { useState } from 'react';
import { Container } from '../utils/shared';
import { css } from 'styled-components';

//Components
import BIgText from '../components/Texts/BigText';
import FormInput from '../components/Inputs/FormInput';
import RegularBtn from '../components/Buttons/RegularBtn';
import SmallText from '../components/Texts/SmallText';
import { RouteProp } from '@react-navigation/native';


//Navigation
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootStack';
import { useNavigation } from '@react-navigation/native';
import AlertMessage from '../components/Alerts/AlertMessage';

type SigninScreenRouteProp = RouteProp<RootStackParamList, 'Signin'>;
interface SigninScreenProps {
  route: SigninScreenRouteProp;
}

const SigninScreen: React.FC<SigninScreenProps> = (props) => {

  //State to handle alert msg view 
  const [alertTitle ,setAlertTitle] = useState("");
  const [alertText ,setAlertText] = useState("");


  //Navigation props
  type SigninScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Signin'>;
  const navigation = useNavigation<SigninScreenNavigationProp>();


  //Function that handles navigation to sign up screen
  const moveToSignup = () =>{ navigation.navigate('Signup');};


  //Custom css for btn
  const customBtn = css`margin-top: 40px;`;

  //Custom css for smallText
  const customSmallText = css`padding: 20px;`;


  //Object for user information 
  const [userData ,setUserData] = useState({
      email:"",
      password:"",
  });


  //Function that handles the text change in each input 
  const handleInputChange = (field: string, value: string) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
      }));
    };
 
 
    //Function that handles btn press with form valid
  const pressHandler = () => {
    setAlertText("Welcome back beny hanonove");
    setAlertTitle("Hello");

    setTimeout(() => {
      if (props.route.params && props.route.params.flipUser) {
        props.route.params.flipUser();
      }
    }, 2000);

  };


  //Function that handels when alert is closed after timeout
  const alertHandler = () =>{
    setAlertText("")
    setAlertTitle("");
  };


  return (
    <Container style={{justifyContent:"center"}}>

      <BIgText str='Sign in'/>

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
      
      <RegularBtn BtnText='Sign in' handelPress={pressHandler} customCss={customBtn}/>
    
      <SmallText str='Create new account.' handelPress={moveToSignup} customCss={customSmallText}/>

      {alertText==="" ? null : <AlertMessage alertTitle={alertTitle} alertMsg={alertText} handelPress={alertHandler} />}


    </Container>
  );
}

export default SigninScreen;