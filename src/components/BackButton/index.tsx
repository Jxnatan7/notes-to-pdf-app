import React from "react";
import {TouchableOpacity} from "react-native";
import {Box, Text} from "../../theme";
import {useNavigation} from "@react-navigation/native";

export const BackButton = () => {
  const navigation = useNavigation();

  return (
    <Box width={50}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <Text variant="button" color="text_orange">
          Voltar
        </Text>
      </TouchableOpacity>
    </Box>
  );
};
