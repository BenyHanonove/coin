import React from 'react';
import { LineChart } from "react-native-chart-kit";
import { screenWidth } from '../../utils/shared';
import styled ,{css} from 'styled-components/native';
import { AppColors } from '../../utils/colors';

//Components 
import WalletControl from '../Sliders/WalletControl';

//Screen Views
import Withdraw from '../Views/Withdraw';
import Trade from '../Views/Trade';

interface LinearChartProps {
  symbol:string;
}

const optionArr = [
  {btnStr:"Trade" ,iconName:"cart-outline"},
  {btnStr:"Withdraw" ,iconName:"cash-outline"},
];

const viewsArr = [Trade ,Withdraw];

const StyledView = styled.View`
  align-items: center;
  margin-top: 100px;
`;

const customWalletControl = css`
  justify-content:space-evenly;
  height: 32%;
  margin: 0px;
`;

const LinearChart: React.FC<LinearChartProps> = (props) => {


  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [10,30,23,42,76,200],
      },
    ],
  };

  return (
    <StyledView>

      <LineChart
        data={data}
        width={screenWidth*0.9}
        height={230}
        chartConfig={{
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2,
            color: (opacity = 1) => AppColors.darkBlue,
            labelColor: (opacity = 1) => AppColors.text,
          }}
        />


    </StyledView>
  );
}

export default LinearChart;