import styled from "styled-components/native";
import {Dimensions, PixelRatio} from "react-native";
import {AppColors} from "./colors";


export const Container = styled.View`
    align-items: center;
    flex: 1;
    background-color: ${AppColors.background};
`;

const dpWidth = Dimensions.get("screen").width;
const dpHeight = Dimensions.get("screen").height;

export const screenWidth = PixelRatio.roundToNearestPixel(dpWidth);
export const screenHeight = PixelRatio.roundToNearestPixel(dpHeight);