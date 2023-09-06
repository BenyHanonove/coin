import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/native';
import { screenWidth } from '../../utils/shared';
import { ImageSourcePropType, ScrollView } from 'react-native';
import { userDataTemplate } from '../../utils/data';
import { getCoinIcon } from '../../utils/api';

// Components
import TransactionBar from '../Cards/TransactionBar';

const StyledView = styled.View`
  width: ${screenWidth};
  margin-top: 10px;
  flex: 1;
`;

const TransactionScrollView: React.FC = () => {
  const [icons, setIcons] = useState<{ [key: string]: ImageSourcePropType }>({});
  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToElement = (index: number) => {
    if (scrollViewRef.current) {
      const yOffset = index * 100;
      scrollViewRef.current.scrollTo({ y: yOffset, animated: true });
    }
  };

  useEffect(() => {
    // Load coin icons
    const loadCoinIcons = async () => {
      const iconData: { [key: string]: ImageSourcePropType } = {};
      for (const item of userDataTemplate.assets) {
        try {
          const icon = await getCoinIcon(item.name);
          iconData[item.name] = { uri: icon };
        } catch (err) {
          console.error(`Error loading icon for ${item.name}:`, err);
        }
      }
      setIcons(iconData);
    };

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
