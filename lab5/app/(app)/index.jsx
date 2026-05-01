import {FlatList, View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {Link, useRouter} from 'expo-router';
import { PRODUCTS } from '../../constants/product.js';
import { useAuth } from '../../context/AuthContext';
import {Image} from "expo-image";

export default function Catalog() {
    const { logout } = useAuth();
    const router = useRouter();
    return (
        <View style={styles.container}>

            <View style={styles.header}>

                <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                    <Text style={styles.logoutText}>Вийти</Text>
                </TouchableOpacity>

                <Button
                    title="Тест 404"
                    onPress={() => router.push('/fake-route-that-does-not-exist')}
                />

            </View>

            <FlatList
                data={PRODUCTS}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Link href={`/details/${item.id}`} asChild>
                        <TouchableOpacity style={styles.card}>
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.productPrice}>{item.price} грн</Text>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.image}
                                contentFit="cover"
                            />
                        </TouchableOpacity>
                    </Link>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    header: {
        alignItems: 'flex-end',
        marginBottom: 16,
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
        justifyContent: 'space-between',
        marginTop: 12,
    },
    logoutButton: {
        backgroundColor: '#FF4D4F',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    logoutText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 14,
    },
    card: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 12,

        marginBottom: 12,
        elevation: 3,
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 8,
        backgroundColor: '#EAEAEA',
        position: 'relative',
        left: 180,
        top: -40,
    },
    productName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2C3E50',
        marginBottom: 6,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#27AE60',
    }
});