import { Text, View } from "react-native";
import { Card } from "react-native-elements";

const RenderTEStats = ({ tightEnd }) => {
    if (tightEnd) {
        
        const totalTds = (tightEnd.special_teams_tds + tightEnd.rushing_tds + tightEnd.receiving_tds);

        return (
            <Card containerStyle={{ padding: 0}}>
                <Card.Image 
                    source={{
                        uri: tightEnd.headshot_url
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
                            {tightEnd.player_display_name}
                </Text>
                
                <Text 
                    style={{ 
                        margin: 4,
                        textAlign:'left',
                        fontSize:20
                    }}>

                        POS: {tightEnd.position}
                </Text>
                <Text 
                    style={{ 
                        margin: 4,
                        textAlign:'left',
                        fontSize:20
                    }}>

                        Receiving Yards: {tightEnd.receiving_yards}
                </Text>
                <Text 
                    style={{ 
                        margin: 4,
                        textAlign:'left',
                        fontSize:20
                    }}>

                        Receptions: {tightEnd.receptions}
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

export default RenderTEStats;