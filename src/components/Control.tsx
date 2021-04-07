import React from 'react'
import ControlBox from 'styles/ControlBox';

type ControlPropType = {
    startRecognizer: any,
    endRecognizer: any,
    recording: boolean,
    setRecording: Function
}

const Control: React.FC<ControlPropType> = ({ startRecognizer, endRecognizer, recording, setRecording }) => {
    const startRecording = () => {
        if (!recording) {
            setRecording(true);
            startRecognizer();
        }
    }

    const endRecording = () => {
        if (recording) {
            setRecording(false);
            endRecognizer();
        }
    }

    return (
        <ControlBox>
            <button onClick={startRecording}>Record</button>
            <button onClick={endRecording}>Stop</button>
        </ControlBox>
    )
}


export default Control;