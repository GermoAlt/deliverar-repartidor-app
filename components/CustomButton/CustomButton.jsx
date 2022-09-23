import React from 'react'
import { Pressable, View, Button, Text } from 'react-native';
import styles from './styles';


const CustomButton = (props) => {
    const { title, onPress, disabled } = props;

    return (
        <>
            <View style={styles.container}>
                <Pressable
                    onPress={() => onPress()}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                            ? 'rgb(208,171,171)'
                            : 'rgb(208, 9, 9)'
                        },
                        styles.button
                    ]}
                    disabled={disabled || false}>
                    {({ pressed }) => (
                        <Text style={styles.text}>
                            {pressed ? "Activando..." : title}
                        </Text>
                    )}
                </Pressable>
            </View>
        </>
    );
}

export default CustomButton;

// <Button {...props} />