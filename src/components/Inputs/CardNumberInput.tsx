import React, { useState } from 'react';
import styled ,{css} from "styled-components/native";

interface CardInputProps {
    holder:string;
    onType:(str:string)=>void;
    customCss?:ReturnType<typeof css>
};

const CardInput: React.FC<CardInputProps> = (props) => {
    
    const [number ,setNumber] = useState("");

    //Styled Component of input 
    const StyledTextInput = styled.TextInput`
        ${props.customCss};
    `;



    //Function that handles the input field by user 
    const handleType = (str:string) => {
        const digitsOnly = str.replace(/\D/g, '');
        const truncatedDigits = digitsOnly.slice(0, 16);
        const groups = [];

        for (let i = 0; i < truncatedDigits.length; i += 4) {
            groups.push(truncatedDigits.slice(i, i + 4));
        }

        props.onType(groups.join("-"));
        setNumber(groups.join("-"));
    };

    return (
        <StyledTextInput
            key={props.holder}
            placeholder={props.holder}
            keyboardType='numeric'
            onChangeText={text => handleType(text)}
            value={number}
            />
    );
}

export default CardInput;
