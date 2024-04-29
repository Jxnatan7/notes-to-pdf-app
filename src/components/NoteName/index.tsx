import { TouchableOpacity } from "react-native";
import { Box, Text } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { shareNote } from "../../services/shareNote";
import Ionicons from "react-native-vector-icons/Ionicons";

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
    navigation.navigate("pdf-view", { pdfFilePath: pdfFilePath });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => handlePDFViewNavigation(pdfFilePath)}
      onLongPress={() => shareNote(pdfFilePath)}>
      <Box
        mt="m"
        width="100%"
        borderRadius={10}
        borderBottomColor="btn_dark"
        borderBottomWidth={1}
        flexDirection="row"
        gap="m"
        p="s">
        <Text variant="button" fontWeight="bold" color="text_orange">
          {name}
        </Text>
        <Ionicons name="add-circle" size={20} color="#000" />
      </Box>
    </TouchableOpacity>
  );
};
