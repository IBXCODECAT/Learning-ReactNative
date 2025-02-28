import { StyleSheet, Text } from "react-native";
import Colors from "../../Constants/Colors";

function Heading({children}) {
    return (
        <Text style={styles.heading}>{children}</Text>
    )
}

export default Heading;

const styles = StyleSheet.create({
    heading: {
        color: Colors.accent500,
        fontSize: 24,
    }
});