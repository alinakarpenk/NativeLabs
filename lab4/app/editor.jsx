import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import * as FileSystem from 'expo-file-system/legacy';
import { Ionicons } from '@expo/vector-icons';

export default function Editor() {
    const { uri, name } = useLocalSearchParams();
    const router = useRouter();
    const [content, setContent] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        loadFile();
    }, []);

    const loadFile = async () => {
        try {
            const fileContent = await FileSystem.readAsStringAsync(uri);
            setContent(fileContent);
        } catch (error) {
            Alert.alert("Помилка", "Не вдалося прочитати файл");
            router.back();
        }
    };

    const handleSave = async () => {
        setIsSaving(true);
        try {
            await FileSystem.writeAsStringAsync(uri, content);
            Alert.alert("Успіх", "Зміни збережено!");
        } catch (error) {
            Alert.alert("Помилка", "Не вдалося зберегти файл");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
        >
            <Stack.Screen
                options={{
                    title: name || 'Редактор',
                    headerRight: () => (
                        <TouchableOpacity onPress={handleSave} disabled={isSaving}>
                            <Ionicons name="save" size={24} color="#3498DB" />
                        </TouchableOpacity>
                    )
                }}
            />

            <TextInput
                style={styles.textInput}
                multiline
                value={content}
                onChangeText={setContent}
                placeholder="Введіть текст..."
                textAlignVertical="top"
            />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    textInput: {
        flex: 1,
        padding: 16,
        fontSize: 16,
        color: '#2C3E50',
        lineHeight: 24,
    }
});