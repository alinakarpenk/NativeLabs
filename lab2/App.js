import DrawerNavigator from "./router/DrawerNavigator";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
    return (
      <>
          <NavigationContainer>
              <DrawerNavigator/>
          </NavigationContainer>

      </>
    );
}
