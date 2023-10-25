import RenderQBStats from "../features/PlayerInfo/RenderQBStats";

const QBInfoScreen = ({route}) => {
    const { quarterBack } = route.params;
    
    return <RenderQBStats quarterBack={quarterBack}/>
};


export default QBInfoScreen;