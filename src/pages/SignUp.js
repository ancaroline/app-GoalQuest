import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SignUpScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Crie a sua conta.</Text>
            <Text style={styles.text}>Comece a criar a sua nova realidade.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
      },
      text: {
        fontSize: 18,
        color: '#333'
      },
})