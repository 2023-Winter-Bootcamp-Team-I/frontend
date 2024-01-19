import Robot from '@/assets/image/StoryChoice/Robot.svg';
import { showModal, userLanguage } from '@/states/atom';
import { useWebSocket } from '@/websocket/WebSocketProvider';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
//웹 소켓 통신으로 스토리 보내고 받고
interface Story {
  language: string;
  content: string;
}

const StoryChoiceModal = () => {
  const { socket } = useWebSocket();
  const [message, setMessage] = useState<string>('');
  const [storyChoice, setStoryChoice] = useState<Story[]>([]);
  const [isshowModal, setShowModal] = useRecoilState<boolean>(showModal);
  // const [prevChoiceArr, setPrevChoiceArr] = useState<Story[]>([]);
  const [userLanState] = useRecoilState(userLanguage);
  const [index, setIndex] = useState<number>(0); //출력할 배열의 인덱스
  const [choice, setChoice] = useState<number>(0); //선택한 스토리 배열 인덱스
  const [boxNum, setBoxNum] = useState<number>(0);
  const [pageNum, setPageNum] = useState<number>(0);
  const [socketSent, setSocketSend] = useState<boolean>(false);
  const navigate = useNavigate();
  // const isMounted = useRef(true);

  const choiceStory = (boxNumber: number) => {
    setPageNum((prev) => prev + 1);
    // console.log(pageNum);

    if (boxNumber === 1) {
      setChoice(0);
      setBoxNum(boxNumber);
    } else if (boxNumber === 2) {
      setChoice(2);
      setBoxNum(boxNumber);
    }
  };

  useEffect(() => {
    if (boxNum !== 0) {
      setSocketSend(true);

      socket?.send(
        JSON.stringify({
          type: pageNum === 6 ? 'end' : 'ing',
          pageCnt: pageNum,
          choice: boxNum,
          koContent: storyChoice[choice],
          enContent: storyChoice[choice + 1],
        })
      );
    }

    return () => {
      console.log('unmounting..');
      setBoxNum(0);
      setStoryChoice([]);
      setMessage('');
      setShowModal(false);
      setSocketSend(false);

      if (pageNum === 5) {
        //unmounting이 되고 socket()실행이 돼서 pagenum -1
        // console.log('if문 내부' + pageNum);
        socket?.close();
        //제목 생성 페이지로 이동
        navigate('/backcover');
        // socket.onmessage = null; //더 이상 메시지를 수신하고 싶지 않을 때
      }
    };
  }, [pageNum]);

  if (userLanState == 'en') {
    setIndex(1);
  }

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 500);

    if (socket) {
      // console.log('socket connecting');

      socket.onmessage = (event) => {
        // Buffer를 문자열로 변환
        const data = JSON.parse(event.data.toString());
        const msg: string = data.message;

        //한글자씩 받아서 이어붙이기
        setMessage((m) => m + msg);

        // console.log(message);
        // 특정 문자로 데이터 슬라이싱해 저장
        setStoryChoice((prevArr) => {
          const lastItem = prevArr[prevArr.length - 1]; //배열의 마지막 요소

          if (msg === ':\n' || msg === '.\n\n') {
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

      // console.log(message);
    }
  }, [isshowModal, socket, storyChoice]);

  //사용자가 스토리 선택하면 해당 스토이 배열 보내주기
  useEffect(() => {
    console.log(storyChoice);
  }, [storyChoice]);

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
            {isshowModal ? (
              <>
                <div
                  onClick={() => {
                    choiceStory(1);
                  }}
                  className="cursor-pointer w-2/4 h-[80%]  mt-[4.5rem] ml-10 mr-10  bg-[#D9D9D9] shadow-[5px_3px_4px_0_rgba(0,0,0,0.25)]  rounded-2xl  z-30"
                >
                  <span className="font-dongle text-[#222222] text-3xl">
                    {storyChoice[index] ? storyChoice[index]['content'] : ''}
                  </span>
                </div>
                <div
                  onClick={() => {
                    choiceStory(2);
                  }}
                  className="cursor-pointer w-2/4 h-[80%] mt-[4.5rem] ml-10 mr-10 bg-[#D9D9D9] shadow-[5px_3px_4px_0_rgba(0,0,0,0.25)] rounded-2xl  z-30"
                >
                  <span className="font-dongle text-[#222222] text-3xl">
                    {storyChoice[index + 2] ? storyChoice[index + 2]['content'] : ''}
                  </span>
                </div>
              </>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryChoiceModal;
