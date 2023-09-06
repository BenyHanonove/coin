import React, { useState } from 'react';
import styled ,{css}  from 'styled-components/native';

// Define an interface for the props of the 'RegularInput' component
interface RegularInputProps {
  holder:string;
  onType:(str:string)=>void;
  customCss?:ReturnType<typeof css>
};


const RegularInput: React.FC<RegularInputProps> = (props) => {

  //State to handel holder name 
  const [holderName ,setHolderName] = useState("");

  // Create a styled 'TextInput' component with custom CSS applied
  const StyledTextInput = styled.TextInput`
    ${props.customCss};
  `;

  // Define a function to handle text input and update 'holderName' state
  const handleType = (str:string) =>{
    setHolderName(str);
    props.onType(str);
  };

  return (
    <StyledTextInput
    placeholder={props.holder}
    onChangeText={text =>handleType(text)}
    value={holderName}
    />
  );
}

export default RegularInput;