import Pencil from '@/assets/image/CreateInfo/Pencil.svg';

const CreateInfoPage = () => {
  return (
    // 왼쪽 오른쪽 전체 div
    <div className="flex w-[1300px] h-screen justify-center items-center ml-28">
      {/* 뒤로가는 버튼 */}
      <button>
        <img src={BackArrow} className="left-[0%] top-[0%] absolute"></img>
      </button>
      {/* 왼쪽 전체 div */}
      <div className="flex flex-col justify-center items-center mr-10 gap-5">
        {/* 이름 div  */}
        <div className="flex flex-col w-full mb-5 ">
          {/* 이름 1 div  */}
          <div className=" w-[95%] h-12 items-center flex flex-row bg-[#659AFF] rounded-full">
            <img src={Pencil} className="w-1/5 mb-10 "></img>
            <p className="font-[Jua] text-3xl mt-1 text-white pr-10">너의 이름은 뭐야?</p>
          </div>
          {/* 이름 2 div */}
          <div className="flex w-full">
            <input
              type="text"
              placeholder="이름 입력"
              className="h-10 w-[95%] mt-4 px-5 text-2xl font-['Jua'] rounded-full "
            />
          </div>
        </div>
        {/* 성별 div  */}
        <div className="flex flex-col w-full mb-5">
          {/* 성별 1 div  */}
          <div className="w-[95%] h-12 flex items-center  flex-row bg-[#659AFF] rounded-full">
            <img src={Pencil} className="w-1/5 mb-10 "></img>
            <p className="font-[Jua] text-3xl mt-1 text-white pr-10">너의 성별은 뭐야?</p>
          </div>
          {/* 성별 2 div */}
          <div className="flex flex-row w-[95%] gap-5">
            <button className="w-1/2 h-10  bg-white text-[#898989] rounded-full text-2xl mt-3 font-jua">남자</button>
            <button className="w-1/2 h-10 bg-white text-[#898989] rounded-full text-2xl mt-3 font-jua">여자</button>
          </div>
        </div>
        {/* 나이 div  */}
        <div className="flex flex-col w-full mb-5 ">
          {/* 나이 1 div  */}
          <div className="w-[95%] h-12 flex items-center  flex-row bg-[#659AFF] rounded-full">
            <img src={Pencil} className="w-1/5 mb-10 "></img>
            <p className="font-[Jua] text-3xl mt-1 text-white pr-16">너는 몇 살이야?</p>
          </div>
          {/* 나이 2 div */}
          <div className="">
            <input
              type="text"
              placeholder="나이 입력"
              className=" w-[95%] h-10 mt-4  px-5 text-2xl font-['Jua'] rounded-full "
            />
          </div>
        </div>
        {/* 한글 영어 div  */}
        <div className="flex flex-col w-full mb-5 ">
          {/* 한글 영어 1 div  */}
          <div className="w-[95%] h-12  flex items-center  flex-row bg-[#659AFF] rounded-full">
            <img src={Pencil} className="w-1/5 mb-10 "></img>
            <p className="font-[Jua] text-3xl mt-1 text-white pr-16">한글/영어 선택해줘!</p>
          </div>
          {/* 한글 영어 2 div */}
          <div className="flex gap-5 w-[95%]  ">
            <button className=" w-1/2 h-10 bg-white text-[#898989] rounded-full text-2xl mt-3 font-jua">
              한글(Ko)
            </button>
            <button className="w-1/2 h-10 bg-white text-[#898989] rounded-full text-2xl mt-3 font-jua">영어(En)</button>
          </div>
        </div>
      </div>
      {/* 오른쪽 전체 div  */}
      <div className="flex flex-col w-[35%] ml-32">
        {/* 동화책 선택 div 1 */}
        <div className="w-full h-12 justify-center flex items-center  flex-row bg-[#659AFF] rounded-full">
          <img src={Pencil} className="w-1/5 mb-10 "></img>
          <p className="w-full font-jua mt-1 text-3xl text-white">무슨 동화책을 고르고싶어?</p>
        </div>
        {/* 동화책 선택 div 2 */}
        <div className="flex justify-center items-center w-full">
          <select className="w-2/3 mt-3 p-1 font-jua text-3xl">
            <option value="Snow White">백설 공주</option>
            <option value="Three pig">아기 돼지 삼형제</option>
            <option value="Cinderella">신데렐라</option>
            <option value="Heungbu and Nolbu">흥부와 놀부</option>
          </select>
        </div>
      </div>
      {/* 동화 생성 버튼 */}
      <div>
        <button className="동화책 생성 버튼 font-jua">
          <img src={NextButton} className=" absolute left-[91%] top-[40%]"></img>
          <p className="absolute left-[90%] top-[53%] mt-5 font-jua">동화책 생성하러가기</p>
        </button>
      </div>
    </div>
  );
};

export default CreateInfoPage;
