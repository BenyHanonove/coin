import React from 'react';
import styled ,{css} from 'styled-components/native';
import { AppColors } from '../../utils/colors';

// Define an interface for the props of the 'RegularText' component
interface RegularTextProps {
    str:string;
    customCss?:ReturnType<typeof css>;
}

const RegularText: React.FC<RegularTextProps> = (props) => {

  // Define default CSS styles for the text
  const defaultCss = css`
    font-size: 24px;
    color: ${AppColors.text};
  `;

  // Create a styled 'Text' component with default and custom CSS
  const StyledText = styled.Text`
    ${defaultCss};
    ${props.customCss}
  `;

  return (
    <StyledText>
      {props.str}
    </StyledText>
  );
}

export default RegularText;