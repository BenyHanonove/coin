import React, { useEffect } from 'react';
import styled ,{css} from 'styled-components/native';
import { screenHeight, screenWidth } from '../../utils/shared';
import BigText from '../Texts/BigText';
import { AppColors } from '../../utils/colors';
import SmallText from '../Texts/SmallText';

interface AlertMessageProps {
  handelPress():void;
  alertMsg:string;
  alertTitle:string;
}

const defaultCss = css`
    position: absolute;
    z-index: 999;
    height: ${screenHeight*0.15};
    width: ${screenWidth*0.85};
    border-radius: 12px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    background-color: ${AppColors.lightGray};
    box-shadow: 13px 10px 20px ${AppColors.black};
`;

const StyledAlert = styled.View`
    ${defaultCss}
`;

const BlurredBackground = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 998;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(253, 247, 247, 0.5);`
;


const AlertMessage: React.FC<AlertMessageProps> = (props) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      props.handelPress(); // Automatically close the alert after 2.5 seconds
    }, 1500);

    return () => {
      clearTimeout(timer); // Clear the timeout when the component unmounts
    };
  }, []);


  return (
    <BlurredBackground>
      <StyledAlert>
        <BigText str={props.alertTitle}/>
        <SmallText str={props.alertMsg}/>
      </StyledAlert>
    </BlurredBackground >
  );
}

export default AlertMessage;