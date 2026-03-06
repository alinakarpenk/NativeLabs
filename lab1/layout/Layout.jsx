import { View} from "react-native";
import Header from "./Header";
import {SafeAreaView} from "react-native-safe-area-context";

export default function Layout({children}) {
    return (
        <SafeAreaView style={{flex: 1}} edges={['top']}>
        <View>
            <Header />
            <View>
                {children}
            </View>
        </View>
        </SafeAreaView>
    )
}