import { Text, View } from "react-native";
import { Card } from "react-native-elements";

const RenderQBStats = ({ quarterBack }) => {
    if (quarterBack) {
        
        const totalTds = (quarterBack.special_teams_tds + quarterBack.rushing_tds + quarterBack.passing_tds+ quarterBack.receiving_tds);

        return (
            <Card containerStyle={{ padding: 0}}>
                <Card.Image 
                    source={{
                        uri: quarterBack.headshot_url
                    }}
                    style={{
                        height:400
                    }}
                >
                </Card.Image>
                <Card.Divider/>
                <Text
                    style={{
                        color: 'black',
                        textAlign: 'center',
                        fontSize: 30
                    }}>
                            {quarterBack.player_display_name}
                </Text>
                
                <Text 
                    style={{ 
                        margin: 4,
                        textAlign:'left',
                        fontSize:20
                    }}>

                        POS: {quarterBack.position}
                </Text>
                <Text 
                    style={{ 
                        margin: 4,
                        textAlign:'left',
                        fontSize:20
                    }}>

                        Passing Yards: {quarterBack.passing_yards}
                </Text>
                <Text 
                    style={{ 
                        margin: 4,
                        textAlign:'left',
                        fontSize:20
                    }}>

                        Completions: {quarterBack.completions}/{quarterBack.attempts}
                </Text>
                <Text 
                    style={{
                        margin: 4,
                        textAlign:'left',
                        fontSize:20
                    }}>
                        TouchDowns: {totalTds}
                </Text>
            </Card>
        );
    }
    return <View />;
};

export default RenderQBStats;