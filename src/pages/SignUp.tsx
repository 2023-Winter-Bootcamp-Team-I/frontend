import pencil from '../assets/images/pencil.svg';

function SignUp() {
  return (
    <>
      {/* 전체 백그라운드 색 설정 */}
      <div className="flex w-screen h-screen bg-main-color">
        <div className="flex flex-1 flex-col justify-center">
          <div className="flex flex-row sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex">
              <img className="flex mx-auto min-h-full w-auto" src={pencil} alt="pencil_character" />
              <div className="">
                <h2 className="flex mt-5 font-jua text-center text-4xl font-bold text-button-blue">회원가입을 위해</h2>
                <h2 className="flex mt-2 font-jua text-center text-4xl font-bold text-button-blue">
                  정보를 입력해주세요
                </h2>
              </div>
            </div>
          </div>

          <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-2">
              <div>
                <div className="mt-8">
                  <input
                    id="username"
                    name="username"
                    type="username"
                    placeholder="이름:"
                    required
                    className="block w-full text-xl rounded-full border-0 px-7 py-4 ring-1 ring-inset"
                  />
                </div>
              </div>
              <div>
                <div className="mt-8">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="이메일:"
                    required
                    className="block w-full text-xl rounded-full border-0 px-7 py-4 ring-3 ring-inset"
                  />
                </div>
              </div>
              <div>
                <div className="mt-8">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="비밀번호:"
                    required
                    className="block w-full text-xl rounded-full border-0 px-7 py-4 ring-1 ring-inset"
                  />
                </div>
              </div>
              <div>
                <div className="mt-8 mb-10">
                  <input
                    id="password-confirmation"
                    name="password-confirmation"
                    type="password"
                    placeholder="비밀번호 확인:"
                    required
                    className="block w-full text-xl rounded-full border-0 px-7 py-4 ring-1 ring-inset"
                  />
                </div>
              </div>

              <div className="flex flex-row">
                <button className="flex basis-1/2 justify-center font-jua rounded-full bg-white px-14 py-2.5 text-lg font-bold leading-6 text-button-blue border-b-2 border-r-2 border-shadowGray mr-2">
                  가입 취소
                </button>
                <button className="flex basis-1/2 justify-center font-jua rounded-full bg-button-blue px-14 py-2.5 text-lg font-bold leading-6 text-white border-b-2 border-r-2 border-shadowGray ml-2">
                  가입 완료
                </button>
              </div>
            </div>
          </div>
        </div>{' '}
      </div>
    </>
  );
}

export default SignUp;
