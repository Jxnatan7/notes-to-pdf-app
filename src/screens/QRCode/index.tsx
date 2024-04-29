import {RNCamera} from "react-native-camera";
import QRCodeScanner from "react-native-qrcode-scanner";
import {useNavigation} from "@react-navigation/native";
import {downloadNotePDF} from "../../services/downloadNotePDF";
import {Header} from "../../components/Header";

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
      cameraStyle={{flex: 1, height: "80%"}}
      cameraContainerStyle={{backgroundColor: "#FFF"}}
      bottomViewStyle={{display: "none"}}
      topContent={<Header screenName="QRCODE" backButton />}
      topViewStyle={{backgroundColor: "#FFF"}}
    />
  );
}
