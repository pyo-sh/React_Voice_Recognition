# Voice Recognition in JavaScript

Speech Recognition 을 통해 Vocie Recognition 을 구현하게 되었습니다.

### Reference

[SpeechRecognition - MDN](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)

### Implementation

[useRecognition](https://github.com/pyo-sh/React_Voice_Recognition/blob/master/src/hooks/useRecognizer.ts)




<center>

<h2>Project</h2>

![캡처](https://user-images.githubusercontent.com/55688122/114011263-002bec80-98a0-11eb-8862-d4bd4c338f7a.PNG)

</center>

### About

시간에 제한 없이 자신의 음성을 프로그램이 자동으로 글을 인식하여 이를 기록하는 프로그램입니다.

기록한 내용들에 대한 리스트를 볼 수 있고 이를 통해 자신이 어떤 말을 했는지에 대한 기록 및 열람을 할 수 있습니다.

### Starting Project

```
npm start
```

### Review

Speech Recognition 시스템이 장기 대기를 하게 되면 에러 반환 및 종료를 하게 되어서 문제였다.

현재 프로젝트에서는 시간의 제한이 없는 만큼 사용자가 말할 때까지 대기해야 하기 때문이다.

대기시간에 관한 설정을 하는게 없었기 때문에 이를 내부에서 Stop(), Start() 를 반복하는 방법으로 해결했었다.

하지만 이 상황에서 Promise 를 사용하여도 정지 및 시작이 되지 않았기 때문에 setTimeout을 사용하였다.

이 부분이 마음에 걸리고 대기시간에 관한 설정을 하는 방법을 찾아서 할 수 있었으면 좋겠다.

또한 후에는 Discord.js 를 통해 Discord 통화의 음성을 가져오고 다른사람 과의 통화 내역도 저장할 수 있는 기능을 만들 수 있으면 좋겠다.