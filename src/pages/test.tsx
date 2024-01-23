// const [summary, setSummary] = useState('');
//   const [isSaved, setIsSaved] = useState(false);
//   const [websocket, setWebsocket] = useState(null);

// const formatSummary = rawSummary => {
//     if (!rawSummary) return 'PRE-VIEW가 요약할 동영상을 기다리는 중입니다...';

//     // 시간 정보와 별표로 분할
//     const parts = rawSummary.split('*****');
//     let timeSummaryPart = parts[0];
//     let summaryPart = parts.length > 1 ? parts[1] : '';

//     // 모든 시간 정보 앞에 줄바꿈 추가
//     timeSummaryPart = timeSummaryPart.replace('.', '\n$1 -');

//     // 불필요한 문자열 제거
//     summaryPart = summaryPart.replace(/모든 요약이 끝났습니다./, '').trim();

//     // [시간대별 요약]과 [간단요약] 추가
//     return `[시간대별 요약]\n${timeSummaryPart}\n\n[간단요약]\n${summaryPart}`;
//   };

// // 요약본 저장 로직
// const toggleSave = async () => {
//     setIsSaved(!isSaved);

//     // '*****' 구분으로 요약 정보 분리
//     const summaryParts = summary.split('*****');

//     const summaryByTimesText = summaryParts[0].trim();
//     let summaryContent = summaryParts[1].trim();
//     summaryContent = summaryContent.replace('모든 요약이 끝났습니다.', '');
//     let category = summaryParts[2].trim();

//     category = category.replace('모든 요약이 끝났습니다.', '');
// }

//     useEffect(() => {
//         const ws = new WebSocket('ws://localhost:8000/ws/preview/');

//         ws.onopen = () => {
//           console.log('웹소켓 연결 성공');
//           sendUrlToBackend(currentUrl, ws);
//         };

//         ws.onmessage = event => {
//           const receivedData = JSON.parse(event.data);
//           console.log('메시지 수신:', receivedData);

//           // 메시지에 'message' 필드가 있을 때
//           if (receivedData.message) {
//             setSummary((prevSummary: string) => {
//               const newSummary = prevSummary + receivedData.message;
//               console.log('누적된 데이터:', newSummary);

//               // 마지막 메시지 여부 확인
//               if (receivedData.message === '모든 요약이 끝났습니다.') {
//                 console.log('전체 요약이 끝났습니다.');
//               }

//               return newSummary;
//             });
//           }
//         };

//     <div>
//         <p className="text-sm summaryText">{formatSummary(summary)}</p>
//     </div>

// const formatSummary = (rawSummary: string) => {
//     if (!rawSummary) return '로딩 중...';

//     // 시간 정보와 별표로 분할
//     const parts = rawSummary.split(/한국어|영어/);

//     let i;
//     userLanState == 'ko' ? (i = 0) : (i = 1);

//     let leftStory = parts[i];
//     let rightStory = parts.length > 2 ? parts[i + 2] : '';

//     // 모든 시간 정보 앞에 줄바꿈 추가
//     leftStory = leftStory.replace('.', '\n$1 -');
//     rightStory = rightStory.replace('.', '\n$1 -');

//     // 불필요한 문자열 제거
//     // rightStory = rightStory.replace(/모든 요약이 끝났습니다./, '').trim();

//     // [시간대별 요약]과 [간단요약] 추가
//     return `[시간대별 요약]\n${leftStory}\n\n[간단요약]\n${rightStory}`;
//   };

//   console.log(formatSummary(message));
