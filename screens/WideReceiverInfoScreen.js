import RenderWideReceiverStats from '../features/PlayerInfo/RenderWideReceiverStats';


const WideReceiverInfoScreen = ({route}) => {
    const { wideReceiver } = route.params;
    
    return <RenderWideReceiverStats wideReceiver={wideReceiver} />;
}

export default WideReceiverInfoScreen;