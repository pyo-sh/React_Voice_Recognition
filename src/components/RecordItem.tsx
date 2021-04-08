import React, { useState, useEffect } from 'react';
import RecordItemBox from 'styles/RecordItemBox';
import RecordDisplay from 'components/RecordDisplay';
import { useRecognizer } from 'hooks/useRecognizer';

type RecordItemPropType = {
    selectedItem: string,
}

const RecordItem: React.FC<RecordItemPropType> = ({ selectedItem }) => {
    const [outputText, startRecognizer, endRecognizer, error] = useRecognizer();
    const [recording, setRecording] = useState<boolean>(false);
    // Contents
    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [contents, setContents] = useState<Array<any>>([]);
    const [recordedDate, setRecordedDate] = useState<string>('');

    // Local 상호연동
    useEffect(() => {
        const storeObject = JSON.parse(window.localStorage.getItem(selectedItem)|| '{}');
        if (storeObject) {
            setId(storeObject.id);
            setContents(storeObject.contents);
            setTitle(storeObject.name);
            setRecordedDate(storeObject.date);
        }
    }, [selectedItem]);

    // Error 처리
    useEffect(() => {
        if (error) {
            alert(error);
        }
    }, [error]);

    // 녹음 시작
    const startRecording = () => {
        if (!recording) {
            setRecording(true);
            startRecognizer();
        }
    };

    // 녹음 끝
    const endRecording = () => {
        if (recording) {
            setRecording(false);
            endRecognizer();
            // Save
            window.localStorage.setItem(selectedItem, JSON.stringify({
                id: id,
                name: title,
                contents: contents,
                date: recordedDate,
            }))
        }
    };

    return (
        <RecordItemBox>
            <section>
                {recording 
                ?   <button onClick={endRecording}>Stop</button>
                :   <button onClick={startRecording}>Record</button>
                }
                {recordedDate}
            </section>
            <RecordDisplay
                outputText={outputText}
                recording={recording}
                data={contents}
                setData={setContents}
                recordedDate={recordedDate}
                setRecordedDate={setRecordedDate}
                />
        </RecordItemBox>
    );
}

export default RecordItem;