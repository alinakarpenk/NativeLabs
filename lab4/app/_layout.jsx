import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerTintColor: '#34495E',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="index"
                options={{ title: 'Файловий менеджер' }}
            />

            <Stack.Screen
                name="editor"
                options={{ title: 'Редактор' }}
            />

        </Stack>
    );
}