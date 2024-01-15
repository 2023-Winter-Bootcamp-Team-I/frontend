import BackArrow from '@/assets/image/CreateInfo/BackArrow.svg';
import NextButton from '@/assets/image/CreateInfo/NextButton.svg';
import Pencil from '@/assets/image/CreateInfo/Pencil.svg';

const CreateInfoPage = () => {
  return (
    // 왼쪽 오른쪽 전체 div
    <div className="flex w-screen h-screen justify-center items-center">
      {/* 뒤로가는 버튼 */}
      <button>
        <img src={BackArrow} className="px-12 top-[5%] absolute"></img>
      </button>
      {/* 왼쪽 전체 div */}
      <div className="flex flex-col justify-center items-center">
        {/* 이름 div  */}
        <div className="flex flex-col">
          {/* 이름 1 div  */}
          <div className=" h-10rem justify-center items-center flex flex-row bg-[#659AFF] rounded-full">
            <img src={Pencil} className="h-10rem w-1/5 mb-10 "></img>
            <p className="font-[Jua] text-3xl text-white">너의 이름은 뭐야?</p>
          </div>
          {/* 이름 2 div */}
          <div>
            <input
              type="text"
              placeholder="이름 쓰기"
              className="mt-4  px-5 h-[23%] text-3xl font-['Jua'] rounded-full "
            />
          </div>
        </div>
        {/* 성별 div  */}
        <div className="flex flex-col">
          {/* 성별 1 div  */}
          <div className=" flex items-center  flex-row bg-[#659AFF] rounded-full">
            <img src={Pencil} className="w-1/5 mb-10 "></img>
            <p className="font-[Jua] text-3xl text-white">너의 성별은 뭐야?</p>
          </div>
          {/* 성별 2 div */}
          <div>
            <input
              type="text"
              placeholder="이름 쓰기"
              className="mt-4  px-5 h-[23%] text-3xl font-['Jua'] rounded-full "
            />
          </div>
        </div>
        {/* 나이 div  */}
        <div className="flex flex-col">
          {/* 나이 1 div  */}
          <div className=" flex items-center  flex-row bg-[#659AFF] rounded-full">
            <img src={Pencil} className="w-1/5 mb-10 "></img>
            <p className="font-[Jua] text-3xl text-white">너의 이름은 뭐야?</p>
          </div>
          {/* 나이 2 div */}
          <div>
            <input
              type="text"
              placeholder="이름 쓰기"
              className="mt-4  px-5 h-[23%] text-3xl font-['Jua'] rounded-full "
            />
          </div>
        </div>
        {/* 한글 영어 div  */}
        <div className="flex flex-col">
          {/* 한글 영어 1 div  */}
          <div className=" flex items-center  flex-row bg-[#659AFF] rounded-full">
            <img src={Pencil} className="w-1/5 mb-10 "></img>
            <p className="font-[Jua] text-3xl text-white">너의 이름은 뭐야?</p>
          </div>
          {/* 한글 영어 2 div */}
          <div>
            <input
              type="text"
              placeholder="이름 쓰기"
              className="mt-4  px-5 h-[23%] text-3xl font-['Jua'] rounded-full "
            />
          </div>
        </div>
      </div>
      {/* 동화책 묻는 칸 + 동화책 선택 리스트 * */}
      <div>
        <div className=" w-1/2 h-[23%] bg-[#659AFF] rounded-full">
          <img src={Pencil} className="absolute w-[80px] h-[100px] top-[-40px] left-[-10px]"></img>
          <p className=" px-12 py-2 font-jua text-3xl text-white font-jua">무슨 동화책을 고르고싶어?</p>
          <select className="w-1/2 h-[23%] mt-3 font-jua  p-2 text-3xl absolute">
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
