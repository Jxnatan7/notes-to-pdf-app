import {SafeAreaView} from "react-native-safe-area-context";
import {Box, Text} from "../../theme";
import {FlatList, TouchableOpacity} from "react-native";
import {useEffect, useState} from "react";
import {getAllNotesDownloaded} from "../../services/getAllNotesDownloaded";
import {BackButton} from "../../components/BackButton";
import {useNavigation} from "@react-navigation/native";
import {NoteName} from "../../components/NoteName";

type NoteProps = {
  fileName: string;
  filePath: string;
};

export default function MyNotes() {
  const navigation = useNavigation();

  const [notes, setNotes] = useState<Array<NoteProps>>();

  useEffect(() => {
    getAllNotesDownloaded().then(notesName => setNotes(notesName));
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Box width="100%" height="100%" backgroundColor="bg_light" pt="l" px="s">
        <BackButton navigation={navigation} />
        <Box width="100%" alignItems="center" mt="l">
          <Text variant="header">Estas são todas as suas notas baixadas</Text>
        </Box>
        <Box
          width="100%"
          height="100%"
          justifyContent="space-around"
          alignItems="center">
          {notes && (
            <FlatList
              style={{width: "100%", marginTop: 50}}
              contentContainerStyle={{height: "auto"}}
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
