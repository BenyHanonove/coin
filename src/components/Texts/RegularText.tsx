import React from 'react';
import styled ,{css} from 'styled-components/native';
import { AppColors } from '../../utils/colors';

interface RegularTextProps {
    str:string;
    customCss?:ReturnType<typeof css>;
}

const RegularText: React.FC<RegularTextProps> = (props) => {

  const defualtCss = css`
    font-size: 24px;
    color: ${AppColors.text};
  `;

  const StyledText = styled.Text`
    ${defualtCss};
    ${props.customCss}
  `;

  return (
    <StyledText>
      {props.str}
    </StyledText>
  );
}

export default RegularText;