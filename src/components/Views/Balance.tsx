import React from 'react';
import styled ,{css} from 'styled-components/native';
import BigText from '../Texts/BigText';
import SmallText from '../Texts/SmallText';

interface BalanceProps {
  amount:number;
  customCss?: ReturnType <typeof css> ;
}


const Balance: React.FC<BalanceProps> = (props) => {

  const defaultViewCss = css`
    justify-content: center;
    align-items: center;
  `;

  const StyledView = styled.View`
    ${defaultViewCss}
    ${props.customCss}
  `;


  return (
    <StyledView>
        <SmallText str='balance'/>
        <BigText str={`$${props.amount.toString()}`} />
    </StyledView>
  );
}

export default Balance;