import { PermissionsAndroid } from "react-native";

async function requestStoragePermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: 'Permissão para acessar armazenamento externo',
                message:
                    'Este aplicativo precisa acessar seu armazenamento externo ' +
                    'para funcionar corretamente.',
                buttonPositive: 'OK',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Permissão concedida');
        } else {
            console.log('Permissão negada');
        }
    } catch (err) {
        console.warn(err);
    }
}

export { requestStoragePermission };