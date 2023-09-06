import React from 'react';
import styled ,{css} from 'styled-components/native';
import { AppColors } from '../../utils/colors';
import { screenWidth } from '../../utils/shared';
import RegularText from '../Texts/RegularText';

interface RegularBtnProps {
  BtnText:string;
  handelPress?:()=>void;
  customCss?:ReturnType<typeof css>;
}


const RegularBtn: React.FC<RegularBtnProps> = (props) => {


  const defaultCss = css`
    background-color: ${AppColors.secondary};
    border-radius: 20px;
    height: 50px;
    width:${(screenWidth*0.7)}px;
    align-items: center;
    justify-content: center;
  `;

  const StyledButton = styled.TouchableOpacity`
    ${defaultCss};
    ${props.customCss}; 
`;

  return (
    <StyledButton onPress={props.handelPress}>
      <RegularText str={props.BtnText} />
    </StyledButton>
    );
}

export default RegularBtn;