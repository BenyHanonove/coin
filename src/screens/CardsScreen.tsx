import React, { useState } from 'react';
import { Container } from '../utils/shared';
import styled ,{ css } from 'styled-components/native';
import { KeyboardAvoidingView ,ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Components
import CreditCardBtn from '../components/Buttons/CreditCardBtn';
import BigText from '../components/Texts/BigText';
import NewCreditCard from '../components/Views/NewCreditCard';
import InteractiveCard from '../components/Cards/InteractiveCard';
import { userDataTemplate } from '../utils/data';

interface CardsScreenProps {
  // define props
}

// Define the type for a card object
export interface Card {
  number: string;
  nameHolder: string;
  expirationDate: string;
}

const customBigText = css`
  font-weight: bold;
  margin: 20px;
`;

const BackArrowView = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  left: 10px;
`;


const CardsScreen: React.FC<CardsScreenProps> = () => {

  //State that shows the new card 
  const [showForm ,setShowForm] = useState(false);
  const [cardsArray, setCardsArray] = useState(userDataTemplate.cards);

  //Function thats show the new card form
  const flipShowForm = () => {setShowForm(!showForm);};

  //Function to add cards
  const addCard = (card: Card) => {
    setCardsArray([...cardsArray, card]);
    setShowForm(false);
  };


  return (
    <Container >

        <KeyboardAvoidingView>
          <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
            <BigText str='MY CARDS' customCss={customBigText}/>


            {showForm ? 
            <>
            <BackArrowView onPress={flipShowForm}>
              <Ionicons name='arrow-back-outline' size={50} color='black'/>
            </BackArrowView>
            
            <NewCreditCard uploadCard={addCard} /> 
            </>
            :
            (
            <>
            {cardsArray.map((item, index) => (
              <InteractiveCard
                key={index}
                number={item.number}
                nameHolder={item.nameHolder}
                expirationDate={item.expirationDate}
              />
            ))}
            <CreditCardBtn press={flipShowForm} />
            </>
            )
            } 
          

          </ScrollView>
        </KeyboardAvoidingView>

    </Container>
  );
}

export default CardsScreen;