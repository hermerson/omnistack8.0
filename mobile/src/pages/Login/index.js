import React , {useState, useEffect}from 'react';
import { Image } from 'react-native';
import logo from '../../assets/logo.png';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

import { Container, Button, ButtonText, Input } from './styles';

export default function Login({navigation}) {

    const [user, setUser] = useState();

    useEffect(()=>{
        AsyncStorage.getItem('user').then(user=>{
            if(user){
                navigation.navigate('Main', {user});
            }
        })
    },[])

    async function handleLogin(){
        const response = await api.post('/devs', {username:user});

        const {_id} = response.data;

        await AsyncStorage.setItem('user', _id);

        navigation.navigate('Main', {user: _id});
    }

    return (
        <Container>
            <Image source={logo}/>
            <Input autoCapitalize="none" autoCorrect={false} value={user} onChangeText={setUser}/>

            <Button onPress={handleLogin}>
                <ButtonText>Enviar</ButtonText>
            </Button>
        </Container>
    );
}
