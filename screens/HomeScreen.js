import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, View, Text } from 'react-native'

const HomeScreen = () => {
        const navigation = useNavigation()

    return (
        <View>
            <Text>Homescreen goes here</Text>
            <Button title="Chat" onPress={() => navigation.navigate('Chat')} /> 
            <Button title="Login" onPress={() => navigation.navigate('Login')} /> 
        </View>
    )
}

export default HomeScreen
