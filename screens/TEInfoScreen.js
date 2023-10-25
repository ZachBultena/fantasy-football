import RenderTEStats from "../features/PlayerInfo/RenderTEStats";

const TEInfoScreen = ({route}) => {
    const { tightEnd } = route.params;
    
    return <RenderTEStats tightEnd={tightEnd} />;
}

export default TEInfoScreen;