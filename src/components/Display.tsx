import React, { useState, useEffect } from 'react';
import DisplayBox from 'styles/DisplayBox';

type DisplayPropType = {
    outputText: string,
    recording: boolean,
}

const Display: React.FC<DisplayPropType> = ({ outputText, recording }) => {
    const [recordedDate, setRecordedDate] = useState<string>('');
    const [recordedTime, setRecordedTime] = useState<number>(0);
    const [data, setData] = useState<Array<any>>([]);

    // record speech
    useEffect(() => {
        if (outputText){
            let time_diff = Math.floor((new Date().getTime() - recordedTime) / 1000);
            // 시
            const hours = Math.floor(time_diff / 3600);
            time_diff -= hours * 3600;
            const hour = (hours < 10 ? '0' : '') + hours.toString();
            // 분
            const minutes = Math.floor(time_diff / 60);
            time_diff -= minutes * 60;
            const minute = (minutes < 10 ? '0' : '') + minutes.toString();
            // 초
            const second = (time_diff < 10 ? '0' : '') + time_diff.toString();
            
            // Re record 시에 생기는 trash outputText 를 방지하기 위함
            const time = [hour, minute, second].join(':');
            if (time !== "00:00:00") {
                const inputData = [time, outputText];
                setData((prev) => [...prev, inputData])
            }
        }
    }, [outputText, recordedTime]);

    // define States when starting record
    useEffect(() => {
        if (recording) {
            const nowDate = new Date();
            setRecordedDate(nowDate.toString());
            setRecordedTime(nowDate.getTime());
            setData([]);
        }
    }, [recording])

    return (
        <DisplayBox>
            {recordedDate}
            {
            data.map((element, index) => {
                return <h2 key={index}>{element[0]}  {element[1]}</h2>
            })
            }
        </DisplayBox>
    );
}

export default Display;