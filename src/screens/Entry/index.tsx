import {SafeAreaView} from "react-native-safe-area-context";
import {Box, Text} from "../../theme";
import {TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faQrcode} from "@fortawesome/free-solid-svg-icons";

export default function Entry() {
  const navigation = useNavigation();

  const handleQrCodeNavigation = () => {
    //@ts-ignore
    navigation.navigate("qr-code");
  };

  const handleNotesNavigation = () => {
    //@ts-ignore
    navigation.navigate("my-notes");
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Box
        width="100%"
        height="100%"
        backgroundColor="bg_light"
        justifyContent="space-around">
        <Box width="100%" alignItems="center">
          <Text variant="header">
            Seja bem-vindo <Text fontWeight="bold">Jonas!</Text>
          </Text>
        </Box>
        <Box
          width="100%"
          height="20%"
          justifyContent="space-around"
          alignItems="center">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleQrCodeNavigation}>
            <Box
              backgroundColor="btn_purple"
              width={300}
              height={40}
              borderRadius={10}
              justifyContent="center"
              alignItems="center">
              <Text color="text_light" variant="button">
                Clique aqui para ler o seu QRCODE!
              </Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={handleNotesNavigation}>
            <Box
              backgroundColor="btn_orange"
              width={300}
              height={40}
              borderRadius={10}
              justifyContent="center"
              alignItems="center">
              <Text color="text_light" variant="button" textAlign="center">
                Ver as suas notas baixadas.
              </Text>
            </Box>
          </TouchableOpacity>
        </Box>
      </Box>
    </SafeAreaView>
  );
}
