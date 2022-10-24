import { React } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './screens/Login';
import { Home } from './screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Login'}>
                <Stack.Screen
                    name="Login"
                    options={{
                        header: () => <View></View>,
                    }}
                    component={Login}
                />
                <Stack.Screen
                    name="Home"
                    options={{
                        header: () => <View></View>,
                    }}
                    component={Home}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
