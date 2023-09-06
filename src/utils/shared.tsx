import styled from "styled-components/native";
import { Dimensions, PixelRatio } from "react-native";
import { AppColors } from "./colors"; // Assuming you have a 'colors.js' file for color definitions.

// Define a styled component called 'Container'
export const Container = styled.View`
    align-items: center;
    flex: 1;
    background-color: ${AppColors.background}; // Use the 'background' color from the 'colors' module.
`;

// Get the width and height of the screen using Dimensions module
const dpWidth = Dimensions.get("screen").width; // Width of the screen in device-independent pixels (DP).
const dpHeight = Dimensions.get("screen").height; // Height of the screen in device-independent pixels (DP).

// Calculate and export the screen width and height rounded to the nearest pixel using PixelRatio.
export const screenWidth = PixelRatio.roundToNearestPixel(dpWidth);
export const screenHeight = PixelRatio.roundToNearestPixel(dpHeight);
