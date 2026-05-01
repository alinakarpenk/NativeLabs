import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { PRODUCTS } from '../../../constants/product';
import {Image} from "expo-image";
import { Stack } from 'expo-router';
export default function Details() {
    const { id } = useLocalSearchParams();
    const product = PRODUCTS.find(p => p.id === id);

    if (!product) {
        return (
            <View style={styles.centered}>
                <Text style={styles.errorText}>Товар не знайдено</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: product ? product.name : 'Деталі товару',
                    headerTitleAlign: 'center',
                }}

            />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>{product.price} грн</Text>

            <View style={styles.divider} />

            <Text style={styles.descriptionLabel}>Опис:</Text>
            <Text style={styles.description}>{product.desc}</Text>
            <Image
                style={styles.image}
                source={{ uri: product.image }}
                contentFit="cover"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 24,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: '800',
        color: '#2C3E50',
        marginBottom: 8,
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#27AE60',
        marginBottom: 20,
    },
    divider: {
        height: 1,
        backgroundColor: '#EBEBEB',
        marginBottom: 20,
    },
    descriptionLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#7F8C8D',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#34495E',
    },
    errorText: {
        fontSize: 18,
        color: '#E74C3C',
    },
    image: {
        width: '100%',
        height: 250,
        marginTop: 20,
        borderRadius: 12,
        backgroundColor: '#f0f0f0'
    }
});