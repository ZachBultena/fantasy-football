import { Text, View } from "react-native";
import { Card } from "react-native-elements";

const RenderRBStats = ({ runningBack }) => {
    if (runningBack) {
        
        const totalTds = (runningBack.special_teams_tds + runningBack.rushing_tds + runningBack.passing_tds+ runningBack.receiving_tds);

        return (
            <Card containerStyle={{ padding: 0}}>
                <Card.Image 
                    source={{
                        uri: runningBack.headshot_url
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
                            {runningBack.player_display_name}
                </Text>
                
                <Text 
                    style={{ 
                        margin: 4,
                        textAlign:'left',
                        fontSize:20
                    }}>

                        POS: {runningBack.position}
                </Text>
                <Text 
                    style={{ 
                        margin: 4,
                        textAlign:'left',
                        fontSize:20
                    }}>

                        Rushing Yards: {runningBack.rushing_yards}
                <Text 
                    style={{ 
                        margin: 4,
                        textAlign:'left',
                        fontSize:20
                    }}>

                        Carries: {runningBack.carries}
                </Text>
                </Text>
                <Text 
                    style={{ 
                        margin: 4,
                        textAlign:'left',
                        fontSize:20
                    }}>

                        Receiving Yards: {runningBack.receiving_yards}
                </Text>
                <Text 
                    style={{ 
                        margin: 4,
                        textAlign:'left',
                        fontSize:20
                    }}>

                        Receptions: {runningBack.receptions}
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

export default RenderRBStats;