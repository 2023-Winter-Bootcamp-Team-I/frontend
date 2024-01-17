import letterImg from '@/assets/images/letter.svg';
import star from '@/assets/images/star.svg';
import Close from '@/assets/images/Close.svg';

function ShareModal({ closeModal }) {
  return (
    <div className=" z-10 absolute top-[15%] w-screen h-screen">
      <div>
        <button onClick={closeModal}>
          <img className="left-[70%] top-[10%] z-20 absolute" src={Close}></img>
        </button>
      </div>
      <div className="flex justify-center text-center sm:items-center sm:p-0">
        {/* Modal code starts from the below line */}
        <div className="relative rounded-lg shadow-[0_8px_20px_-8px_rgba(0,0,0,0.2)] transition-all my-8 w-1/2">
          <div className="flex flex-row h-[70vh]">
            <div className="flex flex-col bg-loginBlue basis-1/3">
              <div className="flex basis-2/3 justify-center">
                <img className="mx-auto min-h-full mt-8 w-5/6" src={star} alt="star_character" />
              </div>
              <div className="flex basis-1/3 font-dongle text-white text-9xl justify-center align-bottom">북그북그</div>
            </div>
            <div className="flex flex-col bg-mainColor basis-2/3 h-full justify-center">
              <div className="flex text-white font-jua text-4xl justify-center mt-10 mb-[7vh]">
                너의 동화책을 공유해봐!
              </div>
              <div className="flex flex-col justify-center ">
                <div className="flex justify-center">
                  <img
                    className="flex mx-auto min-h-full w-12 opacity-50 -mr-20 ml-10"
                    src={letterImg}
                    alt="letter_image"
                  />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="이메일을 입력해주세요"
                    required
                    className="block w-[80%] h-[4.2rem] text-xl rounded-full px-24 py-[18px] border-2 border-shadowGray"
                  />
                </div>
                <div className="flex  mb-[7vh] justify-center"></div>
                <div className="flex flex-row gap-2 ml-2 justify-center">
                  <button className="w-[11.5rem] text-[1.8rem] font-jua rounded-2xl bg-loginBlue py-4 text-3xl leading-7 text-white ml-2">
                    공유하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareModal;
