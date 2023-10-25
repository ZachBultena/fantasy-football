import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { useSelector} from 'react-redux'
import { comparePoints } from '../shared/comparePoints';
import { currentWeek } from '../shared/currentWeek';

const WeeklyRBScoreScreen = ({ navigation }) => {
    const runningBacks = useSelector((state) => state.runningBacks);
    let filteredRunningBacks = runningBacks.runningBacksArray.filter(function (item) {
        return item.week === currentWeek;
    });

    let newRunningBacks = filteredRunningBacks.sort(comparePoints);

    const renderRBScoreItem = ({ item: runningBack}) => {
        return (
            <ListItem 
                onPress={() => 
                    navigation.navigate('RunningBackInfo', { runningBack })
                }
            >
                <Avatar source={{
                    uri: runningBack.headshot_url
                    }} rounded />
                <ListItem.Content>
                    <ListItem.Title>{runningBack.player_name}</ListItem.Title>
                        <ListItem.Subtitle>
                            Fantasy Pts: {runningBack.fantasy_points_ppr}
                        </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem> 
            
        );
    };
    return (
        <FlatList
            data = {newRunningBacks}
            renderItem={renderRBScoreItem}
            keyExtractor={(item) => item.player_id.toString()}
            initialNumToRender={50}
            nestedScrollEnabled
            />
    );
};



export default WeeklyRBScoreScreen;