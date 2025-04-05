import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridTile({title, color}) {

    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{color: "#ccc" }}
                style={({pressed}) => [
                    styles.btn,
                    pressed ? styles.btnPressed : null
                ] /* For iOS feedback */}>
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>    
                </View>  
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,

        // for Android shadow (to clip the shadow) - on iOS this removes the shadow
        overflow: Platform.OS === "android" ? 'hidden' : "visible", 

        elevation: 4, // for Android shadow
        shadowColor: 'black', // for iOS shadow
        shadowOffset: { width: 0, height: 2 }, // for iOS shadow
        shadowOpacity: 0.25, // for iOS shadow
        shadowRadius: 8, // for iOS shadow
        backgroundColor: 'white', // Required for iOS shadow to work properly, otherwise it will be transparent
    },

    btn: {
        flex: 1,
    },

    btnPressed: {
        opacity: 0.5, // This is used to show feedback when the button is pressed
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8, // to match the gridItem borderRadius
        justifyContent: 'center',
        alignItems: 'center',
    }
});