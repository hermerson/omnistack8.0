import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
})`
    flex:1;
    background:#f5f5f5;
    justify-content:center;
    align-items:center;
    padding:30px;
`;

export const Input = styled.TextInput.attrs({
    placeholder:"Digite seu usuário do Github",
    placeholderTextColor:'#999', 
})`
    height:46px;
    align-self: stretch;
    background:#fff;
    border-width:1px;
    border-color:#ddd;
    border-radius:4px;
    margin-top:20px;
    padding: 0 15px;
`;

export const Button = styled.TouchableOpacity`
    height:46;
    align-self: stretch;
    background:#df4732;
    border-radius:4px;
    margin-top:10px;
    justify-content:center;
    align-items:center;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size:16px;
    font-weight:bold;
`;
