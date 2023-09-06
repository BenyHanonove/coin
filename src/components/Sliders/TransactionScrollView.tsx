import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/native';
import { screenWidth } from '../../utils/shared';
import { ImageSourcePropType, ScrollView } from 'react-native';
import { userDataTemplate } from '../../utils/data';
import { getCoinIcon } from '../../utils/api';

// Components
import TransactionBar from '../Cards/TransactionBar';

// Create a styled 'View' component with specific styles
const StyledView = styled.View`
  width: ${screenWidth};
  margin-top: 10px;
  flex: 1;
`;

const TransactionScrollView: React.FC = () => {

  //States for slider 
  const [icons, setIcons] = useState<{ [key: string]: ImageSourcePropType }>({});
  const scrollViewRef = useRef<ScrollView>(null);

  // Define a function to scroll to a specific element within a ScrollView
  const scrollToElement = (index: number) => {
    if (scrollViewRef.current) {
      // Calculate the vertical offset based on the index
      const yOffset = index * 100;
      
      // Scroll to the calculated offset with animation
      scrollViewRef.current.scrollTo({ y: yOffset, animated: true });
    }
  };

  
// Use a useEffect hook to load coin icons when the component mounts
useEffect(() => {
  // Load coin icons
  const loadCoinIcons = async () => {
    // Create an object to store coin icons
    const iconData: { [key: string]: ImageSourcePropType } = {};
    
    // Loop through the user's assets and load icons for each asset
    for (const item of userDataTemplate.assets) {
      try {
        // Get the icon for the asset using the 'getCoinIcon' function
        const icon = await getCoinIcon(item.name);
        
        // Store the icon data in the 'iconData' object
        iconData[item.name] = { uri: icon };
      } catch (err) {
        // Handle errors while loading icons
        console.error(`Error loading icon for ${item.name}:`, err);
      }
    }
    
    // Set the loaded icons in the state
    setIcons(iconData);
  };

  // Call the 'loadCoinIcons' function when the component mounts
  loadCoinIcons();
}, []);


  return (
    <StyledView>
      <ScrollView ref={scrollViewRef}>
        {userDataTemplate.assets.map((item, index) => (
          <TransactionBar
            name={item.name}
            image={icons[item.name]} 
            date={item.purchaseDate}
            symbol={item.symbol}
            amount={item.amount}
            key={index}
            onPress={() => scrollToElement(index)}
          />
        ))}
      </ScrollView>
    </StyledView>
  );
};

export default TransactionScrollView;
