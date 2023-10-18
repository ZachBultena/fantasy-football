import WeeklyWRScoreScreen from "./WRScoreScreen";
import WideReceiverInfoScreen from "./WideReceiverInfoScreen";
import { Platform, View } from "react-native";
import  Constants  from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from './HomeScreen';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchWideReceivers } from "../features/wideReceivers/wideReceiverSlice";
import { fetchQuarterBacks } from "../features/quarterBacks/quarterBacksSlice";
import { fetchRunningBacks } from "../features/runnningBacks/runningBacksSlice";
import { fetchTightEnds} from "../features/tightEnds/tightEndsSlice";


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

const WideReceiverScoreNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="WideReceiverScore"
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='WideReceiverScore'
                component={WeeklyWRScoreScreen}
                options={{ title: 'Weekly WR Scores'}}
            />
            <Stack.Screen
                name='WideReceiverInfo'
                component={WideReceiverInfoScreen}
                options={({ route }) => ({
                    title: route.params.wideReceiver.player_display_Name
                })}
            />
        </Stack.Navigator>
    )
}

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWideReceivers());
        dispatch(fetchQuarterBacks());
        dispatch(fetchTightEnds());
        dispatch(fetchRunningBacks());
    }, [dispatch])

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
                    name='WideReceiverScore'
                    component={WideReceiverScoreNavigator}
                    options={{ title: 'Wide Receiver Scores' }}
                />
            </Drawer.Navigator>
        </View>
    );
};



export default Main;
