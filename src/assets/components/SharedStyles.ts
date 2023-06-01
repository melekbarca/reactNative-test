import { FlexAlignType, StyleSheet } from "react-native";
import { commonColor } from "../abstracts/colors";
import { IFlex, IMargin, IPadding, ISize } from "../../Interfaces";

const SharedStyles = StyleSheet.create({
    flex: {
        display: "flex"
    },
    flexRow: {
        flexDirection: "row"
    },
    flexCol: {
        flexDirection: "column"
    },
    flexCenter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    flexCenterCol: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    flexSpaceBetween: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    flexEnd: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    flexEndCol: {
        flexDirection: "column",
        justifyContent: "flex-end",
    },
    flexGrow: {
        flexGrow: 1
    },
    positionRealative: {
        position: "relative"
    }
})

const setWidthHeight = ({ width, height }: ISize) => StyleSheet.create({
    width: {
        width: width,
    },
    height: {
        height: height
    }
})

const setFlex = ({ flex, flexDirection, justifyContent, alignItems, textAlign }: IFlex) => StyleSheet.create({
    setFlex: {
        flex: flex,
        flexDirection: flexDirection,
        justifyContent: justifyContent,
        alignItems: alignItems
    },
    flexDirection: {
        flexDirection: flexDirection,
    },
    justifyContent: {
        justifyContent: justifyContent,
    },
    alignItems: {
        alignItems: alignItems
    },
    textAlign: {
        textAlign: textAlign
    }
})

const setPadding = ({paddingHorizontal, paddingVertical}: IPadding) => StyleSheet.create({
    setPaddingHorizontal: {
        paddingHorizontal: paddingHorizontal
    },
    setPaddingVertical: {
        paddingVertical: paddingVertical
    },
    setPadding: {
        paddingHorizontal: paddingHorizontal,
        paddingVertical: paddingVertical
    }
})

const setMargin = ({marginHorizontal, marginVertical}: IMargin) => StyleSheet.create({
    setMarginHorizontal: {
        marginHorizontal: marginHorizontal
    },
    setPaddingVertical: {
        marginVertical: marginVertical
    },
    setMargin: {
        marginHorizontal: marginHorizontal,
        marginVertical: marginVertical
    }
})

export { setWidthHeight, SharedStyles, setFlex, setPadding, setMargin }
