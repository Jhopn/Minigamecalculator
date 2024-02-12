import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../pages/home/index';
import { Rank } from '../pages/rank/rank';
import { FontAwesome6 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
            name='Home'
            component={Home}
            options={{
                headerShown: false,
                tabBarIcon: ({focused, size, color}) =>{
                    if(focused){
                        return <FontAwesome6 name="calculator" size={size} color={color} />
                    }
                    return <FontAwesome6 name="calculator" size={size} color={color} />
                },
            }}
            />

            <Tab.Screen
            name='Rank'
            component={Rank}
            options={{
                headerStyle: {
                    backgroundColor: '#8791FA',
                  },
                headerTitleStyle: {
                    color: 'white', // Define a cor do texto do cabeçalho como branco
                 },
                tabBarIcon: ({focused, size, color}) =>{
                    if(focused){
                        return <FontAwesome6 name="ranking-star" size={size} color={color} />
                    }
                    return <FontAwesome6 name="ranking-star" size={size} color={color} />

                },
            }}
            />
        </Tab.Navigator>
    )
}