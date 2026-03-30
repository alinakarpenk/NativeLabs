import TabNavigated from "./router/TabNavigated";
import {Gesture, GestureHandlerRootView} from "react-native-gesture-handler";
import GestureHandler from "react-native-gesture-handler/src/web_hammer/GestureHandler";
export default function App() {
  return (
      <GestureHandlerRootView style={{flex: 1}}>
          <TabNavigated/>
      </GestureHandlerRootView>

  )
}
