import React from 'react';
import styled ,{css} from 'styled-components/native';
import BigText from '../Texts/BigText';
import SmallText from '../Texts/SmallText';

// Define an interface for the props of the 'Balance' component
interface BalanceProps {
  amount:number;
  customCss?: ReturnType <typeof css> ;
}


const Balance: React.FC<BalanceProps> = (props) => {

  // Define a default CSS snippet for centering content
  const defaultViewCss = css`
    justify-content: center;
    align-items: center;
  `;

  // Create a styled 'View' component with default and custom CSS
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