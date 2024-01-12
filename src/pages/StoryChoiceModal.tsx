import Robot from '@/assets/image/StoryChoice/Robot.svg';

const StoryChoiceModal = () => {
  return (
    // 배경 뿌옇게
    <div className=" flex mx-auto my-0 w-[75rem]">
      <div className="bg-white bg-opacity-70 w-full h-screen z-10">
        {/* 로봇 이미지 + 멘트  */}
        <div className="flex flex-row justify-center">
          <img src={Robot} className="w-1/6 z-20"></img>
          <div className="mt-20 font-dongle font-medium text-8xl text-[#002875] z-20 ">
            다음은 어떤 장면이 펼쳐질까?
          </div>
        </div>
        {/* 박스 3개 */}
        <div className="flex flex-row justify-center h-full">
          {/* 큰 박스 */}
          <div className=" w-5/6 h-[60%] bg-[#E6E6E6] rounded-2xl  flex flex-row justify-center z-20">
            {/* 왼쪽 박스 */}
            <div className="w-2/5 my-5 mx-12 bg-[#D9D9D9] shadow-[5px_3px_4px_0_rgba(0,0,0,0.25)]  rounded-2xl  z-30"></div>
            {/* 오른쪽 박스 */}
            <div className="w-2/5 my-5 mx-12 bg-[#D9D9D9] shadow-[5px_3px_4px_0_rgba(0,0,0,0.25)] rounded-2xl  z-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryChoiceModal;
