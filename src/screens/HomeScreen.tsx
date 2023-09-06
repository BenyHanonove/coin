import React from 'react';
import { Container } from '../utils/shared';

//Components 
import Greetings from '../components/Views/Greetings';
import WalletControl from '../components/Sliders/WalletControl';
import FlatTransactionList from '../components/Sliders/FlatTransactionList';

//Screen Views
import AddMoney from '../components/Views/AddMoney';
import Withdraw from '../components/Views/Withdraw';
import Trade from '../components/Views/Trade';

const optionArr = [
  {btnStr:"Add Money" ,iconName:"add",},
  {btnStr:"Trade" ,iconName:"trending-up"},
  {btnStr:"Withdraw" ,iconName:"cash-outline"},
];

const viewsArr = [AddMoney ,Trade ,Withdraw];

const HomeScreen: React.FC = () => {
  return (
    <Container>
      <Greetings/>
      <WalletControl optionArr={optionArr} viewArr={viewsArr}/>
      <FlatTransactionList/>
    </Container>
  );
}

export default HomeScreen;