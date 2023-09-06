import React from 'react';
import styled ,{css} from 'styled-components/native';
import { screenWidth } from '../../utils/shared';
import WalletBtn from '../Buttons/WalletBtn';

export interface walletBtnOption {
  btnStr: string;
  iconName: string;
}

interface WalletControlProps {
  optionArr:walletBtnOption[];
  customCss?:ReturnType<typeof css>;
  viewArr:React.FC<any>[];
};

const WalletControl: React.FC<WalletControlProps> = (props) => {

  const StyledView = styled.View`
    width: ${screenWidth};
    height: 21%;
    margin: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    ${props.customCss}
  `;

  return (
    <StyledView>
        {props.optionArr.map((value ,index)=>(
            <WalletBtn key={index} iconStr={value.iconName} btnStr={value.btnStr} view={props.viewArr[index]}/>
        ))}
    </StyledView>
  );
}

export default WalletControl;