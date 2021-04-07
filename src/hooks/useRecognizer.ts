import {useEffect, useState} from 'react';

// window SpeechRecognition 으로 브라우저의 마이크 사용
const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition

// 초반 Recognition 설정
let recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = 'ko-KR';
recognition.interimResults = true;
recognition.maxAlternatives = 1;

// Hooks
export const useRecognizer = () => {
    // Recognized Text
    const [outputText, setOutputText] = useState("");
    const [interim, setInterim] = useState("");
    const [error, setError] = useState("");

    // Recognizer에서 필요한 것들을 설정
    useEffect(() => {
        // Recognition에서 마이크 입력을 받고난 뒤 인공지능의 결과 값을 처리
        recognition.onresult = function(event) {
            let final_transcript = "";
            let interim_transcript = "";
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    final_transcript += event.results[i][0].transcript;
                }
                else {
                    interim_transcript += event.results[i][0].transcript;
                }
            }
            if(interim_transcript){
                setInterim(interim_transcript);
            }
            if(final_transcript){
                setOutputText(final_transcript);
            }
        }
        // Recognition이 끝날 때
        recognition.onend = (evt) => {
            // Do Something...
        }
        // Recognition의 음성 인식을 끝낼 때
        recognition.onspeechend = (evt) => {
            // Do Something...
        }
    }, [])

    const startRecognizer: any = () => {
        recognition.start();
    }

    const endRecognizer: any = () => {
        recognition.stop()
    }
    
    return [outputText, interim, startRecognizer, endRecognizer, error];
}