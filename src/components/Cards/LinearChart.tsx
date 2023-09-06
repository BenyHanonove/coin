import React from 'react';
import { LineChart } from "react-native-chart-kit";
import { screenWidth } from '../../utils/shared';
import styled ,{css} from 'styled-components/native';
import { AppColors } from '../../utils/colors';

//Screen Views
import Withdraw from '../Views/Withdraw';
import Trade from '../Views/Trade';

// Define an interface for the props of the 'LinearChart' component
interface LinearChartProps {
  symbol:string;
}

// Define an array of options for buttons
const optionArr = [
  {btnStr:"Trade" ,iconName:"cart-outline"},
  {btnStr:"Withdraw" ,iconName:"cash-outline"},
];

// Define an array of views
const viewsArr = [Trade ,Withdraw];

// Create a styled 'View' component
const StyledView = styled.View`
  align-items: center;
  margin-top: 100px;
`;


const LinearChart: React.FC<LinearChartProps> = (props) => {


  // Define a data object for a chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Array of labels for the x-axis
    datasets: [
      {
        data: [10, 30, 23, 42, 76, 200], // Array of data points for the chart
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