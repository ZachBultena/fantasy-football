import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
//import { WEEK1WR } from '../shared/week1wrs';
import { useSelector} from 'react-redux'
import { comparePoints } from '../shared/comparePoints';
import { currentWeek } from '../shared/currentWeek';

const WeeklyWRScoreScreen = ({ navigation }) => {
    const wideReceivers = useSelector((state) => state.wideReceivers);
    let filteredWideReceivers = wideReceivers.wideReceiversArray.filter(function (item) {
        return item.week === currentWeek;
    });

    let newWideReceivers = filteredWideReceivers.sort(comparePoints);

    const renderWRScoreItem = ({ item: wideReceiver}) => {
        return (
            <ListItem 
                onPress={() => 
                    navigation.navigate('WideReceiverInfo', { wideReceiver })
                }
            >
                <Avatar source={{
                    uri: wideReceiver.headshot_url
                    }} rounded />
                <ListItem.Content>
                    <ListItem.Title>{wideReceiver.player_name}</ListItem.Title>
                        <ListItem.Subtitle>
                            Fantasy Pts: {wideReceiver.fantasy_points_ppr}
                        </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem> 
            
        );
    };
    return (
        <FlatList
            data = {newWideReceivers}
            renderItem={renderWRScoreItem}
            keyExtractor={(item) => item.player_id.toString()}
            initialNumToRender={50}
            nestedScrollEnabled
            />
    );
};



export default WeeklyWRScoreScreen;