import { Pressable, StyleSheet, Text, View } from "react-native";

import Colors from "../Constants/Colors";

function PrimaryButton({children, onPress}) {
    
    return (
        <View style={styles.btnOuterContainer}>
            <Pressable 
                style={({pressed}) => 
                    pressed 
                        ? [styles.btnInnerContainer, styles.pressed] 
                        : styles.btnInnerContainer
                }
                onPress={onPress} // Forwards the onPress prop to the Pressable component
                android_ripple={{color: Colors.primary600}}>
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
        backgroundColor: Colors.primary500,
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