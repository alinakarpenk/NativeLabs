import {Text, View} from "react-native";
import {Gesture, GestureDetector} from "react-native-gesture-handler";

export default function ClickerScreen() {

    const longPress = Gesture.LongPress().onEnd(() => {
        console.log('Довге натискання спрацювало!');
    });

    return (
        <GestureDetector gesture={longPress}>
            <View style={{ padding: 20, backgroundColor: 'tomato' }}>
                <Text>Затисни мене</Text>
            </View>
        </GestureDetector>
    );
}