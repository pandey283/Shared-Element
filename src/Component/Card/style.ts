import { StyleSheet } from "react-native";
import { normalize } from "../../Utils/responsiveSize";
import { COLORS } from "../../Utils/Color";

export const styles=StyleSheet.create({
    mainView:{
         flex: 1,
        borderRadius: normalize(20),
        backgroundColor: COLORS.white,
        width: '100%',
    }
})