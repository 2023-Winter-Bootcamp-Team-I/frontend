import bookmark from '@/assets/images/Background/bookmark.svg';
import cutebook from '@/assets/images/Background/bookicon.svg';

const MainPage = () => {
  return (
    <div className=" flex flex-col">
      <div className="w-screen h-48 bg-mainBlue relative mt-24 flex items-center justify-center gap-52">
        <img src={bookmark} className=" w-44 h-56 -ml-80 -mt-[3.5rem]" />
        <div className="relative w-auto z-10">
          <p className="text-[150px] font-normal text-white absolute -top-1 -left-1 font-dongle z-0">북그북그</p>
          <p className="text-[150px] font-normal text-[#3462BB] font-dongle">북그북그</p>
        </div>
      </div>
      <div className="flex mt-20 mx-auto mr-12 gap-8">
        <div className=" flex flex-col gap-6 font-light text-white mr-12">
          <div className="text-6xl font-[Dongle] mt-8">우리 아이가 동화책 주인공이라면? </div>
          <div className="text-6xl font-[Dongle] mb-8">AI와 함께 만드는 우리 아이 동화책 </div>
          <div className="flex gap-12 h-20 font-[Jua]">
            <button className=" w-[13rem] h-[4.5rem] bg-mainBlue pt-2 text-[2rem] rounded-3xl border-[#4695D9] border-b-8 border-r-4">
              로그인
            </button>
            <button className=" w-[13rem] h-[4.5rem] bg-[#F1F1F1] text-mainBlue pt-2 text-[2rem] rounded-3xl border-[#AAAAAA] border-b-8 border-r-4">
              회원가입
            </button>
          </div>
          {/* <div className="flex gap-16 relative">
            <div className=" w-60 h-16 bg-[#4695D9] absolute bottom-16 left-2 text-4xl rounded-3xl " />
            <div className=" w-60 h-16 bg-[#AAAAAA] text-4xl rounded-3xl " />
          </div> */}
        </div>
        <img src={cutebook} className=" w-2/5 h-1/3 ml-4" />
      </div>
    </div>
  );
};

export default MainPage;
