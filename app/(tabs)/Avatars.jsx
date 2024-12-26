import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Avatars = () => {
    const navigation = useNavigation();
    const createAvatar = () => {
        navigation.navigate('CreateAvatar');
    }
    return (
        <View>    
            <TouchableOpacity style = {styles.button}>
                <Image
                    source={{
                    uri: 'https://static8.depositphotos.com/1003938/1047/v/950/depositphotos_10479108-stock-illustration-funny-cartoon-casual-man.jpg',
                    }}
                    style={{width: 100, height: 100}}
                />
                <Text style = {{padding:25}}>Fun Avatar</Text>   
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button}>
                <Image
                    source={{
                    uri: 'https://static8.depositphotos.com/1003938/1047/v/950/depositphotos_10479108-stock-illustration-funny-cartoon-casual-man.jpg',
                    }}
                    style={{width: 100, height: 100}}
                />
                <Text style = {{padding:25}}>Responsible Avatar</Text>   
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button}>
                <Image
                    source={{
                    uri: 'https://static8.depositphotos.com/1003938/1047/v/950/depositphotos_10479108-stock-illustration-funny-cartoon-casual-man.jpg',
                    }}
                    style={{width: 100, height: 100}}
                />
                <Text style = {{padding:25}}>Listening Avatar</Text>   
            </TouchableOpacity>

            <TouchableOpacity style = {styles.button} onpress = {createAvatar}>
                <Text>Create Avatar</Text>
            </TouchableOpacity>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f9f9f9',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    greeting: {
      fontSize: 18,
      marginBottom: 30,
    },
    createButton: {
      backgroundColor: '#4CAF50',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 25,
      alignItems: 'center',
      marginBottom: 15,
    },
    button: {
      backgroundColor: '#007BFF',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 50,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default Avatars;