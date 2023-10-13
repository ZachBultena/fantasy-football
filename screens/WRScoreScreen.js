import { useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { WEEK1WR } from '../shared/week1wrs';


const WeeklyWRScoreScreen = ({ navigation }) => {
    const [wideRecievers, setWideRecievers] = useState(WEEK1WR);

    const renderWRScoreItem = ({ item: wideReciever}) => {
        return (
            <ListItem 
                onPress={() => 
                    navigation.navigate('WideRecieverInfo', { wideReciever })
                }
            >
                <Avatar source={{
                    uri: wideReciever.headshot_url
                    }} rounderd />
                <ListItem.Content>
                    <ListItem.Title>{wideReciever.player_name}</ListItem.Title>
                        <ListItem.Subtitle>
                            Fantasy Pts: {wideReciever.fantasy_points_ppr}
                        </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem> 
            
        );
    };
    return (
        <FlatList
            data = {wideRecievers}
            renderItem={renderWRScoreItem}
            keyExtractor={(item) => item.player_id}
            nestedScrollEnabled
            />
    );
};



export default WeeklyWRScoreScreen;