import Robot from '@/assets/image/StoryChoice/Robot.svg';
import { useWebSocket } from '@/websocket/WebSocketProvider';
import { useEffect, useState } from 'react';
//웹 소켓 통신으로 스토리 보내고 받고
interface Story {
  language: string;
  content: string;
}

const StoryChoiceModal = () => {
  const { socket } = useWebSocket();
  const [message, setMessage] = useState<string>('');
  const [storyChoice, setStoryChoice] = useState<Story[]>([]);
  const [prevChoiceArr, setPrevChoiceArr] = useState<Story[]>([]);

  useEffect(() => {
    if (socket) {
      // console.log('socket connecting');
      socket.onmessage = (event) => {
        // Buffer를 문자열로 변환
        const data = JSON.parse(event.data.toString());
        const msg: string = data.message;

        //한글자씩 받아서 이어붙이기
        setMessage((m) => m + msg);

        //특정 문자로 데이터 슬라이싱해 저장
        setStoryChoice((prevArr) => {
          const lastItem = prevArr[prevArr.length - 1]; //배열의 마지막 요소

          if (msg === '한' || msg === '영') {
            // 다른언어 또는 다른 스토리 시작
            return [...prevArr, { language: msg, content: '' }];
          } else if (lastItem) {
            // 이전 이야기에 내용 추가
            lastItem.content += msg;
            return [...prevArr.slice(0, -1), lastItem];
          }

          return prevArr;
        });
      };
    }

    // storyChoice 상태가 업데이트되면서 변경이 있을 때만 콘솔에 출력하고 요청을 보냄
    if (JSON.stringify(prevChoiceArr) !== JSON.stringify(storyChoice)) {
      console.log(storyChoice);
      setPrevChoiceArr([...storyChoice]); // 이전 상태 업데이트

      // 요청 보내는 부분
      socket?.send(
        JSON.stringify({
          type: 'ing',
          pageCnt: 1,
          choice: '1',
          koContent: storyChoice[0],
          enContent: storyChoice[1],
        })
      );
    }

    return () => {
      if (socket) {
        socket.onmessage = null;
        setMessage('');
        setStoryChoice([]);
        setPrevChoiceArr([]);
      }
    };
  }, [socket, storyChoice, prevChoiceArr]);

  return (
    // 배경 뿌옇게
    <div className="flex flex-col bg-white bg-opacity-70 w-screen h-screen relative z-10">
      <div className=" flex flex-col mx-auto my-0 w-[75rem] relative z-20">
        {/* 로봇 이미지 + 멘트  */}
        <div className="flex flex-row justify-center items-center gap-8 -ml-32 z-50">
          <img src={Robot} className="w-[14%] mt-3 z-40"></img>
          <div className="font-dongle font-medium text-8xl -mt-4 text-[#002875] z-20">다음은 어떤 장면이 펼쳐질까?</div>
        </div>
        {/* 박스 3개 */}
        <div className="flex flex-row justify-center h-[800px] pb-10 z-20">
          {/* 큰 박스 */}
          <div className=" w-[95%] h-[70%] bg-[#E6E6E6] rounded-2xl  flex flex-row justify-center z-20">
            {/* 왼쪽 박스 */}
            <div className="w-2/4 h-[80%]  mt-[4.5rem] ml-10 mr-10  bg-[#D9D9D9] shadow-[5px_3px_4px_0_rgba(0,0,0,0.25)]  rounded-2xl  z-30"></div>
            {/* 오른쪽 박스 */}
            <div className="w-2/4 h-[80%] mt-[4.5rem] ml-10 mr-10 bg-[#D9D9D9] shadow-[5px_3px_4px_0_rgba(0,0,0,0.25)] rounded-2xl  z-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryChoiceModal;
