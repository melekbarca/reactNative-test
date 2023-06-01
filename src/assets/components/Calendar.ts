import { StyleSheet } from "react-native";
import { IKeys } from "../../Interfaces";

const CalendarStyle = (theme: IKeys) => StyleSheet.create({
    calendarStyle: {
        borderRadius: 10,
    },
    monthItem: {
        borderRadius: 10,
    },
})
export default CalendarStyle;