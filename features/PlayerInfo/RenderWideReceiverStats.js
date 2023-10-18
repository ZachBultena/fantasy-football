import { Text, View } from "react-native";
import { Card } from "react-native-elements";

const RenderWideReceiverStats = ({ wideReceiver }) => {
    if (wideReceiver) {
        
        const totalTds = (wideReceiver.special_teams_tds + wideReceiver.rushing_tds + wideReceiver.receiving_tds);

        return (
            <Card containerStyle={{ padding: 0}}>
                <Card.Image 
                    source={{
                        uri: wideReceiver.headshot_url
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
                            {wideReceiver.player_display_name}
                </Text>
                
                <Text 
                    style={{ 
                        margin: 4,
                        textAlign:'left',
                        fontSize:20
                    }}>

                        POS: {wideReceiver.position}
                </Text>
                <Text 
                    style={{ 
                        margin: 4,
                        textAlign:'left',
                        fontSize:20
                    }}>

                        Receiving Yards: {wideReceiver.receiving_yards}
                </Text>
                <Text 
                    style={{ 
                        margin: 4,
                        textAlign:'left',
                        fontSize:20
                    }}>

                        Receptions: {wideReceiver.receptions}
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

export default RenderWideReceiverStats;