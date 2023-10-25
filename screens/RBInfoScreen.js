import RenderRBStats from "../features/PlayerInfo/RenderRBStats";

const RBInfoScreen = ({ route }) => {
    const { runningBack } = route.params;

    return < RenderRBStats runningBack={runningBack}/>
};


export default RBInfoScreen;