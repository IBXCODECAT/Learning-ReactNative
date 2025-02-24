import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButton({children}) {
    return (
        <View style={styles.btnOuterContainer}>
            <Pressable 
                style={({pressed}) => 
                    pressed 
                        ? [styles.btnInnerContainer, styles.pressed] 
                        : styles.btnInnerContainer
                }
                onPress={() => console.log("Button Pressed")}
                android_ripple={{color: '#640233'}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable> 
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    
    btnOuterContainer: {
        borderRadius: 28,
        margin: 4,
        
        // Clip styling if it leaves this container
        overflow: 'hidden',
    },
    
    btnInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,

        // Android Shadow
        elevation: 2,

        // No shadow for IOS because it looks absolutely terrible
        // shadowColor: 'black',
        // shadowOffset: {width: 0, height: 2},
        // shadowRadius: 6,
        // shadowOpacity: 0.25,
    },

    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
        //fontSize: 18,
    },

    pressed: {
        opacity: 0.75,
    }
});