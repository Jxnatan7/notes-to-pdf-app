import {TouchableOpacity} from "react-native";
import {Box, Text} from "../../theme";
import {useNavigation} from "@react-navigation/native";

export const NoteName = ({
  name,
  pdfFilePath,
}: {
  name: string;
  pdfFilePath: string;
}) => {
  const navigation = useNavigation();

  const handlePDFViewNavigation = (pdfFilePath: string) => {
    // @ts-ignore
    navigation.navigate("pdf-view", {pdfFilePath: pdfFilePath});
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => handlePDFViewNavigation(pdfFilePath)}>
      <Box
        mt="m"
        backgroundColor="dark_gray"
        width="100%"
        borderRadius={10}
        p="s">
        <Text variant="button" fontWeight="bold">
          {name}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};
