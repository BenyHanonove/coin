import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import styled from 'styled-components/native';
import { screenWidth } from '../../utils/shared';
import { asset } from '../../utils/data';
import { AppColors } from '../../utils/colors';

// Define an interface for the props of the 'AssetsSelector' component
interface AssetsSelectorProps {
    arr:asset[];
    header:string;
    onChange: (obj: asset) => void;
};

// Create a styled 'View' component with specific styles for asset selection
const StyledView  = styled.View`
    height: 50px;
    width: ${screenWidth*0.8};
    border-radius:5px;
    margin: 10px;
    border-radius: 15px;
    border-bottom-width: 2px;
    border-bottom-color: ${AppColors.black};
`;


const AssetsSelector: React.FC<AssetsSelectorProps> = (props) => {

  //State for item select
  const [selectedItem, setSelectedItem] = useState<asset | null>(null);

  // Handle the change in the selected item value
  const handleChange = (itemValue: asset | null) => {
    if (itemValue !== null) {
      setSelectedItem(itemValue);
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
        <Picker.Item label={props.header} value={""} />
        {props.arr.map((item, index) => (
          <Picker.Item key={index} label={`${item.name} - ${item.amount}`} value={item} />
        ))}
      </Picker>
    </StyledView>
  );
}

export default AssetsSelector;