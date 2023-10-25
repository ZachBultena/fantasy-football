import { ScrollView, Text, View } from "react-native";
import { Card } from "react-native-elements";
//import { WEEK1QB } from "../shared/week1qbs";
//import { WEEK1RB } from "../shared/week1rbs";
//import { WEEK1WR } from "../shared/week1wrs";
import { useSelector } from "react-redux";
import { currentWeek } from "../shared/currentWeek";
const HighScorer = ({ item }) => {
    if (item) { 
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={{
                    uri: item.headshot_url
                    }} 
                    style={{height:200}}
                    >
                </Card.Image>
                <Card.Divider/>
                <Card.Title
                    style={{
                        color: 'black',
                        textAlign: 'center',
                        fontSize: 30
                    }}
                >
                    Position: {item.position}
                </Card.Title>
                <Text
                    style={{
                        color: 'black',
                        textAlign: 'center',
                        fontSize: 25
                    }}
                >
                    {item.player_display_name}
                </Text>
                <Text
                    style={{
                        color: 'black',
                        textAlign: 'center',
                        fontSize: 20
                    }}
                >
                    FantasyPts: {item.fantasy_points_ppr}
                </Text>
            </Card>
        );
    }
    return <View><Text>Null</Text></View>;
};

const HomeScreen = () => {
    const wideReceivers = useSelector((state) => state.wideReceivers);
    const quarterBacks = useSelector((state) => state.quarterBacks);
    const runningBacks = useSelector((state) => state.runningBacks);
    const tightEnds = useSelector((state) => state.tightEnds);
    
    function findHighScore(array) {
        let highestScorer = array
        .filter(function (item) {
            return item.week === currentWeek;
        })
        .reduce((max, player) => max.fantasy_points_ppr > player.fantasy_points_ppr ? max : player, {});
        return highestScorer
    }

    const highestScoringWR = findHighScore(wideReceivers.wideReceiversArray);
    const highestScoringQB = findHighScore(quarterBacks.quarterBacksArray);
    const highestScoringRB = findHighScore(runningBacks.runningBacksArray);
    const highestScoringTE = findHighScore(tightEnds.tightEndsArray);


    
    return (
        <ScrollView>
            <HighScorer item={highestScoringWR}/>
            <HighScorer item={highestScoringQB}/>
            <HighScorer item={highestScoringRB}/>
            <HighScorer item={highestScoringTE}/>
        </ScrollView>
    );
};

export default HomeScreen;