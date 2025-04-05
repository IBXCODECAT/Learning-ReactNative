// Android-specific implementation of the Title component for React Native.

import { StyleSheet, Text } from "react-native";
import Colors from "../../Constants/Colors";

function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.white,
        textAlign: 'center',
        padding: 12,
        borderWidth: 2,
        borderColor: Colors.white, // Ensure the border is visible on Android
        maxWidth: '80%',
        width: 300,
    }
});