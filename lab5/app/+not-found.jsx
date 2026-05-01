import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function NotFound() {
    return (
        <View style={styles.container}>
            <Text style={styles.errorCode}>404</Text>
            <Text style={styles.title}>Екран не знайдено</Text>

            <Link href="/" asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>На головну</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    errorCode: {
        fontSize: 80,
        fontWeight: '900',
        color: '#2C3E50',
        marginBottom: 8,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#34495E',
        marginBottom: 12,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 12,
        shadowColor: '#3498db',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 4,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    }
});