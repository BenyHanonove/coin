declare module 'react-native-vector-icons/Ionicons' {
    import { ComponentClass } from 'react';
    import { TextStyle, ViewStyle } from 'react-native';
  
    export interface IconProps {
      name: string;
      size: number;
      color?: string;
      style?: TextStyle | ViewStyle;
    }
  
    const Ionicons: ComponentClass<IconProps>;
    export default Ionicons;
  }
  