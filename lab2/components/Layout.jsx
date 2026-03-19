import { View} from "react-native";
import Header from "./Header";
import {SafeAreaView} from "react-native-safe-area-context";

export default function Layout({children, show, title}) {
    return (
        <SafeAreaView style={{flex: 1}} edges={['top']}>
            <View>
                <Header show={show} title={title}/>
                <View>
                    {children}
                </View>
            </View>
        </SafeAreaView>
    )
}