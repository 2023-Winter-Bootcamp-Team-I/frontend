import nextButtonImg from '@/assets/images/nextButton.svg';
import Pencil from '@/assets/image/CreateInfo/Pencil.svg';
import BackArrow from '@/assets/image/CreateInfo/BackArrow.svg';
import { useEffect, useState } from 'react';
import { useWebSocket } from '@/websocket/WebSocketProvider';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { bookID, originTitle, userIDState, userLanguage } from '@/states/atom';

type WsData = {
  userId?: number;
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
  const setUserLanState = useSetRecoilState(userLanguage);
  const [userId] = useRecoilState<number>(userIDState);
  const setbookId = useSetRecoilState(bookID);
  const setOriginTitle = useSetRecoilState<string>(originTitle);

  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState<WsData>({
    userId: userId,
    type: 'start',
    pageCnt: 0,
    userName: '',
    fairyTale: '',
    gender: '',
    age: '',
    language: '',
  });

  const [selectedGender, setSelectedGender] = useState<string>('');

  const handleChange = (field: string, value: string) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [field]: value,
    }));

    if (field === 'language') {
      setUserLanState(value);
    }
    if (field === 'fairyTale') {
      setOriginTitle(value);
    }
    if (field === 'gender') {
      setSelectedGender(value);
    }

    // console.log(userLanState);
  };

  const getButtonStyle = (gender: string) => {
    return `w-1/2 h-10 bg-white text-[${
      selectedGender === gender ? '#000000' : '#898989'
    }] rounded-full text-2xl mt-3 font-jua focus:ring ${selectedGender === gender ? 'ring-4 ring-[#464fff]' : ''}`;
  };

  const getLanguageButtonStyle = (value: string, selectedLanguage: string) => {
    return `w-1/2 h-10 bg-white text-[${
      selectedLanguage === value ? '#000000' : '#898989'
    }] rounded-full text-2xl mt-3 font-jua focus:ring ${selectedLanguage === value ? 'ring-4 ring-[#464fff]' : ''}`;
  };

  //웹소켓 연결
  const { send } = useWebSocket();

  const sendDataToServer = () => {
    send(userInfo);
  };

  const handleNextButtonClick = () => {
    navigate('/creationstart');
    setTimeout(() => {
      setbookId(0);
      sendDataToServer();
    }, 1500);

    console.log('User Info:', userInfo);
  };

  // useEffect(() => {
  //   handleChange('fairyTale', 'Snow White');
  // }, []);

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex w-[1300px] h-screen justify-center items-center">
        <Link to="/library">
          <button>
            <img src={BackArrow} className="left-[0%] top-[0%] ml-5 mt-5 absolute" alt="BackArrow" />
          </button>
        </Link>
        <div className="flex flex-col justify-center items-center mr-10 gap-5">
          <div className="flex flex-col w-full mb-5 ">
            <div className=" w-[95%] h-12 items-center flex flex-row bg-[#659AFF] rounded-full">
              <img src={Pencil} className="w-1/5 mb-10 " alt="Pencil" />
              <p className="font-[Jua] text-3xl mt-1 text-white pr-10">주인공의 이름은 뭐야?</p>
            </div>
            <div className="flex w-full">
              <input
                type="text"
                placeholder="이름 입력"
                className="h-10 w-[95%] mt-4 px-5 text-2xl font-['Jua'] rounded-full focus:outline-signupButtonBlue "
                value={userInfo.userName}
                onChange={(e) => handleChange('userName', e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col w-full mb-5">
            <div className="w-[95%] h-12 flex items-center  flex-row bg-[#659AFF] rounded-full">
              <img src={Pencil} className="w-1/5 mb-10 " alt="Pencil" />
              <p className="font-[Jua] text-3xl mt-1 text-white pr-10">주인공의 성별은 뭐야?</p>
            </div>
            <div className="flex flex-row w-[95%] gap-5">
              <button className={getButtonStyle('남자')} onClick={() => handleChange('gender', '남자')}>
                남자
              </button>
              <button className={getButtonStyle('여자')} onClick={() => handleChange('gender', '여자')}>
                여자
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5 ">
            <div className="w-[95%] h-12 flex items-center  flex-row bg-[#659AFF] rounded-full">
              <img src={Pencil} className="w-1/5 mb-10 " alt="Pencil" />
              <p className="font-[Jua] text-3xl mt-1 text-white pr-16">주인공은 몇 살이야?</p>
            </div>
            <div className="">
              <input
                type="text"
                placeholder="나이 입력"
                className=" w-[95%] h-10 mt-4  px-5 text-2xl font-['Jua'] rounded-full focus:outline-signupButtonBlue"
                value={userInfo.age}
                onChange={(e) => handleChange('age', e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col w-full mb-5 ">
            <div className="w-[95%] h-12  flex items-center flex-row bg-[#659AFF] rounded-full ">
              <img src={Pencil} className="w-1/5 mb-10 " alt="Pencil" />
              <p className="font-[Jua] text-3xl mt-1 text-white ">언어를 선택해줘!</p>
            </div>
            <div className="flex gap-5 w-[95%]  ">
              <button
                className={getLanguageButtonStyle('ko', userInfo.language)}
                onClick={() => handleChange('language', 'ko')}
              >
                한국어
              </button>
              <button
                className={getLanguageButtonStyle('en', userInfo.language)}
                onClick={() => handleChange('language', 'en')}
              >
                영어
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[35%] ml-32">
          <div className="w-full h-12 justify-center flex items-center  flex-row bg-[#659AFF] rounded-full">
            <img src={Pencil} className="w-1/5 mb-10 " alt="Pencil" />
            <p className="w-full font-jua mt-1 text-3xl text-white">만들고싶은 동화책을 골라봐!</p>
          </div>
          <div className="flex justify-center items-center w-full">
            <select
              className="w-2/3 mt-3 p-1 font-jua text-3xl"
              onChange={(e) => handleChange('fairyTale', e.target.value)}
            >
              <option value="백설공주">백설 공주</option>
              <option value="아기 돼지 삼형제">아기 돼지 삼형제</option>
              <option value="신데렐라">신데렐라</option>
              <option value="흥부와 놀부">흥부와 놀부</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <button onClick={handleNextButtonClick}>
          <div className="bg-moveButtonColor rounded-full h-24 w-24 z-20">
            <img className="w-20 z-20 mx-auto my-0" src={nextButtonImg} alt="next_button" />
          </div>
        </button>
        <p className="mt-5 text-xl font-jua">동화책 만들기</p>
      </div>
    </div>
  );
}

export default CreateInfoPage;
