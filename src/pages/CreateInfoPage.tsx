import Pencil from '@/assets/image/CreateInfo/Pencil.svg';

const CreateInfoPage = () => {
  return (
    // 전체 div
    <div className="flex flex-col w-screen h-screen justify-center items-center ">
      {/* 왼쪽 전체 div*/}
      <div className="flex flex-col">
        {/* 이름 div */}
        <div className="w-full h-screen">
          {/* 이름 1 div  */}
          <div className="flex flex-row items-center justify-center">
            <div className=" w-full bg-[#659AFF] rounded-full">
              <img src={Pencil} className=""></img>
              <p className="font-jua text-3xl text-white ">너의 이름은 뭐야?</p>
            </div>
          </div>
          {/* 이름2 div */}
          <div className="w-full">
            <input
              type="text"
              placeholder="이름 쓰기"
              className="w-full h-full font-jua text-3xl rounded-full text-white"
            ></input>
          </div>
        </div>
        {/* 성별1 div */}
        <div className="w-1/4 h-[7%]  bg-[#659AFF] rounded-full flex flex-row items-center">
          <img src={Pencil} className="mb-16"></img>
          <p className="font-jua text-3xl text-white">너의 성별은 뭐야?</p>
        </div>
        {/* 성별2 div */}
        <div className="w-1/4 mt-5  mb-10">
          <button className="w-1/2  bg-white rounded-full text-3xl">남자</button>
          <button className="w-1/2  bg-white rounded-full text-3xl">여자</button>
        </div>
        {/* 나이1 div */}
        <div className="w-1/4 h-[7%]  bg-[#659AFF] rounded-full flex flex-row items-center">
          <img src={Pencil} className="mb-16"></img>
          <p className="font-jua text-3xl text-white">너는 몇 살이야?</p>
        </div>
        {/* 나이2 div */}
        <div className="w-1/4 mt-5  mb-10">
          <input
            type="text"
            placeholder="나이 쓰기"
            className="w-full font-jua text-3xl rounded-full text-white"
          ></input>
        </div>
        {/* 한글영어1 div */}
        <div className="w-1/4 h-[7%]  bg-[#659AFF] rounded-full flex flex-row items-center">
          <img src={Pencil} className="mb-16"></img>
          <p className="font-jua text-3xl text-white">너의 이름은 뭐야?</p>
        </div>
        {/* 한글영어2 div */}
        <div className="w-1/4 mt-5  mb-10">
          <button className="w-1/2  bg-white rounded-full text-3xl">한글(Ko)</button>
          <button className="w-1/2  bg-white rounded-full text-3xl">영어(En)</button>
        </div>
      </div>
    </div>
  );
};

export default CreateInfoPage;
