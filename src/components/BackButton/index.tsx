import {TouchableOpacity} from "react-native";
import {Box, Text} from "../../theme";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useNavigation} from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();

  return (
    //@ts-ignore
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("entry")}>
      <Box
        width={100}
        height={40}
        gap="s"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        borderRadius={10}
        backgroundColor="bg_orange"
        p="s">
        <FontAwesomeIcon icon={faArrowLeft} color="#FFF" size={20} />
        <Text variant="button" color="text_light">
          Voltar
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export {BackButton};
