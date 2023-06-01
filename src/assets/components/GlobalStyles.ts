import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: height * 0.02, // 2% top padding
        paddingBottom: height * 0.02, // 2% bottom padding
        // backgroundColor: "black"
    }
})
