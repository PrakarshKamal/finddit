import { Entypo, FontAwesome } from "@expo/vector-icons";
import { Platform } from "react-native";

export default cardOverlayLabels = {
    left: {
        element: <Entypo name="cross" size={160} color="#FF0000" />,
        style: {
            wrapper: {
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                marginTop: 10,
                marginLeft: 80,
            },
        },
    },
    right: {
        element: <Entypo name="check" size={140} color="#00FF00" />,
        style: {
            wrapper: {
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginTop: 60,
                marginLeft: -60,
            },
        },
    },
    top: {
        element: <FontAwesome name="thumbs-o-down" size={100} color="black" />,
        style: {
            wrapper: {
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 40,
            },
        },
    },
};
