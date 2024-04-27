import Share from "react-native-share";
import Toast from "react-native-toast-message";

const showSuccessToast = () => {
  Toast.show({
    type: "success",
    text1: "Sucesso!",
    text2: "A sua nota foi compartilhada com sucesso! 🎉",
  });
};

const showErrorToast = () => {
  Toast.show({
    type: "error",
    text1: "Que pena!",
    text2: "Aconteceu algum problema! 😥",
  });
};

export const shareNote = async (filePath: string) => {
  const shareOptions = {
    title: "Compartilhar arquivo .pdf",
    message: "Confira este arquivo .pdf",
    url: `file://${filePath}`,
    type: "application/pdf",
  };

  await Share.open(shareOptions).then(showSuccessToast).catch(showErrorToast);
};
