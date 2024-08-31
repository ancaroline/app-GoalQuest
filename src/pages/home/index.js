import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export function HomeScreen ({ navigation }) {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Vamos criar algo novo juntos.</Text>
          
          <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.buttonText}>Crie uma conta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Entre</Text>
          </TouchableOpacity>
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
        marginBottom: 20,
        color: '#333'
      },
      button: {
        backgroundColor: '#6200EE',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
        width: '80%',
        alignItems: 'center',
      },
      buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
      },
    });