import {useEffect, useState, useCallback} from 'react';

// window SpeechRecognition 으로 브라우저의 마이크 사용
const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition

// 초반 Recognition 설정
let recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = 'ko-KR';
// 완성된 것을 사용할 것이므로 interim을 임시 삭제
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// Hooks
export const useRecognizer = () => {
    const [isRun, setIsRun] = useState<boolean>(false);
    // Recognized Text
    const [outputText, setOutputText] = useState<string>("");
    // const [interim, setInterim] = useState<string>("");
    const [error, setError] = useState<string>("");

    // Recognizer에서 필요한 것들을 설정
    useEffect(() => {
        // Recognition에서 마이크 입력을 받고난 뒤 인공지능의 결과 값을 처리
        recognition.onresult = function(event) {
            let final_transcript = "";
            // let interim_transcript = "";
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    final_transcript += event.results[i][0].transcript;
                }
                // else {
                //     interim_transcript += event.results[i][0].transcript;
                // }
            }
            // if(interim_transcript){
            //     setInterim(interim_transcript);
            // }
            if(final_transcript){
                setOutputText(final_transcript);
            }
        }

        // Recognition이 끝날 때
        recognition.onend = (event) => {
            // Do Something...
        }
        // Error 처리
        recognition.onerror = (event) => {
            // 나는 말이 없는 것을 처리하지 않을 것이다.
            if(event.error === 'no-speech'){
                restart();
            }
            else {
                console.log('Speech recognition error detected: ' + event.error);
                setError(event.error);
            }
        }
    }, [])

    // 음성 인식이 계속 되는 것이 아니라서 재시작을 해야했었다..
    // 꼼수로 하긴 했는데 이걸 개선하는 방법은 없을까?
    const restart = () => {
        new Promise((resolve) => {resolve(recognition.stop());})
            .then(() => {setTimeout(() => {
                recognition.start();
            }, 150);
        });
    }

    // Recognition의 음성 인식을 끝낼 때
    recognition.onspeechend = useCallback((event) => {
        // 바깥에서 종료한 것이 아니라 그저 인식이 끝난거면 재시작을 해서 계속 인식받도록 하자..
        // console.log(isRun);
        if (isRun) {
            restart();
        }
    }, [isRun]);

    const startRecognizer: any = () => {
        setIsRun(true);
        recognition.start();
    }

    const endRecognizer: any = () => {
        setIsRun(false);
        recognition.stop();
    }
    
    // return [outputText, interim, startRecognizer, endRecognizer, error];
    return [outputText, startRecognizer, endRecognizer, error];
}