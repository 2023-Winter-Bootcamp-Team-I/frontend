import BackArrow from '@/assets/image/CreateInfo/BackArrow.svg';
import NextButton from '@/assets/image/CreateInfo/NextButton.svg';
import Pencil from '@/assets/image/CreateInfo/Pencil.svg';

const CreateInfoPage = () => {
  return (
    <div>
      <div className="flex w-screen h-screen bg-main-color">
        {/*이름 묻는 칸*/}
        <div>
          <button>
            <img src={BackArrow} className="px-12 top-[5%] absolute"></img>
          </button>
          <div className="w-[400px] h-[50px] left-[20%] top-[15%] absolute bg-button-blue rounded-full">
            <img src={Pencil} className="absolute w-[80px] h-[100px] top-[-40px] left-[-10px]"></img>
            <p className="px-12 py-2 font-[Jua] text-3xl text-white">너의 이름은 뭐야?</p>
            <input
              type="text"
              placeholder="이름 쓰기"
              className="text-3xl font-['Jua'] rounded-full w-full h-full mt-3"
            />
          </div>
        </div>
        {/* 동화책 선택 칸 */}
        <div>
          <div className="w-[500px] h-[50px] left-[55%] top-[40%] absolute bg-button-blue rounded-full">
            <img src={Pencil} className="absolute w-[80px] h-[100px] top-[-40px] left-[-10px]"></img>
            <p className=" px-12 py-2 font-[serif] text-3xl text-white">무슨 동화책을 고르고싶어?</p>
            <select className="w-[500px] h-[50px]  rounded-none mt-3">
              <option value="Snow White ">백설공주</option>
              <option value="Three pig">아기돼지삼형제</option>
              <option value="Cinderella">신데렐라</option>
              <option value="Heungbu and Nolbu">흥부와놀부</option>
            </select>
          </div>
        </div>
        {/* 동화 생성 버튼 */}
        <div>
          <button className="동화책 생성 버튼">
            <img src={NextButton} className=" absolute left-[92%] top-[40%]"></img>
            <p className="absolute left-[90%] top-[53%] mt-5">동화책 생성하러가기</p>
          </button>
        </div>
        {/* 성별 선택 칸 */}
        <div>
          <div>
            <div className="w-[400px] h-[50px]  left-[20%] top-[35%] absolute bg-button-blue rounded-full">
              <img src={Pencil} className="absolute w-[80px] h-[100px] top-[-40px] left-[-10px]"></img>
              <p className="px-12 py-2 font-[Jua] text-3xl text-white">너의 성별은 뭐야?</p>
              <button className="w-[180px] h-[50px]  bg-white rounded-full text-3xl mt-3">남자</button>
              <button className="w-[180px] h-[50px] -mx-[-40px] absolute bg-white rounded-full text-3xl mt-3">
                여자
              </button>
            </div>
          </div>
        </div>
        {/* 나이 적는 칸 */}
        <div>
          <div className="w-[390px] h-[50px] left-[20%] top-[55%] absolute bg-button-blue rounded-full">
            <img src={Pencil} className="absolute w-[80px] h-[100px] top-[-40px] left-[-10px]"></img>
            <p className="px-12 py-2 font-[Jua] text-3xl text-white">너의 몇살이야?</p>
            <input
              type="text"
              placeholder="나이 쓰기"
              className="text-3xl font-['Jua'] rounded-full w-full h-full mt-3"
            />
          </div>
        </div>
        {/* 한글 영어 선택 */}
        <div>
          <div className="w-[390px] h-[50px] left-[20%]  top-[75%] absolute bg-button-blue rounded-full">
            <img src={Pencil} className="absolute w-[80px] h-[100px] top-[-40px] left-[-10px]"></img>
            <p className="px-12 py-2 font-[Jua] text-3xl text-white">한글 / 영어 선택해줘!</p>

            <button className="w-[180px] h-[50px]  absolute bg-white rounded-full text-3xl mt-3">한글(Ko)</button>
            <button className="w-[180px] h-[50px] -mx-[-210px] absolute bg-white rounded-full text-3xl mt-3">
              영어(En)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateInfoPage;
