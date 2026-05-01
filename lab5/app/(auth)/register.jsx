import {View, TextInput, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'expo-router';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { register } = useAuth();
    const router = useRouter();

    const handleRegister = () => {
        if (name && email && password) {
            register(email, password, name);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Ім'я" value={name} onChangeText={setName} style={styles.input} />
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
            <TextInput placeholder="Пароль" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
            <Button title="Зареєструватися" onPress={handleRegister} />
            <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
                <Text style={styles.linkText}>Маєте акаунт? Увійти</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5
    },

    linkText: {
        marginTop: 20,
        color: 'blue',
        textAlign: 'center',
        fontSize: 16
    }
});