import React from "react";

function SignUp() {
  return (
    <>
      {/* 전체 백그라운드 색 설정 */}
      <div className="flex min-h-full bg-main-color">
        {/* 폼 전체 박스 */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="pencil_character"
            />
            {/* <h2 className="mt-10 text-center text-2xl font-bold text-white text-current-bright-blue-font leading-9 tracking-tight text-gray-900 bright-blue-font"> */}
            <h2 className="mt-10 text-center text-2xl font-bold text-button-blue">
              회원가입을 위해 정보를 입력해주세요
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="username"
                    placeholder="이름"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="이메일"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between"></div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between"></div>
                <div className="mt-2">
                  <input
                    id="password-confirmation"
                    name="password-confirmation"
                    type="password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex flex-row">
                <div className="basis-1/2">
                  <button className="justify-center rounded-full bg-white text-button-blue text-sm font-semibold">
                    가입 취소
                  </button>
                </div>
                <div className="basis-1/2">
                  <button className="justify-center rounded-full bg-button-blue px-10 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">
                    가입 완료
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default SignUp;
