import React from 'react';
import { Container } from '../utils/shared';

// Components
import BigText from '../components/Texts/BigText';
import SmallText from '../components/Texts/SmallText';
import RegularBtn from '../components/Buttons/RegularBtn';
import welcomeLottie from "../assets/lottie/welcome.json";
import TopLottie from '../components/Views/TopLottie';

// Navigation
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/RootStack';
import { StackNavigationProp } from '@react-navigation/stack';
import { css } from 'styled-components';

// Welcome message and description
const welcomeMsg = "Welcome to Coinnecta";

const description =
  "Elevate your cryptocurrency experience with Coinnecta: " +
  "Effortless management, secure transactions, global accessibility, " +
  "and user-friendly interface. Discover financial empowerment " +
  "with Coinnecta – innovation meets peace of mind.";

// Welcome screen component
const WelcomeScreen: React.FC = () => {

  // Navigation props
  type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  // Function that handles navigation to sign up screen
  const pressHandler = () => {
    navigation.navigate('Signup');
  };

  // Custom CSS for button
  const customBtn = css`margin-top: 30px;`;

  // Custom CSS for text
  const customSmallText = css`
    margin-top: 30px; padding: 15px;
  `;

  return (
    <Container>
      <TopLottie file={welcomeLottie} size={350}/>

      <BigText str={welcomeMsg}/>

      <SmallText str={description} customCss={customSmallText}/>

      <RegularBtn BtnText='Get Started' handelPress={pressHandler} customCss={customBtn}/>
    </Container>
  );
}

export default WelcomeScreen;
