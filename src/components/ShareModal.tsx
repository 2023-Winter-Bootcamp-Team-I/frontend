import React, { useState, ChangeEvent } from 'react';
import letterImg from '@/assets/images/letter.svg';
import star from '@/assets/images/star.svg';
import Close from '@/assets/images/Close.svg';
import { sendEmail } from '@/api/email';

interface ShareModalProps {
  closeModal: () => void;
  bookId: number;
}

const ShareModal: React.FC<ShareModalProps> = ({ closeModal, bookId }) => {
  const [email, setEmail] = useState<string>('');

  // console.log(bookId);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleShareButtonClick = async () => {
    try {
      if (!email) {
        console.error('이메일 주소를 입력해주세요.');
        // 이메일이 비어있을 경우에 대한 처리
        return;
      }
      // console.log(bookId);
      await sendEmail({
        email: email,
        book_id: bookId,
      });
      console.log('이메일 전송 요청이 성공했습니다.');
      // 추가적인 성공 처리 (예: 리다이렉트)
    } catch (error) {
      console.error('이메일 전송 요청이 실패했습니다.', error);
      // 실패 시의 처리
    }
  };

  return (
    <div className="z-10 absolute left-[-13%] top-[-6%] w-screen h-screen">
      <div>
        <button onClick={closeModal}>
          <img className="left-[70%] top-[10%] z-20 absolute" src={Close} alt="close_button" />
        </button>
      </div>
      <div className="flex justify-center text-center sm:items-center sm:p-0">
        <div className="relative rounded-lg shadow-[0_8px_20px_-8px_rgba(0,0,0,0.2)] transition-all my-8 w-1/2">
          <div className="flex flex-row h-[70vh] ">
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
                    value={email}
                    onChange={handleEmailChange}
                    className="block w-[80%] h-[4.2rem] text-xl rounded-full px-24 py-[18px] border-2 border-shadowGray"
                  />
                </div>
                <div className="flex mb-[7vh] justify-center"></div>
                <div className="flex flex-row gap-2 ml-2 justify-center">
                  <button
                    onClick={handleShareButtonClick}
                    className="w-[11.5rem] text-[1.8rem] font-jua rounded-2xl bg-loginBlue py-4 text-3xl leading-7 text-white ml-2"
                  >
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
};

export default ShareModal;
