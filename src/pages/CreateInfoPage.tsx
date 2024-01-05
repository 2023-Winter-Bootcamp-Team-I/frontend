import React from "react";

function CreateInfoPage() {
  return (
    /*배경 색 설정*/
    <div className="w-screen h-screen bg-blue-200">
      {/*이름 묻는 칸*/}
      <div>
        <div className="w-[389px] h-[50px] left-[747px] top-[348px] absolute bg-blue-400 rounded-[100px]" />
        <div className="left-[830px] top-[350px] absolute text-white text-[30px] font-normal font-['Jua']">
          너의 이름은 뭐야?
        </div>
        <input
          type="text"
          placeholder="이름 쓰기"
          className="left-[750px] top-[417px] absolute text-zinc-500 text-3xl font-normal font-['Jua'] rounded-[100px]"
        />
        <div className="left-[787px] top-[417px] absolute text-zinc-500 text-2xl placeholder-normal font-['Jua']"></div>
      </div>
      {/* 동화책 선택 칸 */}
      <div>
        <div className="w-[505px] h-[50px] left-[1225px] top-[417px] absolute bg-blue-400 rounded-[100px]" />
        <div className="left-[1256px] top-[420px] absolute text-white text-[30px] font-normal font-['Jua']">
          무슨 동화책을 고르고싶어?
        </div>
      </div>
      {/* 성별 선택 칸 */}
      <div>
        <div className="w-[390px] h-[50px] left-[748px] top-[528px] absolute bg-blue-400 rounded-[100px]" />
        <div className="left-[802px] top-[531px] absolute text-white text-[30px] font-normal font-['Jua']">
          너의 성별은 뭐야?
        </div>
        <button className="w-[180px] h-[50px] left-[747px] top-[590px] absolute bg-white rounded-[100px] text-3xl">
          남자
        </button>
        <button className="w-[180px] h-[50px] left-[960px] top-[590px] absolute bg-white rounded-[100px]" />
        <div
          className="left-[1017px] top-[600px] absolute text-zinc-500 text-3xl font-normal font-['Jua']"
          text-e
        >
          여자
        </div>
      </div>
      {/* 나이 적는 칸 */}
      <div>
        <div className="w-[390px] h-[50px] left-[748px] top-[728px] absolute bg-blue-400 rounded-[100px]" />
        <div className="left-[800px] top-[721px] absolute text-white text-[30px] font-normal font-['Jua']">
          너는 몇 살이야?
        </div>
        <div className="w-[389px] h-[50px] left-[747px] top-[800px] absolute bg-white rounded-[100px]" />
        <div className="w-[200px] left-[777px] top-[800px] absolute text-zinc-500 text-3xl font-normal font-['Jua']">
          나이 적기
        </div>
      </div>
      {/* 한글 영어 선택 */}
      <div>
        <div className="w-[390px] h-[50px] left-[748px] top-[928px] absolute bg-blue-400 rounded-[100px]" />
        <div className="left-[770px] top-[923px] absolute text-white text-[30px] font-normal font-['Jua']">
          한글 / 영어 선택해줘!
        </div>
        <div className="w-[180px] h-[50px] left-[747px] top-[996px] absolute bg-white rounded-[100px]" />
        <div className="left-[811px] top-[1003px] absolute text-center text-zinc-500 text-[25px] font-black font-['Inter']">
          한글(Ko)
        </div>
        <div className="w-[180px] h-[50px] left-[960px] top-[996px] absolute bg-white rounded-[100px]" />
        <div className="left-[1021px] top-[1003px] absolute text-center text-zinc-500 text-[25px] font-black font-['Inter']">
          영어(En)
        </div>
      </div>
    </div>
  );
}

export default CreateInfoPage;
