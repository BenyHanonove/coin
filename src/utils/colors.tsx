import { StyleSheet } from "react-native";

export const AppColors = {
  peach: '#ffd6ad',
  secondary: '#c2f172',
  lightGray: '#c1bfb8',
  background: '#f0eeee',
  text: '#1b2230',
  pink: '#e33e7e',
  black: '#1b2230',
  darkBlue: '#abc4df',
  success: '#d89fac',
  warning: '#FFDC00',
  error: '#FF4136',
};

export const style =StyleSheet.create({
  shadow: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
})