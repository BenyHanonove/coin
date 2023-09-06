import React, { useState } from 'react';
import styled ,{css}  from 'styled-components/native';

// Define an interface for the props of the 'CardExpirationInput' component
interface CardExpirationInputProps {
    holder:string;
    onType:(str:string)=>void;
    customCss?:ReturnType<typeof css>
}

const CardExpirationInput: React.FC<CardExpirationInputProps> = (props) => {

    // Create a styled 'TextInput' component with custom CSS applied
    const StyledTextInput = styled.TextInput`
        ${props.customCss};
    `;

    //State for expiration  
    const [expiration ,setExpiration] = useState("");

    const handelType = (str:string) =>{
        const digitsOnly = str.replace(/\D/g, '');

        // Limit to 4 digits
        const truncatedDigits = digitsOnly.slice(0, 4);
    
    // Insert a slash after the first two characters when there are exactly 4 digits
    let formattedExpiration = truncatedDigits;
    if (formattedExpiration.length === 4) {
      formattedExpiration = formattedExpiration.replace(/^(..)/, '$1/');
    }
        setExpiration(formattedExpiration);
        props.onType(formattedExpiration);
    };
  
    return (
    <StyledTextInput
    keyboardType='numeric'
    placeholder={props.holder}
    onChangeText={text => handelType(text)}
    value={expiration}
    />
  );
}

export default CardExpirationInput;