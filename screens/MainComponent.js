import WeeklyWRScoreScreen from "./WRScoreScreen";
import WideRecieverInfoScreen from "./WideRecieverInfoScreen";
import { Platform, View } from "react-native";
import  Constants  from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from './HomeScreen';


const Drawer = createDrawerNavigator();
const screenOptions = {
    headerStyle: {
        backgroundColor: '#636363'
    },
    headerTintColor: '#fff'
}
const HomeNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{ title: 'Home' }}
            />
        </Stack.Navigator>
    )
}

const WideRecieverScoreNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="WideRecieverScore"
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='WideRecieverScore'
                component={WeeklyWRScoreScreen}
                options={{ title: 'Weekly WR Scores'}}
            />
            <Stack.Screen
                name='WideRecieverInfo'
                component={WideRecieverInfoScreen}
                options={({ route }) => ({
                    title: route.params.wideReciever.player_display_Name
                })}
            />
        </Stack.Navigator>
    )
}

const Main = () => {
    return (
        <View style={{ 
            flex: 1,
            paddingTop:
                Platform.OS === 'ios' ? 0 : Constants.statusBarHeight 
            }}
        >
            <Drawer.Navigator
            initialRouteName='Home'
            drawerStyle={{ backgroundColor: '#636363' }}
            >
                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{ title: 'Home' }}
                />
                <Drawer.Screen
                    name='WideRecieverScore'
                    component={WideRecieverScoreNavigator}
                    options={{ title: 'Wide Reciever Scores' }}
                />
            </Drawer.Navigator>
        </View>
    );
};



export default Main;
