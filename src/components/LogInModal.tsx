import heartImg from '@/assets/images/heart.svg';
import letterImg from '@/assets/images/letter.svg';
import lockImg from '@/assets/images/lock.svg';
import { loginUser } from '@/api/login'; // 파일 경로 확인 필요
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { userIDState } from '@/states/atom';

function LogInModal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUserID = useSetRecoilState(userIDState);

  const handleLogin = async () => {
    // loginUser 함수 호출
    const response = await loginUser({ email, password });
    const userID = response.data['result']['user_id'];

    setUserID(userID);
  };

  return (
    <div className=" z-10 absolute top-[15%] w-screen h-screen">
      <div className="flex justify-center text-center sm:items-center sm:p-0">
        {/* Modal code starts from the below line */}
        <div className="relative rounded-lg shadow-[0_8px_20px_-8px_rgba(0,0,0,0.2)] transition-all my-8 w-1/2">
          <div className="flex flex-row h-[70vh]">
            <div className="flex flex-col bg-loginBlue basis-1/3">
              <div className="flex basis-2/3 justify-center">
                <img className="mx-auto min-h-full w-2/3" src={heartImg} alt="heart_character" />
              </div>
              <div className="flex basis-1/3 font-dongle text-white text-9xl justify-center align-bottom">북그북그</div>
            </div>
            <div className="flex flex-col bg-mainColor basis-2/3 h-full">
              <div className="flex text-white font-jua text-5xl justify-center mt-20 mb-[7vh]">로그인</div>
              <div className="flex flex-col justify-center">
                <div className="flex justify-center">
                  <img
                    className="flex mx-auto min-h-full w-12 opacity-50 -mr-20 ml-10"
                    src={letterImg}
                    alt="letter_image"
                  />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="이메일을 입력해주세요"
                    required
                    className="block w-[80%] h-[4.2rem] text-xl rounded-full px-24 py-[18px] border-2 border-shadowGray"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex mt-8 mb-[7vh] justify-center">
                  <img
                    className="flex mx-auto min-h-full w-12 opacity-50 -mr-20 ml-10"
                    src={lockImg}
                    alt="lock_image"
                  />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    required
                    className="block w-[80%] h-[4.2rem] text-xl rounded-full px-24 py-[18px] border-2 border-shadowGray"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex flex-row gap-2 ml-2 justify-center">
                  <button
                    className="w-[11.5rem] text-[1.8rem] font-jua rounded-2xl bg-white py-4 text-3xl leading-7 text-loginBlue mr-2"
                    onClick={handleLogin}
                  >
                    로그인
                  </button>
                  <button className="w-[11.5rem] text-[1.8rem] font-jua rounded-2xl bg-loginBlue py-4 text-3xl leading-7 text-white ml-2">
                    회원 가입
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInModal;
