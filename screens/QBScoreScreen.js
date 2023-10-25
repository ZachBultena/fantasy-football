import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { useSelector} from 'react-redux'
import { comparePoints } from '../shared/comparePoints';
import { currentWeek } from '../shared/currentWeek';

const WeeklyQBScoreScreen = ({ navigation }) => {
    const quarterBacks = useSelector((state) => state.quarterBacks);
    let filteredQuarterBacks = quarterBacks.quarterBacksArray.filter(function (item) {
        return item.week === currentWeek;
    });

    let newQuarterBacks = filteredQuarterBacks.sort(comparePoints);

    const renderQBScoreItem = ({ item: quarterBack}) => {
        return (
            <ListItem 
                onPress={() => 
                    navigation.navigate('QuarterBackInfo', { quarterBack })
                }
            >
                <Avatar source={{
                    uri: quarterBack.headshot_url
                    }} rounded />
                <ListItem.Content>
                    <ListItem.Title>{quarterBack.player_name}</ListItem.Title>
                        <ListItem.Subtitle>
                            Fantasy Pts: {quarterBack.fantasy_points_ppr}
                        </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem> 
            
        );
    };
    return (
        <FlatList
            data = {newQuarterBacks}
            renderItem={renderQBScoreItem}
            keyExtractor={(item) => item.player_id.toString()}
            initialNumToRender={50}
            nestedScrollEnabled
            />
    );
};



export default WeeklyQBScoreScreen;