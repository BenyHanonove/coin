import React from 'react';
import styled ,{css} from 'styled-components/native';
import { AppColors } from '../../utils/colors';

// Define an interface for the props of the 'SmallText' component
interface SmallTextProps {
  str:string;
  handelPress?(): void;
  customCss?:ReturnType<typeof css>;
};


const SmallText: React.FC<SmallTextProps> = (props) => {

  // Define default CSS styles for the text
  const defaultCss = css`
  font-size: 17px;
  color: ${AppColors.text};
  text-align: left;
  `;

  // Create a styled 'Text' component with default and custom CSS
  const StyledText = styled.Text`
  ${defaultCss}
  ${props.customCss}; 
  `;

  return (
    <StyledText onPress={props.handelPress}>
      {props.str}
    </StyledText>
  );
}

export default SmallText;