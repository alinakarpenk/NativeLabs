import {Button, Alert} from "react-native";
import Layout from "../layout/Layout";
import {useState} from "react";
import styled from "styled-components/native";

const Input = styled.TextInput`
    height: 45px;
    margin-bottom: 15px;
    border-width: 1px;
    border-color: #ccc;
    border-radius: 8px;
    padding: 10px;
    background-color: white;
    width: 300px;
`

const Container = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

`

const TextTitle = styled.Text`
    font-weight: bold;
    font-size: 28px;
    margin-bottom: 50px;

`

export default function FormScreen() {

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        Alert.alert('Форма заповнена!')
    }

    return (
        <Layout>
        <Container>
            <TextTitle>Форма</TextTitle>
            <Input
                placeholder="Ім'я"
                onChangeText={setFirst}
                value={first}
            />
            <Input
                placeholder="Прізвище"
                onChangeText={setLast}
                value={last}
            />
            <Input
                placeholder="Електронна адреса"
                onChangeText={setEmail}
                value={email}
            />
            <Input
                placeholder="Пароль"
                secureTextEntry={true}
                onChangeText={setPassword}
                value={password}
            />

            <Button
                onPress={handleSubmit}
                title="Зареєструватися"
                color="#4169E1"
                accessibilityLabel="Learn more about this purple button"
            />
        </Container>
        </Layout>
    )
}