import React from 'react';
import { FlatList, ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';
import { userDataTemplate } from '../../utils/data';

//Components
import RegularText from '../Texts/RegularText';
import TransactionCard from "../Cards/TransactionCard";


const StyledView = styled.View`
  flex: 1;
  padding: 15px;
`;

const FlatListWithCards: React.FC = () => {
  
  const renderItem = ({ item }: { item: { id: string; header: string; amount: number; symbol: string ;name:string}}) => (
    <TransactionCard header={item.header} amount={item.amount} symbol={item.symbol} name={item.name} />
  );

  return (
    <StyledView>
      <RegularText str="Transaction" />
      <FlatList
        data={userDataTemplate.assets}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </StyledView>
  );
};

export default FlatListWithCards;
