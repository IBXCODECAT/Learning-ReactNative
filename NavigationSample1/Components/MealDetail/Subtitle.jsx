import { Text, StyleSheet, View } from "react-native";

function Subtitle({children}) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold', // Make the subtitle bold,
        textAlign: 'center', // Center align the subtitle
    },
    subtitleContainer: {
        padding: 6,
        borderBottomColor: '#e2b497', // Add a bottom border to the subtitle for better visibility
        borderBottomWidth: 2, // Thickness of the bottom border
        marginVertical: 4, // Use vertical to allow horizontal line to go across entire screen
        marginHorizontal: 12, // Add some horizontal margin to align past the width the edges of the screen
    }
});