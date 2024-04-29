import React from "react";
import {Box, Text, ThemeProps} from "../../theme";
import {TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

type ThemeColor = keyof ThemeProps["colors"];

export type MainButtonProps = {
  text: string;
  color: ThemeColor;
  bg: ThemeColor;
  action: () => void;
  icon?: string;
};

export function MainButton({text, color, bg, action, icon}: MainButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={action}>
      <Box
        bg={bg}
        width={340}
        height={50}
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
        alignSelf="center"
        borderRadius={100}>
        <Box>
          <Text variant="button" color={color}>
            {text}
          </Text>
        </Box>
        <AntDesign name="qrcode" size={25} color="#FFF" />
      </Box>
    </TouchableOpacity>
  );
}
