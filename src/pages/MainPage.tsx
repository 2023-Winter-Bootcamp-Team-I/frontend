import bookmark from '@/assets/images/Background/bookmark.svg';
import cutebook from '@/assets/images/Background/bookicon.svg';

const MainPage = () => {
  return (
    <div className=" flex flex-col">
      <div className="w-screen h-48 bg-mainBlue relative mt-24 flex items-center justify-center gap-52">
        <img src={bookmark} className=" w-44 h-52 -ml-80 -mt-16" />
        <p className="text-9xl font-normal text-white ">북그북그</p>
      </div>
      <div className="flex mt-24 mx-auto mr-12">
        <div className=" flex flex-col gap-8 font-normal text-white">
          <div className="text-5xl mt-8">우리아이가 동화책 주인공이라면? </div>
          <div className="text-5xl mb-8">AI와 함께 만드는 우리아이 동화책 </div>
          <div className="flex gap-16 ml-4">
            <button className=" w-60 h-20 bg-mainBlue text-4xl rounded-3xl border-[#4695D9] border-b-8 border-r-4">
              로그인
            </button>
            <button className=" w-60 h-20 bg-[#F1F1F1] text-mainBlue text-4xl rounded-3xl border-[#AAAAAA] border-b-8 border-r-4">
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
