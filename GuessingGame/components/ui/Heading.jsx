import { StyleSheet, Text } from "react-native";
import Colors from "../../Constants/Colors";

function Heading({children, style}) {
    return <Text style={[styles.heading, style]}>{children}</Text>;
}

export default Heading;

const styles = StyleSheet.create({
    heading: {
        color: Colors.accent500,
        fontSize: 24,
    }
});