import React from 'react';
import styled ,{css} from 'styled-components/native';
import { AppColors } from '../../utils/colors';

// Define an interface for the props of the 'BigText' component
interface BigTextProps {
  str:string;
  customCss?:ReturnType<typeof css>;
}


const BigText: React.FC<BigTextProps> = (props) => {
  
    // Define default CSS styles for the text
  const defaultCss = css`
    font-size: 29px;
    color: ${AppColors.text};
    font-weight: bold;
  `;
  
  // Create a styled 'Text' component with default and custom CSS
  const StyledText = styled.Text`
    ${defaultCss};
    ${props.customCss}; 
  `;

  return(    
    <StyledText>
      {props.str}
    </StyledText>
  );
};

export default BigText;