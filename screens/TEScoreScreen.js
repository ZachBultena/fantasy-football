import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { useSelector} from 'react-redux'
import { comparePoints } from '../shared/comparePoints';
import { currentWeek } from '../shared/currentWeek';

const WeeklyTEScoreScreen = ({ navigation }) => {
    const tightEnds = useSelector((state) => state.tightEnds);
    let filteredTightEnds = tightEnds.tightEndsArray.filter(function (item) {
        return item.week === currentWeek;
    });

    let newTightEnds = filteredTightEnds.sort(comparePoints);

    const renderTEScoreItem = ({ item: tightEnd}) => {
        return (
            <ListItem 
                onPress={() => 
                    navigation.navigate('TightEndInfo', { tightEnd })
                }
            >
                <Avatar source={{
                    uri: tightEnd.headshot_url
                    }} rounded />
                <ListItem.Content>
                    <ListItem.Title>{tightEnd.player_name}</ListItem.Title>
                        <ListItem.Subtitle>
                            Fantasy Pts: {tightEnd.fantasy_points_ppr}
                        </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem> 
            
        );
    };
    return (
        <FlatList
            data = {newTightEnds}
            renderItem={renderTEScoreItem}
            keyExtractor={(item) => item.player_id.toString()}
            initialNumToRender={50}
            nestedScrollEnabled
            />
    );
};



export default WeeklyTEScoreScreen;