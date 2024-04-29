import {HttpStatusCode} from "axios";
import api from "../config/axiosConfig";
import RNFS from "react-native-fs";
import {getNoteName} from "./getNoteName";
import Toast from "react-native-toast-message";
import {Alert} from "react-native";

const showSuccessToast = () => {
  Toast.show({
    type: "success",
    text1: "Sucesso!",
    text2: "O seu download foi concluído! 🎉",
    onPress() {
      Alert.alert("Acesse MINHAS NOTAS para ver as suas notas baixadas");
    },
  });
};

const showErrorToast = () => {
  Toast.show({
    type: "error",
    text1: "Que pena!",
    text2: "Aconteceu algum problema! 😥",
  });
};

export const downloadNotePDF = async (url: string) => {
  try {
    const response = await api.get(`/note-to-pdf?url=${url}`);
    const fileName = getNoteName();

    const path = `${RNFS.DownloadDirectoryPath}/minhas-notas/${fileName}.pdf`;

    if (response.status === HttpStatusCode.Ok) {
      const pdfBase64 = response.data.pdfBase64;

      await RNFS.writeFile(path, pdfBase64, "base64")
        .then(success => {
          showSuccessToast();
        })
        .catch(err => {
          showErrorToast();
          console.log(err.message);
        });
    }
  } catch (error) {
    console.log("An error occurred while downloading the file: ", error);
  }
};
