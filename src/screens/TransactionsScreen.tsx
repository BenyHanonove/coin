import React from 'react';
import { Container } from '../utils/shared';
import { css } from 'styled-components';

//Components 
import BigText from '../components/Texts/BigText';
import TransactionScrollView from '../components/Sliders/TransactionScrollView';

// Define a custom CSS snippet for big text
const customBigText = css`
  margin: 20px;
`;

const TransactionsScreen: React.FC = () => {

  return (
    <Container>
      <BigText str='TRANSACTIONS' customCss={customBigText}/>
      <TransactionScrollView/>
    </Container>
  );
}

export default TransactionsScreen;