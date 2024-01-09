import homeicon from '@/assets/images/Library/Home Page.svg';
import translation from '@/assets/images/Library/Translation.svg';
import thumbnail from '@/assets/images/Library/thumbnail.svg';
import addbook from '@/assets/images/Library/addbook.svg';

const LibraryPage = () => {
  return (
    <>
      <div className="flex flex-col w-screen h-screen bg-mainColor bg-opacity-15 relative z-10">
        <div className=" shadow-[inset_0px_4px_15px_0px_rgba(0,0,0,0.25)] w-screen h-60 bg-mainBlue absolute top-[10.5rem] z-20" />
        <div className="w-[1200px] mx-auto mt-8">
          <div className="flex flex-row justify-between mb-1">
            <img src={homeicon} className="h-[6.5rem] w-[6.5rem] -mt-6 -ml-8" />
            <div className="flex flex-row gap-8 font-dongle text-[2.5rem] -mr-8">
              <button className=" flex gap-2 w-[11rem] h-[3.5rem] bg-white pt-1 pl-1 rounded-3xl border-[#d1d1d1] border-b-8 border-r-4">
                <img src={translation} className="pl-2 -mt-0.5 pt" />
                <p className=" text-[#1D92FF]">한국어</p>
              </button>
              <button className=" w-[11rem] h-[3.5rem] bg-mainBlue pt-1 text-white rounded-3xl border-[#4695D9] border-b-8 border-r-4">
                로그아웃
              </button>
            </div>
          </div>
          <div className="relative z-30">
            <div className="font-dongle text-[120px] text-[#F1F1F1] ml-8 drop-shadow-[2px_3px_0px_rgba(0,0,0,0.35)]">
              나의 도서관
            </div>
            <div className="flex overflow-x-auto overflow-y-hidden m-8 ml-12 gap-16">
              <div className="flex-col w-64 h-[21rem] bg-[#f2f2f2] bg-opacity-65 rounded-2xl mt-4 mb-[2.5rem]">
                <div className="w-64 h-64">
                  <img src={thumbnail} />
                </div>
                <div className="text-[#002050] font-dongle text-[2.2rem] p-4">나 홀로 크리스마스</div>
              </div>
              <div className="flex-col w-64 h-[21rem] bg-[#f2f2f2] bg-opacity-65 rounded-2xl mt-4">
                <div className="w-64 h-64">
                  <img src={thumbnail} />
                </div>
                <div className="text-[#002050] font-dongle text-[2.2rem] p-4">나 홀로 크리스마스</div>
              </div>
              <div className="flex-col w-64 h-[21rem] bg-[#f2f2f2] bg-opacity-65 rounded-2xl mt-4">
                <div className="w-64 h-64">
                  <img src={thumbnail} />
                </div>
                <div className="text-[#002050] font-dongle text-[2.2rem] p-4">나 홀로 크리스마스</div>
              </div>
              <div className="flex-col w-64 h-[21rem] bg-[#f2f2f2] bg-opacity-65 rounded-2xl mt-4">
                <div className="w-64 h-64">
                  <img src={thumbnail} />
                </div>
                <div className="text-[#002050] font-dongle text-[2.2rem] p-4">나 홀로 크리스마스</div>
              </div>
            </div>
          </div>
          <div className=" fixed bottom-10 right-10 flex items-end justify-end w-[7.3rem] h-[7.3rem] rounded-full bg-gradient-to-br from-mainBlue to-[#00bcd4]">
            <div className="mb-3 mr-1">
              <img src={addbook} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LibraryPage;
