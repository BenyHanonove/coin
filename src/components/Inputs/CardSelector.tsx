import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import styled from 'styled-components/native';
import { screenWidth } from '../../utils/shared';
import { card } from '../../utils/data';
import { AppColors } from '../../utils/colors';

interface SelectorProps {
  arr: card[];
  header:string;
  onChange: (obj: card) => void;
};

const StyledView  = styled.View`
    height: 50px;
    width: ${screenWidth*0.8};
    border-radius:5px;
    margin: 10px;
    border-radius: 15px;
    border-bottom-width: 2px;
    border-bottom-color: ${AppColors.black};
`;


const Selector: React.FC<SelectorProps> = (props) => {

  const [selectedItem, setSelectedItem] = useState<card | null>(null);

    const handleChange = (itemValue: card | null) => {
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
            <Picker.Item label={props.header} value={null} />
            {props.arr.map((item ,index)=>
                <Picker.Item key={index} label={item.number} value={item.number} />
            )}
        </Picker>
    </StyledView>
  );
}

export default Selector;