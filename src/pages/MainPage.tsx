import { useState } from 'react';
import LogInModal from '../components/LogInModal';
import bookmark from '@/assets/images/Background/bookmark.svg';
import cutebook from '@/assets/images/Background/bookicon.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userIDState } from '@/states/atom';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);
  const userID = useRecoilValue(userIDState);
  const setUserID = useSetRecoilState(userIDState);

  const text = '북그북그';

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    setUserID(null);
  };

  return (
    <div className="flex flex-col">
      <div className="w-screen h-48 bg-mainBlue relative mt-24 flex items-center justify-center gap-52 ">
        <img src={bookmark} className="w-44 h-56 -ml-[35%] -mt-[3.5rem]" />
        <div className="relative w-auto z-10 h-36">
          {text.split('').map((char, index) => (
            <motion.p
              className={`text-[150px] font-normal text-white font-dongle absolute -top-1 -left-1 z-0`}
              style={{
                left: `${index * 4}rem`,
                textShadow: '10px 5px 4px rgba(52, 98, 187, 1)', // 그림자 스타일
              }}
            >
              {char}
            </motion.p>
          ))}
        </div>
      </div>
      <div className="flex mt-24 mx-auto my-0 gap-8 w-[1100px] h-auto justify-evenly">
        <div className="flex flex-col gap-6 font-light pl-8 text-white w-2/3">
          <motion.div
            className="text-6xl font-[Dongle] mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
          >
            우리 아이가 동화책 주인공이라면?
          </motion.div>
          <motion.div
            className="text-6xl font-[Dongle] mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5, delay: 1.5 }}
          >
            AI와 함께 만드는 우리 아이 동화책
          </motion.div>
          <div className="flex gap-12 h-20 font-[Jua]">
            {userID ? (
              <Link to="/library">
                <button className="w-[13rem] h-[4.5rem] bg-mainBlue pt-2 text-[2rem] rounded-3xl border-[#4695D9] border-b-8 border-r-4 hover:bg-[#179EFF] hover:scale-110">
                  나의 서재
                </button>
              </Link>
            ) : (
              <motion.button
                onClick={openModal}
                className="w-[13rem] h-[4.5rem] bg-mainBlue pt-2 text-[2rem] rounded-3xl border-[#4695D9] border-b-8 border-r-4 hover:bg-[#179EFF]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                로그인
              </motion.button>
            )}
            {userID ? (
              <Link to="/">
                <button
                  className="w-[13rem] h-[4.5rem] bg-[#F1F1F1] text-mainBlue pt-2 text-[2rem] rounded-3xl border-[#AAAAAA] border-b-8 border-r-4 hover:bg-[#ffffff] hover:scale-110"
                  onClick={handleLogout}
                >
                  로그아웃
                </button>
              </Link>
            ) : (
              <Link to="/signup">
                <motion.button
                  className="w-[13rem] h-[4.5rem] bg-[#F1F1F1] text-mainBlue pt-2 text-[2rem] rounded-3xl border-[#AAAAAA] border-b-8 border-r-4 hover:bg-[#ffffff]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  회원가입
                </motion.button>
              </Link>
            )}
          </div>
        </div>
        <motion.img
          src={cutebook}
          className="w-[38rem] h-[25rem] -mt-4 -mr-12"
          animate={{ y: [-40, 10, -40], rotate: [0, 0, 0] }}
          transition={{ duration: 2, repeat: 1, ease: 'easeInOut' }}
        />
      </div>
      {showModal && <LogInModal closeModal={closeModal} />}
    </div>
  );
};

export default MainPage;
