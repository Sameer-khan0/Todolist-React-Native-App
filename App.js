import React from "react";
import Home from './component/Home';
import { SafeAreaView, StyleSheet,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "./component/MainPage";
import { Provider } from 'react-redux'
import store from "./Redux/store";
import DevPage from "./component/DevPage";
import TodosPage from "./component/TodosPage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <SafeAreaView style={{ flex: 1 }} >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: styles.header,
            headerTintColor: '#fff',
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              headerTitle: 'Home'
            }}
          />
          <Stack.Screen
            name="mainpage"
            component={ MainPage}
            options={{
              headerShown: false,
              headerTitle: 'mainpage',
            }}
          />
          <Stack.Screen
            name="devpage"
            component={ DevPage}
            options={{
              headerShown: false,
              headerTitle: 'devpage',
            }}
          />
          <Stack.Screen
            name="todolist"
            component={ TodosPage}
            options={{
              headerShown: false,
              headerTitle: 'todolist',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
</Provider>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'gray',
  },
});

export default App;
