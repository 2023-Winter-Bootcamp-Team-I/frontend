import Robot from '@/assets/image/StoryChoice/Robot.svg';

const StoryChoiceModal = () => {
  return (
    // 배경 뿌옇게
    <div className="flex flex-col bg-white bg-opacity-70 w-screen h-screen z-10">
      <div className=" flex flex-col mx-auto my-0 w-[75rem] z-5">
        {/* 로봇 이미지 + 멘트  */}
        <div className="flex flex-row justify-center items-center gap-8 -ml-28 -mt-3 z-50">
          <img src={Robot} className="w-[12%] mt-3 z-40"></img>
          <div className="font-dongle font-medium text-8xl text-[#002875] z-20">다음은 어떤 장면이 펼쳐질까?</div>
        </div>
        {/* 박스 3개 */}
        <div className="flex flex-row justify-center h-full pb-10 z-20">
          {/* 큰 박스 */}
          <div className=" w-[95%] h-[75%] -mt-12 bg-[#E6E6E6] rounded-2xl  flex flex-row justify-center z-20">
            {/* 왼쪽 박스 */}
            <div className="w-2/4 h-[85%]  mt-12 ml-10 mr-10  bg-[#D9D9D9] shadow-[5px_3px_4px_0_rgba(0,0,0,0.25)]  rounded-2xl  z-30"></div>
            {/* 오른쪽 박스 */}
            <div className="w-2/4 h-[85%] mt-12 ml-10 mr-10 bg-[#D9D9D9] shadow-[5px_3px_4px_0_rgba(0,0,0,0.25)] rounded-2xl  z-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryChoiceModal;
