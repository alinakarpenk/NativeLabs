import ContactsScreen from "./screens/ContactsScreen";
import NewsPage from "./screens/NewsPage";
import {StackNavigations} from "./screens/StackNavigations";
import DrawerNavigator from "./screens/DrawerNavigator";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
    return (
      <>
      {/*<StackNavigations/>*/}
          <NavigationContainer>
              <DrawerNavigator/>
          </NavigationContainer>

      </>
    );
}
