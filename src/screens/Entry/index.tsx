import {SafeAreaView} from "react-native-safe-area-context";
import {Box, Text} from "../../theme";
import {TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faQrcode} from "@fortawesome/free-solid-svg-icons";
import {Header} from "../../components/Header";
import {MainButton} from "../../components/MainButton";

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
      <Header screenName="Bem-vindo" />
      <Box
        width="100%"
        height="100%"
        backgroundColor="bg_light"
        justifyContent="space-around">
        <Box
          width="100%"
          height="20%"
          justifyContent="space-around"
          alignItems="center">
          <MainButton
            action={handleQrCodeNavigation}
            bg="btn_purple"
            color="text_light"
            text="Ler QRCODE"
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
}
