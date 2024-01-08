import homeicon from '@/assets/images/Library/Home Page.svg';
import translation from '@/assets/images/Library/Translation.svg';

const LibraryPage = () => {
  return (
    <div className="flex flex-col bg-mainColor bg-opacity-30 relative z-10">
      <div className="w-[1100px] mx-auto mt-8">
        <div className="flex flex-row justify-between">
          <img src={homeicon} />
          <div className="flex flex-row gap-8 font-dongle text-[2.5rem] ">
            <button className=" flex gap-2 w-[12rem] h-[4rem] bg-white pt-2 pl-2 rounded-3xl border-[#4695D9] border-b-8 border-r-4">
              <img src={translation} className="pl-2 pb-2" />
              <p className="text-white pt-1">한국어</p>
            </button>
            <button className=" w-[12rem] h-[4rem] bg-mainBlue pt-2 text-white rounded-3xl border-[#4695D9] border-b-8 border-r-4">
              로그아웃
            </button>
          </div>
        </div>
        <div className="bluetape" />
        <div>
          <div>나의 도서관</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
