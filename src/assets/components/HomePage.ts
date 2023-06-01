import { StyleSheet } from "react-native";
import { IKeys } from "../../Interfaces";

const HomePageStyle = (theme: IKeys) => StyleSheet.create({
    homeStyle: {
        color: theme.themeColor,
        fontSize: 20
    }
})
export default HomePageStyle;