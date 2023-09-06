import React, { useState } from 'react';
import styled ,{css} from "styled-components/native";


// Define an interface for the props of the 'CardInput' component
interface CardInputProps {
    holder:string;
    onType:(str:string)=>void;
    customCss?:ReturnType<typeof css>
};

const CardInput: React.FC<CardInputProps> = (props) => {
    
    //State to handel number
    const [number ,setNumber] = useState("");

    //Styled Component of input 
    const StyledTextInput = styled.TextInput`
        ${props.customCss};
    `;



    // Function that handles the input field by the user
    const handleType = (str: string) => {
        // Remove non-digit characters from the input string
        const digitsOnly = str.replace(/\D/g, '');

        // Ensure the input is limited to 16 characters
        const truncatedDigits = digitsOnly.slice(0, 16);

        // Initialize an array to store groups of digits
        const groups = [];

        // Divide the truncated digits into groups of 4 characters each
        for (let i = 0; i < truncatedDigits.length; i += 4) {
            groups.push(truncatedDigits.slice(i, i + 4));
        }

        // Join the groups with hyphens and call the 'onType' function provided in props
        props.onType(groups.join("-"));

        // Update the 'number' state with the formatted number
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
