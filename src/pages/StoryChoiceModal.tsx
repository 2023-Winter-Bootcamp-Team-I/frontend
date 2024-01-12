import Robot from '@/assets/image/StoryChoice/Robot.svg';

const StoryChoiceModal = () => {
  return (
    <div>
      <div className="flex w-screen h-screen bg-white bg-opacity-70 absolute z-50">
        <div className=" flex flex-col mx-auto my-0 bg-[#000000] w-[75rem] z-90">
          <div className="w-3/4 h-4/6  left-[13%] top-[25%] shadow bg-[#E6E6E6] rounded-2xl absolute z-60"></div>
          <div className="w-1/3 h-96 left-[15%] top-[31%] bg-[#D9D9D9] shadow-[5px_3px_4px_0_rgba(0,0,0,0.25)]  rounded-2xl absolute z-70"></div>
          <div className="w-1/3 h-96 left-[53%] top-[31%] bg-[#D9D9D9] shadow-[5px_3px_4px_0_rgba(0,0,0,0.25)] rounded-2xl absolute z-70"></div>
          <div>
            <img src={Robot} className="w-44 left-[15%]  top-[0%] z-50 absolute "></img>
            <p className=" left-[30%] top-[8%] font-dongle font-medium text-8xl  text-[#002875] z-50 absolute">
              다음은 어떤 장면이 펼쳐질까?
            </p>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryChoiceModal;
