import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Text } from "../../theme";
import { FlatList, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { getAllNotesDownloaded } from "../../services/getAllNotesDownloaded";
import { NoteName } from "../../components/NoteName";
import { Header } from "../../components/Header";

type NoteProps = {
  fileName: string;
  filePath: string;
};

export default function MyNotes() {
  const [notes, setNotes] = useState<Array<NoteProps>>();

  useEffect(() => {
    getAllNotesDownloaded().then(notesName => setNotes(notesName));
  }, [notes]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header screenName="Minhas Notas" backButton />
      <Box width="100%" height="100%" backgroundColor="bg_light" pt="l" px="s">
        <Text variant="info">
          Clique em uma de suas notas para visualizar o PDF, segure para
          compartilhar.
        </Text>
        <Box
          width="100%"
          height="100%"
          justifyContent="space-around"
          alignItems="center">
          {notes && (
            <FlatList
              style={{ width: "100%", marginTop: 50 }}
              contentContainerStyle={{ height: "auto", paddingVertical: 40 }}
              data={notes}
              renderItem={data => (
                <NoteName
                  name={data.item.fileName}
                  pdfFilePath={data.item.filePath}
                />
              )}
            />
          )}
        </Box>
      </Box>
    </SafeAreaView>
  );
}
