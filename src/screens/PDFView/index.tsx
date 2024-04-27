import RNFS from "react-native-fs";
import {SafeAreaView} from "react-native";
import {Box, Text} from "../../theme";
import Pdf from "react-native-pdf";
import {useEffect, useState} from "react";

const getPdfContent = async (filePath: string) => {
  const pdfContent = await RNFS.readFile(filePath, "base64");
  return pdfContent;
};

export default function PDFView(props: any) {
  const [pdfSource, setPdfSource] = useState<string | null>(null);

  const filePath = props?.route?.params?.pdfFilePath;

  useEffect(() => {
    getPdfContent(filePath).then(pdfContent => setPdfSource(pdfContent));
  }, [filePath]);

  if (!pdfSource) {
    return <Text variant="info">Carregando o seu PDF...</Text>;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Box flex={1}>
        <Pdf
          style={{flex: 1}}
          source={{
            uri: `data:application/pdf;base64,${pdfSource}`,
            cache: true,
          }}
          onLoadProgress={() => console.log("Loading PDF.")}
          onLoadComplete={() => console.log("Loading PDF Complete.")}
        />
      </Box>
    </SafeAreaView>
  );
}
