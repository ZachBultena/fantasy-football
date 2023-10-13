import { Text, View } from "react-native";
import { Card } from "react-native-elements";

const RenderWideRecieverStats = ({ wideReciever }) => {
    if (wideReciever) {
        
        const totalTds = (wideReciever.special_teams_tds + wideReciever.rushing_tds + wideReciever.receiving_tds);

        return (
            <Card containerStyle={{ padding: 0}}>
                <Card.Image 
                    source={{
                        uri: wideReciever.headshot_url
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
                            {wideReciever.player_display_name}
                </Text>
                
                <Text 
                    style={{ 
                        margin: 4,
                        textAlign:'left',
                        fontSize:20
                    }}>

                        POS: {wideReciever.position}
                    </Text>
                <Text 
                    style={{ 
                        margin: 4,
                        textAlign:'left',
                        fontSize:20
                    }}>

                        Receiving Yards: {wideReciever.receiving_yards}
                </Text>
                <Text 
                    style={{ 
                        margin: 4,
                        textAlign:'left',
                        fontSize:20
                    }}>

                        Receptions: {wideReciever.receptions}
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

export default RenderWideRecieverStats;