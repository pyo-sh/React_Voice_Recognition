import React, { useState, useEffect } from 'react'
import MainBox from 'styles/MainBox';
import Control from 'components/Control';
import Display from 'components/Display';
import { useRecognizer } from 'hooks/useRecognizer';

const Main: React.FC = () => {
    const [outputText, startRecognizer, endRecognizer, error] = useRecognizer();
    const [recording, setRecording] = useState<boolean>(false);

    // Error 처리
    useEffect(() => {
        if(error) {
            alert(error);
        }
    }, [error])
    
    return (
        <MainBox>
            <Control
                startRecognizer={startRecognizer}
                endRecognizer={endRecognizer}
                recording={recording}
                setRecording={setRecording}
                />
            <Display
                outputText={outputText}
                recording={recording}
                />
        </MainBox>
    )
}


export default Main;