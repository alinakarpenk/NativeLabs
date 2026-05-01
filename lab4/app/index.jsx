import React, { useState, useEffect } from 'react';
import { Text, FlatList, Modal, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system/legacy';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { formatBytes } from '../utils/formatters';
import { Button } from 'react-native';
import {
    ActionButtons,
    BreadcrumbContainer,
    BreadcrumbText,
    Container,
    DeleteBtn,
    Fab,
    FabText,
    FileInfo,
    FileItem,
    FileName,
    FileSize,
    Input,
    ModalBg, ModalButtons,
    ModalContent,
    ModalTitle,
    StatsCard,
    StatsTitle,
    UpButton
} from "../styled/IndexStyleComponents";

const ROOT_DIR = FileSystem.documentDirectory || "file:///data/user/0/host.exp.exponent/files/";

export default function FileManager() {

    const router = useRouter();
    const [currentPath, setCurrentPath] = useState(ROOT_DIR);
    const [files, setFiles] = useState([]);
    const [storageStats, setStorageStats] = useState({ total: 0, free: 0 });

    const [modalVisible, setModalVisible] = useState(false);
    const [isCreatingFolder, setIsCreatingFolder] = useState(false);
    const [newItemName, setNewItemName] = useState('');
    const [newItemContent, setNewItemContent] = useState('');


    useEffect(() => {
        loadDirectory(currentPath);
        loadStorageStats();
    }, [currentPath]);

    const loadStorageStats = async () => {
        try {
            const free = await FileSystem.getFreeDiskStorageAsync();
            const total = await FileSystem.getTotalDiskCapacityAsync();
            setStorageStats({ free, total });
        } catch (error) { console.error(error); }
    };

    const loadDirectory = async (uri) => {
        try {
            const dirContent = await FileSystem.readDirectoryAsync(uri);
            const fileDetails = await Promise.all(dirContent.map(async (name) => {
                const fileUri = `${uri}${name}`;
                const info = await FileSystem.getInfoAsync(fileUri);
                return { name, uri: fileUri, ...info };
            }));
            fileDetails.sort((a, b) => a.isDirectory === b.isDirectory ? a.name.localeCompare(b.name) : (a.isDirectory ? -1 : 1));
            setFiles(fileDetails);
        } catch (error) { Alert.alert("Помилка", "Не вдалося завантажити папку"); }
    };

    const goUp = () => {
        if (!currentPath || currentPath === ROOT_DIR) return;
        const parts = currentPath.split('/');
        parts.pop(); parts.pop();
        setCurrentPath(parts.join('/') + '/');
    };

    const handleCreate = async () => {
        if (!newItemName) return Alert.alert("Помилка", "Введіть назву");
        const newUri = `${currentPath}${newItemName}${!isCreatingFolder && !newItemName.endsWith('.txt') ? '.txt' : ''}`;
        try {
            isCreatingFolder ? await FileSystem.makeDirectoryAsync(newUri) : await FileSystem.writeAsStringAsync(newUri, newItemContent);
            setModalVisible(false); setNewItemName(''); setNewItemContent('');
            loadDirectory(currentPath);
        } catch (error) { Alert.alert("Помилка", error.message); }
    }



    const handleDelete = (item) => {
        Alert.alert(
            "Видалення",
            `Видалити ${item.name}?`,
            [
                { text: "Скасувати", style: "cancel" },
                {
                    text: "Видалити",
                    style: "destructive",
                    onPress: async () => {
                        await FileSystem.deleteAsync(item.uri);
                        loadDirectory(currentPath);
                    }
                }
            ]
        );
    };


    return (
        <Container>
            <StatsCard>
                <StatsTitle>Пам'ять пристрою</StatsTitle>
                <Text>Вільно: {formatBytes(storageStats.free)} / {formatBytes(storageStats.total)}</Text>
            </StatsCard>

            <BreadcrumbContainer>
                {currentPath !== ROOT_DIR && (
                    <UpButton onPress={goUp}><Ionicons name="arrow-up" size={20} color="#fff" /></UpButton>
                )}
                <BreadcrumbText numberOfLines={1}>{currentPath.replace(ROOT_DIR, 'Головна/')}</BreadcrumbText>
            </BreadcrumbContainer>

            <FlatList
                data={files}
                keyExtractor={(item) => item.uri}
                renderItem={({ item }) => (
                    <FileItem
                        onPress={() => item.isDirectory ? setCurrentPath(`${item.uri}/`) : router.push({ pathname: '/editor', params: { uri: item.uri, name: item.name } })}
                    >
                        <Ionicons name={item.isDirectory ? "folder" : "document-text"} size={28} color={item.isDirectory ? "#FFD700" : "#4A90E2"} />
                        <FileInfo>
                            <FileName>{item.name}</FileName>
                            {!item.isDirectory && <FileSize>{formatBytes(item.size)}</FileSize>}
                        </FileInfo>

                        <DeleteBtn onPress={() => handleDelete(item)}>
                            <Ionicons name="trash-outline" size={20} color="#E74C3C" />
                        </DeleteBtn>
                    </FileItem>
                )}
            />

            <ActionButtons>
                <Fab onPress={() => { setIsCreatingFolder(true); setModalVisible(true); }}><Ionicons name="folder-open" size={20} color="#FFF" /><FabText>+ Папка</FabText></Fab>
                <Fab color="#27AE60" onPress={() => { setIsCreatingFolder(false); setModalVisible(true); }}><Ionicons name="document" size={20} color="#FFF" /><FabText>+ Файл</FabText></Fab>
            </ActionButtons>

            <Modal visible={modalVisible} transparent animationType="slide">
                <ModalBg>
                    <ModalContent>
                        <ModalTitle>{isCreatingFolder ? 'Нова папка' : 'Новий файл'}</ModalTitle>
                        <Input placeholder="Назва" value={newItemName} onChangeText={setNewItemName} />
                        {!isCreatingFolder && <Input placeholder="Текст..." multiline value={newItemContent} onChangeText={setNewItemContent} />}
                        <ModalButtons>
                            <Button title="Скасувати" onPress={() => setModalVisible(false)} color="#E74C3C" />
                            <Button title="Створити" onPress={handleCreate} />
                        </ModalButtons>
                    </ModalContent>
                </ModalBg>
            </Modal>
        </Container>
    )
}



