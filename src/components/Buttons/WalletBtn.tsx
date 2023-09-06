import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled , {css} from 'styled-components/native';
import SmallText from '../Texts/SmallText';
import { AppColors } from '../../utils/colors';

interface WalletBtnProps {
  customCss?:ReturnType <typeof css>;
  iconStr:string;
  btnStr:string;
  view:React.FC<any>;
};


const WalletBtn: React.FC<WalletBtnProps> = (props) => {

  const [showView ,setShowView] = useState(false);

    const defaultCss = css`
        width: 31%;
        height: 80%;
        background-color: white;
        border-radius: 20px;
        justify-content: center;
        align-items: center;
        border:2px ${AppColors.darkBlue};
    `;

    const StyledTouchableOpacity = styled.TouchableOpacity`
        ${defaultCss};
        ${props.customCss}
    `;

    const customSmallText = css`
    margin-top: 7px;
    `;

    const flipShowView = () => setShowView(!showView);

    return (
      <>
      <StyledTouchableOpacity onPress={flipShowView}>
          <Ionicons name={props.iconStr} size={32} color={"black"}/>
          <SmallText str={props.btnStr} customCss={customSmallText}/>


      </StyledTouchableOpacity>

      {showView ? <props.view close={flipShowView}/> : null}
      </>
  );
}

export default WalletBtn;