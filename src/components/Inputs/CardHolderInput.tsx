import React, { useState } from 'react';
import styled ,{css}  from 'styled-components/native';

interface RegularInputProps {
  holder:string;
  onType:(str:string)=>void;
  customCss?:ReturnType<typeof css>
};


const RegularInput: React.FC<RegularInputProps> = (props) => {

  const [holderName ,setHolderName] = useState("");

  const StyledTextInput = styled.TextInput`
    ${props.customCss};
  `;

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