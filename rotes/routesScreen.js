import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  { Login }  from '../pages/login/login';
import  { Registro }  from '../pages/registro/registro';
import { Routes } from './routes';

const Stack = createNativeStackNavigator();

export function RoutesScreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Registro'
                component={Registro}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Inicio'
                component={Routes}
                options={{ headerShown: false }}
                />
        </Stack.Navigator>
    )
}