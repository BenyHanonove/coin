import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import styled from 'styled-components/native';
import { screenWidth } from '../../utils/shared';
import { card } from '../../utils/data';
import { AppColors } from '../../utils/colors';

// Define an interface for the props of the 'CardInput' component
interface CardSelectorProps {
  arr: card[];
  header:string;
  onChange: (obj: card) => void;
};

// Create a styled 'View' component with specific styles for input container
const StyledView  = styled.View`
    height: 50px;
    width: ${screenWidth*0.8};
    border-radius:5px;
    margin: 10px;
    border-radius: 15px;
    border-bottom-width: 2px;
    border-bottom-color: ${AppColors.black};
`;


const CardSelector: React.FC<CardSelectorProps> = (props) => {

  //State to selected item
  const [selectedItem, setSelectedItem] = useState<card | null>(null);

  // Define a function to handle changes in the selected item value
  const handleChange = (itemValue: card | null) => {
    // Check if 'itemValue' is not null
    if (itemValue !== null) {
      // Update the 'selectedItem' state with the new value
      setSelectedItem(itemValue);
      
      // Call the 'onChange' function provided in props with the new value
      props.onChange(itemValue);
    }
  };
  
  return (
    <StyledView>
        <Picker
        selectedValue={selectedItem}
        onValueChange={(itemValue) =>
          handleChange(itemValue)
        }
        >
            <Picker.Item label={props.header} value={null} />
            {props.arr.map((item ,index)=>
                <Picker.Item key={index} label={item.number} value={item.number} />
            )}
        </Picker>
    </StyledView>
  );
}

export default CardSelector;