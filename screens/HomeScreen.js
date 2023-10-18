import { useState } from "react";
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
    return <View/>;
};

const HomeScreen = () => {
    const wideReceivers = useSelector((state) => state.wideReceivers);
    const quarterBacks = useSelector((state) => state.quarterBacks);
    const runningBacks = useSelector((state) => state.runningBacks);
    const tightEnds = useSelector((state) => state.tightEnds);
    
    const filteredWideReceivers = wideReceivers.wideReceiversArray.filter(function (item) {
        return item.week === currentWeek;
    });
    const filteredQuarterBacks = quarterBacks.quarterBacksArray.filter(function (item) {
        return item.week === currentWeek;
    });
    const filteredRunningBacks = runningBacks.runningBacksArray.filter(function (item) {
        return item.week === currentWeek;
    });
    const filteredTightEnds = tightEnds.tightEndsArray.filter(function (item) {
        return item.week === currentWeek;
    })

    const highestScoringWR = filteredWideReceivers.reduce((max, wr) => max.fantasy_points_ppr > wr.fantasy_points_ppr ? max : wr);
    const highestScoringQB = filteredQuarterBacks.reduce((max, qb) => max.fantasy_points_ppr > qb.fantasy_points_ppr ? max : qb);
    const highestScoringRB = filteredRunningBacks.reduce((max, rb) => max.fantasy_points_ppr > rb.fantasy_points_ppr ? max : rb);
    const highestScoringTE = filteredTightEnds.reduce((max, te) => max.fantasy_points_ppr > te.fantasy_points_ppr ? max : te);


    
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