import React from 'react';
import styled from 'styled-components/native';
import { screenWidth } from '../../utils/shared';
import { AppColors } from '../../utils/colors';

// Define an interface for the props of the 'FormInput' component
interface FormInputProps {
  tag:string;
  secret:boolean;
  onChangeText?(str:string):void;
};

// Create a styled 'TextInput' component with specific styles for input fields
const StyleInput = styled.TextInput`
    width:${screenWidth*0.8}px;
    height: 50px;
    border-radius: 15px;
    background-color: ${AppColors.background};
    padding: 10px;
    margin-top: 20px;
    z-index: 1;
    border-bottom-width: 2px;
    border-bottom-color: ${AppColors.black};
`;


const FormInput: React.FC<FormInputProps> = (props) => {
  
  // Define a function to handle button presses and trigger the 'onChangeText' function if provided in props
  const buttonDown = (str: string) => {
    // Check if the 'onChangeText' function is provided in props
    if (props.onChangeText) {
      // Call the 'onChangeText' function with the provided string
      props.onChangeText(str);
    }
  };

  return (
    <StyleInput 
    placeholder={props.tag} 
    secureTextEntry={props.secret}
    onChange={(event) => {
        buttonDown(event.nativeEvent.text);
    }}
    />
  );
}

export default FormInput;