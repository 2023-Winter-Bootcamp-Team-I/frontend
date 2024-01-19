// MainPage.tsx 파일

import React, { useState } from 'react';
import LogInModal from '../components/LogInModal';
import bookmark from '@/assets/images/Background/bookmark.svg';
import cutebook from '@/assets/images/Background/bookicon.svg';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col">
      <div className="w-screen h-48 bg-mainBlue relative mt-24 flex items-center justify-center gap-52">
        <img src={bookmark} className="w-44 h-56 -ml-80 -mt-[3.5rem]" />
        <div className="relative w-auto z-10">
          <p className="text-[150px] font-normal text-white absolute -top-1 -left-1 font-dongle z-0">북그북그</p>
          <p className="text-[150px] font-normal text-[#3462BB] font-dongle">북그북그</p>
        </div>
      </div>
      <div className="flex mt-24 mx-auto my-0 gap-8 w-[1100px] h-auto justify-evenly">
        <div className="flex flex-col gap-6 font-light pl-8 text-white w-2/3">
          <div className="text-6xl font-[Dongle] mt-8">우리 아이가 동화책 주인공이라면? </div>
          <div className="text-6xl font-[Dongle] mb-8">AI와 함께 만드는 우리 아이 동화책 </div>
          <div className="flex gap-12 h-20 font-[Jua]">
            <button
              onClick={openModal}
              className="w-[13rem] h-[4.5rem] bg-mainBlue pt-2 text-[2rem] rounded-3xl border-[#4695D9] border-b-8 border-r-4 hover:bg-[#179EFF] hover:scale-110"
            >
              로그인
            </button>
            <Link to="/signup">
              <button className="w-[13rem] h-[4.5rem] bg-[#F1F1F1] text-mainBlue pt-2 text-[2rem] rounded-3xl border-[#AAAAAA] border-b-8 border-r-4 hover:bg-[#ffffff] hover:scale-110">
                회원가입
              </button>
            </Link>
          </div>
        </div>
        <img src={cutebook} className="w-[38rem] h-[25rem] -mt-4 -mr-12" />
      </div>
      {showModal && <LogInModal closeModal={closeModal} />}
    </div>
  );
};

export default MainPage;
