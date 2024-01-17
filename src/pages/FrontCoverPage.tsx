import robotImg from '@/assets/images/robot.svg';
import prevButtonImg from '@/assets/images/prevButton.svg';
import nextButtonImg from '@/assets/images/nextButton.svg';
import { useEffect, useState } from 'react';

//웹소켓
type WsData = {
  type: string;
  pageCnt: number;
  userName?: string;
  fairyTale?: string;
  gender?: string;
  age?: number;
  language?: string;
  choice?: number;
  koContent?: string;
  enContent?: string;
};

interface Story {
  language: string;
  content: string;
}

function FrontCoverPage() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState<string>('');
  const [choiceArr, setChoiceArr] = useState<Story[]>([]);
  const [prevChoiceArr, setPrevChoiceArr] = useState<Story[]>([]);

  const websocket = (data: WsData): void => {
    const ws = new WebSocket('ws://localhost:8000/ws/books/');

    ws.onopen = () => {
      ws.send(JSON.stringify(data));
      setSocket(ws);
    };

    ws.onmessage = (event) => {
      // Buffer를 문자열로 변환
      const data = JSON.parse(event.data.toString());
      // console.log('Message from server:', data.message);
      const message: string = data.message;

      //한글자씩 받아오는?
      setMessage((m) => m + message);

      // "한국어" 또는 "영어"라는 문자열을 기준으로 나누어 저장
      setChoiceArr((prevArr) => {
        const lastItem = prevArr[prevArr.length - 1]; //배열의 마지막 요소

        if (message === '국' || message === '영') {
          // 새로운 이야기 시작
          return [...prevArr, { language: message, content: '' }];
        } else if (lastItem) {
          // 이전 이야기에 내용 추가
          lastItem.content += message;
          return [...prevArr.slice(0, -1), lastItem];
        }

        return prevArr;
      });
    };

    ws.onclose = () => {
      setSocket(null);
      // console.log(choiceArr);
    };
  };

  const tempdata: WsData = {
    type: 'start',
    pageCnt: 0,
    userName: '송유림',
    fairyTale: '신데렐라',
    gender: '여',
    age: 20,
    language: 'ko',
  };

  //화면 들어가면 바로 웹소켓 실행
  useEffect(() => {
    websocket(tempdata);
  }, []);

  // console.log(choiceArr);

  useEffect(() => {
    // choiceArr 상태가 업데이트되면서 변경이 있을 때만 콘솔에 출력하고 요청을 보냄
    if (JSON.stringify(prevChoiceArr) !== JSON.stringify(choiceArr)) {
      console.log(choiceArr);
      setPrevChoiceArr([...choiceArr]); // 이전 상태 업데이트

      // 요청 보내는 부분
      socket?.send(
        JSON.stringify({
          type: 'ing',
          pageCnt: 1,
          choice: '1',
          koContent: choiceArr[0],
          enContent: choiceArr[1],
        })
      );
    }
  }, [prevChoiceArr]);

  //스트림 데이터 받아오는거 출력
  if (message != '') {
    console.log(message);
  }

  // console.log(choiceArr);

  //나중에 선택한 스토리 보낼 때
  socket?.send(
    JSON.stringify({
      type: 'ing',
      pageCnt: 1,
      choice: '1',
      koContent: choiceArr[0],
      enContent: choiceArr[1],
    })
  );

  return (
    <div className="w-screen h-screen bg-mainColor bg-opacity-15 relative z-10">
      <div className="absolute top-[45%] left-[2%] bg-moveButtonColor rounded-full h-24 w-24 ml-10 z-20">
        <img className="flex w-20 z-20 mx-auto -ml-[0.01px] mt-[0.02px] my-0" src={prevButtonImg} alt="prev_button" />
      </div>
      <div className="flex flex-row w-[1500px] mx-auto my-0">
        <div className="flex flex-col basis-1/2 h-screen justify-center">
          <div className="flex basis-1/2 justify-center">
            <img className="flex mx-auto min-h-full z-20 w-60 mt-36" src={robotImg} alt="robot_character" />
          </div>
          <div className="flex flex-col basis-1/2 items-center align-middle mt-24 ml-20 gap-y-10">
            <div className="flex justify-center font-dongle text-6xl w-2/3 leading-snug break-keep">
              라푼젤의 주인공이 되어 이야기를 완성시켜봐!
            </div>
          </div>
        </div>
        <div className="flex basis-1/2 h-screen justify-center content-center">
          <div className="flex bg-bookCoverBack h-[90%] w-[96%] mt-8 -ml-24 rounded-3xl">
            <div className="flex flex-col bg-bookCoverFront h-full w-full mt-6 z-10 -ml-6 mr-6 rounded-3xl justify-center items-center">
              <div className="flex bg-bookCoverTextBox h-[25%] w-4/5 rounded-3xl border-2 border-shadowGray border-solid font-dongle text-[7rem] mb-44 items-center justify-center">
                <div className="p-10 break-keep text-titleColor align-bottom">백설 공주</div>
              </div>
              <div className="bg-bookCoverLine h-1/5 w-full mt-10 mb-44"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[45%] right-10 bg-moveButtonColor rounded-full h-24 w-24 z-20 items-end">
        <img className="w-20 z-20 mx-auto my-0" src={nextButtonImg} alt="next_button" />
      </div>
    </div>
  );
}

export default FrontCoverPage;
