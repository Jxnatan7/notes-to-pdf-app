import {RNCamera} from "react-native-camera";
import QRCodeScanner from "react-native-qrcode-scanner";
import {BackButton} from "../../components/BackButton";
import {useNavigation} from "@react-navigation/native";
import {downloadNotePDF} from "../../services/download-note-pdf";

export default function QRCode() {
  const navigation = useNavigation();
  const returnQrCodeResult = async (url: string) => {
    if (!url) return;

    // @ts-ignore
    navigation.navigate("entry", {message: true});

    await downloadNotePDF(url);
  };
  return (
    <QRCodeScanner
      onRead={({data}) => returnQrCodeResult(data)}
      flashMode={RNCamera.Constants.FlashMode.on}
      topContent={<BackButton navigation={navigation} />}
    />
  );
}
