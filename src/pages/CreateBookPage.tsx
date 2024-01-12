import QuestionMark from '@/assets/image/CreateBook/QuestionMark.svg';
const CreateBookPage = () => {
  return (
    // 배경 색 흐릿하게
    <div className="w-screen h-screen bg-mainColor bg-opacity-15 relative z-5">
      <div className="flex flex-col justify-center h-screen">
        {/* 가장 큰 박스 */}
        <div className=" h-full mx-24 my-3 bg-[#93C4FF] rounded-2xl z-10">
          <div className="flex relative">
            <div className="flex items-center justify-center h-full">
              {/* 중간 띠 */}
              <div className="w-[5px] h-full  left-[50%] absolute bg-[#1A7FD5]" />
            </div>
            {/* 왼쪽 박스 */}
            <div className=" w-1/2 flex justify-center items-center flex-col">
              <div className="box-border  basis- 1/2 w-[580px] h-[640px] top-[2.5%] left-[3.5%] absolute bg-white opacity-45 rounded-2xl z-20">
                <img src={QuestionMark} className="w-1/7 left-[20%]  top-[10%] z-50 absolute  "></img>
                <div className="box-border w-[540px] h-[300px] top-[23.5%] left-[9%] relative bg-white rounded-2xl z-50" />
              </div>
            </div>
            <div className="box-border w-1/6 "></div>
            {/* 오른쪽 박스 */}
            <div className=" w-1/2  flex justify-center items-center flex-col">
              <div className=" box-border w-[580px] h-[640px] top-[2.5%] left-[53.5%] absolute bg-white opacity-45 rounded-2xl z-20">
                <img src={QuestionMark} className="w-1/7 left-[70%]  top-[10%] z-50 absolute"></img>
                <div className="box-border w-[540px] h-[300px] top-[24.5%] left-[-8%] relative bg-white rounded-2xl z-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBookPage;
