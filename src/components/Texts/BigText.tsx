import React from 'react';
import styled ,{css} from 'styled-components/native';
import { AppColors } from '../../utils/colors';

interface BigTextProps {
  str:string;
  customCss?:ReturnType<typeof css>;
}


const BigText: React.FC<BigTextProps> = (props) => {
  
  const defaultCss = css`
    font-size: 29px;
    color: ${AppColors.text};
    font-weight: bold;
  `;

  const StyledText = styled.Text`
    ${defaultCss};
    ${props.customCss}; 
  `;

  return <StyledText>{props.str}</StyledText>;
};

export default BigText;