import React, { useState, useEffect } from 'react';
import RecordDisplayBox from 'styles/RecordDisplayBox';

type DisplayPropType = {
    outputText: string,
    recording: boolean,
    data: Array<any>,
    setData: React.Dispatch<React.SetStateAction<any[]>>,
    setRecordedDate: React.Dispatch<React.SetStateAction<string>>,
}

const RecordDisplay: React.FC<DisplayPropType> = ({ outputText, recording, data, setData, setRecordedDate }) => {
    const [recordedTime, setRecordedTime] = useState<number>(0);

    // record speech
    useEffect(() => {
        if (outputText && recording){
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
            setRecordedDate(nowDate.toString().slice(0, 24));
            setRecordedTime(nowDate.getTime());
            setData([]);
        }
    }, [recording])

    return (
        <RecordDisplayBox>
            {
            data.map((element, index) => {
                return <li className="RecordDisplay-List" key={index}>
                    <div className="RecordDisplay-Time">
                        {element[0]}
                    </div>
                    <p className="RecordDisplay-Content">
                        {element[1]}
                    </p>
                </li>
            })
            }
        </RecordDisplayBox>
    );
}

export default RecordDisplay;