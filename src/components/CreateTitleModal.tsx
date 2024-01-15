import pencil from '@/assets/images/pencil.svg';

const CreateTitleModal = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[#A9C6FF] bg-opacity-70 relative z-10">
      <div className="w-[60%] h-[60%] bg-radial-gradient z-10 flex flex-col justify-center items-center">
        <div className="bg-white mb-12 bg-opacity-30 mt-16 w-[55rem] h-[16rem] rounded-3xl flex flex-col">
          <div className="flex justify-center items-center gap-4 -ml-8">
            <img src={pencil} className="flex -mt-8 mb-12 scale-150" />
            <p className="font-jua text-[#659AFF] text-[2.7rem] ">완성된 책의 제목을 지어보자!</p>
          </div>
          <div className="flex justify-center">
            <input
              id="title"
              name="title"
              type="text"
              placeholder="백설 공주"
              className="w-[80%] h-[4.2rem] font-jua text-[#898989] text-3xl rounded-full pl-[2rem]"
            />
          </div>
        </div>
        <div className="flex h-20 justify-center items-center font-[Jua]">
          <button className=" w-[17rem] h-[5rem] text-[#EEEEEE] bg-[#659AFF] pt-2 text-[2rem] rounded-3xl border-[#5483DC] border-b-8 border-r-4 hover:bg-[#508dff]">
            책 만들기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTitleModal;
