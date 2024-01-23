import React, { useState, useEffect } from 'react';
import heartImg from '@/assets/images/heart.svg';
import letterImg from '@/assets/images/letter.svg';
import lockImg from '@/assets/images/lock.svg';
import Close from '@/assets/images/Close.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '@/api/login'; // 파일 경로 확인 필요
import { useSetRecoilState } from 'recoil';
import { userIDState } from '@/states/atom';
<<<<<<< HEAD
import Close from '@/assets/images/Close.svg';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
=======

>>>>>>> develop

function LogInModal({ closeModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUserID = useSetRecoilState(userIDState);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await loginUser({ email, password });
      const userID = response.data['result']['user_id'];

      if (userID) {
        setUserID(userID);
        setError('');
        closeModal();
        navigate('/library');
      } else {
        setError('유효하지 않은 아이디입니다.');
      }
    } catch (error) {
      setError('로그인에 실패하였습니다.');
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
<<<<<<< HEAD
    return () => {
      document.body.style.overflow = 'unset';
=======
    setIsModalOpen(true);
    return () => {
      document.body.style.overflow = 'unset';
      setIsModalOpen(false);
>>>>>>> develop
    };
  }, []);

  return (
    <AnimatePresence>
<<<<<<< HEAD
      <motion.div
        className=" z-10 absolute top-[15%] w-screen h-screen"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <button onClick={closeModal}>
          <img className="left-[70%] top-[10%] z-20 absolute" src={Close}></img>
        </button>
        <div className="flex justify-center text-center sm:items-center sm:p-0">
          {/* Modal code starts from the below line */}
          <div className="relative rounded-lg shadow-[0_8px_20px_-8px_rgba(0,0,0,0.2)] transition-all my-8 w-1/2">
            <div className="flex flex-row h-[70vh]">
              <div className="flex flex-col bg-loginBlue basis-1/3">
                <div className="flex basis-2/3 justify-center">
                  <img className="mx-auto min-h-full w-2/3" src={heartImg} alt="heart_character" />
                </div>
                <div className="flex basis-1/3 font-dongle text-white text-9xl justify-center align-bottom">
                  북그북그
                </div>
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
                    <Link to="/library">
                      <motion.button
                        className="w-[11.5rem] text-[1.8rem] font-jua rounded-2xl bg-white py-4 text-3xl leading-7 text-loginBlue mr-2"
=======
      {isModalOpen && (
        <motion.div
          className="z-10 absolute  w-screen h-screen bg-white  bg-opacity-20 "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center text-center sm:items-center sm:p-0">
            <div className="relative rounded-lg shadow-[0_8px_20px_-8px_rgba(0,0,0,0.2)] transition-all my-28 w-2/5">
              <div className="flex flex-row h-[65vh]">
                <div className="flex flex-col bg-loginBlue basis-1/3">
                  <button onClick={closeModal}>
                    <img className="left-[90%] top-[4%] z-20 absolute" src={Close} alt="close_button" />
                  </button>
                  <div className="flex basis-2/3 justify-center">
                    <img className="mx-auto min-h-full w-2/3" src={heartImg} alt="heart_character" />
                  </div>
                  <div className="flex basis-1/3 font-dongle text-white text-8xl justify-center align-bottom">
                    북그북그
                  </div>
                </div>
                <div className="flex flex-col bg-mainColor basis-2/3 h-full">
                  <div className="flex text-white font-jua text-4xl justify-center mt-20 mb-[7vh]">로그인</div>
                  <div className="flex flex-col justify-center">
                    <div className="flex justify-center">
                      <img
                        className="flex mx-auto min-h-full w-8 opacity-50 -mr-16 ml-10"
                        src={letterImg}
                        alt="letter_image"
                      />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="이메일을 입력해주세요"
                        required
                        className="block w-[80%] h-[3.2rem] text-xs rounded-full px-20 py-[18px] border-2 border-shadowGray"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="flex mt-8 mb-[7vh] justify-center">
                      <img
                        className="flex mx-auto min-h-full w-8 opacity-50 -mr-16 ml-10"
                        src={lockImg}
                        alt="lock_image"
                      />
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                        required
                        className="block w-[80%] h-[3.2rem] text-xs rounded-full px-20 py-[18px] border-2 border-shadowGray"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row gap-2 ml-2 justify-center">
                      <motion.button
                        className="w-[9.5rem] h-[3.2rem] text-[1.4rem] font-jua rounded-2xl bg-white py-3.5 text-3xl leading-7 text-loginBlue mr-2"
>>>>>>> develop
                        onClick={handleLogin}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        로그인
                      </motion.button>
<<<<<<< HEAD
                    </Link>
                    <Link to="/signup">
                      <motion.button
                        className="w-[11.5rem] text-[1.8rem] font-jua rounded-2xl bg-loginBlue py-4 text-3xl leading-7 text-white ml-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        회원 가입
                      </motion.button>
                    </Link>
=======
                      <Link to="/signup">
                        <motion.button
                          className="w-[9.5rem] h-[3.2rem] text-[1.4rem] font-jua rounded-2xl bg-loginBlue py-3.5 text-3xl leading-7 text-white ml-2"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          회원 가입
                        </motion.button>
                      </Link>
                    </div>
>>>>>>> develop
                  </div>
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </motion.div>
=======
        </motion.div>
      )}
>>>>>>> develop
    </AnimatePresence>
  );
}

export default LogInModal;
