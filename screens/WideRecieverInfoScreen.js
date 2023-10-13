import RenderWideRecieverStats from '../features/PlayerInfo/RenderWideRecieverStats';


const WideRecieverInfoScreen = ({route}) => {
    const { wideReciever } = route.params;
    
    return <RenderWideRecieverStats wideReciever={wideReciever} />;
}

export default WideRecieverInfoScreen;