import nextButtonImg from '@/assets/images/nextButton.svg';
import Pencil from '@/assets/image/CreateInfo/Pencil.svg';
import BackArrow from '@/assets/image/CreateInfo/BackArrow.svg';
import { useState } from 'react';
import { useWebSocket } from '@/websocket/WebSocketProvider';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userLanguage } from '@/states/atom';
import { Link } from 'react-router-dom';

type WsData = {
  type: string;
  pageCnt: number;
  userName?: string;
  fairyTale?: string;
  gender?: string;
  age?: string;
  language?: string;
  choice?: number;
  koContent?: string;
  enContent?: string;
};

function CreateInfoPage() {
  const [userLanState, setUserLanState] = useRecoilState(userLanguage);

  const [userInfo, setUserInfo] = useState<WsData>({
    type: 'start',
    pageCnt: 0,
    userName: '',
    fairyTale: '신데렐라',
    gender: '',
    age: '',
    language: '',
  });

  const handleChange = (field: string, value: string) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [field]: value,
    }));

    if (field == 'language') {
      setUserLanState(value);
    }

    // console.log(userLanState);
  };

  //웹소켓 연결
  const { send } = useWebSocket();

  const sendDataToServer = () => {
    send(userInfo);
  };

  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    navigate('/storychoicemodal');
    setTimeout(() => {
      sendDataToServer();
    }, 2000);

    console.log('User Info:', userInfo);
  };

  return (
    <div className="flex w-[1300px] h-screen justify-center items-center ml-28">
      <Link to="/library">
        <button>
          <img src={BackArrow} className="left-[0%] top-[0%] ml-5 mt-5 absolute" alt="BackArrow" />
        </button>
      </Link>
      <div className="flex flex-col justify-center items-center mr-10 gap-5">
        <div className="flex flex-col w-full mb-5 ">
          <div className=" w-[95%] h-12 items-center flex flex-row bg-[#659AFF] rounded-full">
            <img src={Pencil} className="w-1/5 mb-10 " alt="Pencil" />
            <p className="font-[Jua] text-3xl mt-1 text-white pr-10">너의 이름은 뭐야?</p>
          </div>
          <div className="flex w-full">
            <input
              type="text"
              placeholder="이름 입력"
              className="h-10 w-[95%] mt-4 px-5 text-2xl font-['Jua'] rounded-full "
              value={userInfo.userName}
              onChange={(e) => handleChange('userName', e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col w-full mb-5">
          <div className="w-[95%] h-12 flex items-center  flex-row bg-[#659AFF] rounded-full">
            <img src={Pencil} className="w-1/5 mb-10 " alt="Pencil" />
            <p className="font-[Jua] text-3xl mt-1 text-white pr-10">너의 성별은 뭐야?</p>
          </div>
          <div className="flex flex-row w-[95%] gap-5">
            <button
              className="w-1/2 h-10  bg-white text-[#898989] rounded-full text-2xl mt-3 font-jua"
              onClick={() => handleChange('gender', '남자')}
            >
              남자
            </button>
            <button
              className="w-1/2 h-10 bg-white text-[#898989] rounded-full text-2xl mt-3 font-jua"
              onClick={() => handleChange('gender', '여자')}
            >
              여자
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full mb-5 ">
          <div className="w-[95%] h-12 flex items-center  flex-row bg-[#659AFF] rounded-full">
            <img src={Pencil} className="w-1/5 mb-10 " alt="Pencil" />
            <p className="font-[Jua] text-3xl mt-1 text-white pr-16">너는 몇 살이야?</p>
          </div>
          <div className="">
            <input
              type="text"
              placeholder="나이 입력"
              className=" w-[95%] h-10 mt-4  px-5 text-2xl font-['Jua'] rounded-full "
              value={userInfo.age}
              onChange={(e) => handleChange('age', e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col w-full mb-5 ">
          <div className="w-[95%] h-12  flex items-center  flex-row bg-[#659AFF] rounded-full">
            <img src={Pencil} className="w-1/5 mb-10 " alt="Pencil" />
            <p className="font-[Jua] text-3xl mt-1 text-white pr-16">한글/영어 선택해줘!</p>
          </div>
          <div className="flex gap-5 w-[95%]  ">
            <button
              className=" w-1/2 h-10 bg-white text-[#898989] rounded-full text-2xl mt-3 font-jua"
              onClick={() => handleChange('language', 'ko')}
            >
              한글(Ko)
            </button>
            <button
              className="w-1/2 h-10 bg-white text-[#898989] rounded-full text-2xl mt-3 font-jua"
              onClick={() => handleChange('language', 'en')}
            >
              영어(En)
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[35%] ml-32">
        <div className="w-full h-12 justify-center flex items-center  flex-row bg-[#659AFF] rounded-full">
          <img src={Pencil} className="w-1/5 mb-10 " alt="Pencil" />
          <p className="w-full font-jua mt-1 text-3xl text-white">무슨 동화책을 고르고싶어?</p>
        </div>
        <div className="flex justify-center items-center w-full">
          <select
            className="w-2/3 mt-3 p-1 font-jua text-3xl"
            onChange={(e) => handleChange('FairyTale', e.target.value)}
          >
            <option value="Snow White">백설 공주</option>
            <option value="Three pig">아기 돼지 삼형제</option>
            <option value="Cinderella">신데렐라</option>
            <option value="Heungbu and Nolbu">흥부와 놀부</option>
          </select>
        </div>
      </div>
      <div>
        <button onClick={handleNextButtonClick}>
          <div className="absolute top-[40%] right-11 bg-moveButtonColor rounded-full h-24 w-24 z-20 items-end">
            <img className="w-20 z-20 mx-auto my-0" src={nextButtonImg} alt="next_button" />
          </div>
          <p className="absolute left-[90%] top-[53%] mt-5 font-jua">동화책 생성하러가기</p>
        </button>
      </div>
    </div>
  );
}

export default CreateInfoPage;
