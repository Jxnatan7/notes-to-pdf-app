import RNFS from "react-native-fs";

export const getAllNotesDownloaded = async () => {
  const path = `${RNFS.DownloadDirectoryPath}/minhas-notas`;

  try {
    const files = await RNFS.readDir(path);

    const notesName = [];

    for (const file of files) {
      if (file.isFile() && file.name.endsWith(".pdf")) {
        notesName.push({
          fileName: `${file.name}`,
          filePath: `${file.path}`,
        });
      }
    }

    return notesName;
  } catch (error) {
    console.error(error);
  }
};
