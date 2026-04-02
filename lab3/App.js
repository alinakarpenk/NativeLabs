import TabNavigated from "./router/TabNavigated";
import {GestureHandlerRootView} from "react-native-gesture-handler";
export default function App() {
  return (
      <GestureHandlerRootView style={{flex: 1}}>
          <TabNavigated/>
      </GestureHandlerRootView>

  )
}
