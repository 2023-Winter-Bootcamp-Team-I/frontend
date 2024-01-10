import QuestionMark from '@/assets/image/CreateBook/QuestionMark.svg';
const CreateBookPage = () => {
  return (
    // 배경색 살짝 흐리게
    <div className="flex flex-col w-screen h-screen bg-mainColor bg-opacity-15 relative z-5">
      <div className="flex justify-center h-screen">
        <div className=" w-full mx-24 my-3 bg-[#93C4FF] rounded-2xl flex relative">
          <div className="flex items-center justify-center h-full">
            <div className="w-[5px] h-full  left-[50%] absolute bg-[#1A7FD5]" />
          </div>

          <div className=" w-1/2 flex justify-center items-center flex-col">
            <img src={QuestionMark} className="w-1/7 left-[20%]  top-[10%] z-20 absolute  "></img>
            <div className="box-border  basis- 1/2 w-[580px] h-[640px] top-[2.5%] left-[3.5%] absolute bg-white opacity-45 rounded-2xl z-10" />
            <div className="box-border w-[540px] h-[300px] top-[23.5%] left-[9%] relative bg-white z-20 rounded-2xl" />
          </div>
          <div>
            <button className="">
              {/* <img src={NextButton} className="absolute w-[90px] h-[90px] left-[98.5%] top-[45%] z-30 "></img> */}
            </button>
          </div>
          <div className="box-border w-1/6 "></div>
          <div className=" w-1/2  flex justify-center items-center flex-col">
            <img src={QuestionMark} className="w-1/7 left-[70%]  top-[10%] z-20 absolute"></img>
            <div className=" box-border w-[580px] h-[640px] top-[2.5%] left-[53.5%] absolute bg-white opacity-45 rounded-2xl z-10"></div>
            <div className="box-border w-[540px] h-[300px] top-[24.5%] left-[-8%] relative bg-white rounded-2xl z-20"></div>

            <div>
              <button className="">
                {/* <img
                  src={NextButton}
                  className="absolute w-[90px] h-[90px] left-[-4.5%] top-[45%] rotate-180 z-30"
                ></img> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBookPage;
