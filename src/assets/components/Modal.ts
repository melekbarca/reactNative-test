import { StyleSheet } from "react-native";
import { commonColor } from "../abstracts/colors";

export default StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: commonColor.modalGray,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        width: '80%',
        height: '50%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
    }
})
