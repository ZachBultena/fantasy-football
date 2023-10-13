import WeeklyWRScoreScreen from "./WRScoreScreen";
import WideRecieverInfoScreen from "./WideRecieverInfoScreen";
import { Platform, View } from "react-native";
import  Constants  from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";

const WideRecieverScoreNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="WideRecieverScore"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#636363'
                },
                headerTintColor: '#fff'
            }}
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
            <WideRecieverScoreNavigator/>
        </View>
    );
};



export default Main;
