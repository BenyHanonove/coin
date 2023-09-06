import React from 'react';
import styled ,{css} from 'styled-components/native';
import { AppColors } from '../../utils/colors';

interface SmallTextProps {
  str:string;
  handelPress?(): void;
  customCss?:ReturnType<typeof css>;
};


const SmallText: React.FC<SmallTextProps> = (props) => {

  const defaultCss = css`
  font-size: 17px;
  color: ${AppColors.text};
  text-align: left;
`;

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