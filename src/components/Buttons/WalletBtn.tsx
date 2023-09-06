import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled , {css} from 'styled-components/native';
import SmallText from '../Texts/SmallText';
import { AppColors } from '../../utils/colors';

// Interface for Wallet Button Props
interface WalletBtnProps {
  customCss?:ReturnType <typeof css>;
  iconStr:string;
  btnStr:string;
  view:React.FC<any>;
};


const WalletBtn: React.FC<WalletBtnProps> = (props) => {

  // State variable to control the visibility of the view
  const [showView, setShowView] = useState(false);

  // Define default CSS styles for the component
  const defaultCss = css`
    width: 31%;
    height: 80%;
    background-color: white;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    border: 2px ${AppColors.darkBlue};
  `;

  // Create a styled 'TouchableOpacity' component with default and custom CSS styles
  const StyledTouchableOpacity = styled.TouchableOpacity`
    ${defaultCss};
    ${props.customCss};
  `;

  // Define custom CSS for small text elements
  const customSmallText = css`
    margin-top: 7px;
  `;

  // Function to toggle the visibility of the view
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