// CreateTitleModal.tsx

import React, { useState } from 'react';
import { updateTitle, Title } from '@/api/title';
import pencil from '@/assets/images/pencil.svg';
import { useRecoilValue } from 'recoil';
import { bookID } from '@/states/atom';
import { useNavigate } from 'react-router-dom';

interface CreateTitleModalProps {
  title: string;
}

const CreateTitleModal: React.FC<CreateTitleModalProps> = ({ title }) => {
  // 상태 초기화
  const [bookTitle, setBookTitle] = useState(title || '');
  const bookId = useRecoilValue<number>(bookID);
  const navigate = useNavigate();
  // console.log(bookId);

  const handleCreateTitle = async () => {
    try {
      if (bookTitle.trim() !== '') {
        // console.log(bookId);
        const updatedBook: Title = await updateTitle(bookId, bookTitle);

        console.log(updatedBook);

        navigate('/library');
      } else {
        console.warn('책 제목은 비워둘 수 없습니다.');
      }
    } catch (error) {
      // console.error('책 제목 업데이트 중 오류 발생:', error);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[#A9C6FF] bg-opacity-70 relative z-10">
      <div className="w-[50%] h-[60%] bg-radial-gradient z-10 flex flex-col justify-center items-center">
        <div className="bg-white mb-12 bg-opacity-30 mt-16 w-[55rem] h-[16rem] rounded-3xl flex flex-col">
          <div className="flex justify-center items-center gap-4 -ml-8">
            <img src={pencil} className="flex -mt-8 mb-12 scale-150" alt="연필 이미지" />
            <p className="font-jua text-[#659AFF] text-[2.7rem]">이제 책의 제목을 지어볼까?</p>
          </div>
          <div className="flex justify-center">
            <input
              id="title"
              name="title"
              type="text"
              placeholder="백설 공주"
              value={bookTitle}
              onChange={(e) => setBookTitle(e.target.value)}
              className="w-[80%] h-[4.2rem] font-jua text-[#898989] text-3xl rounded-full pl-[2rem] focus:text-[#606060] outline-none"
            />
          </div>
        </div>
        <div className="flex h-20 justify-center items-center font-[Jua]">
          <button
            onClick={handleCreateTitle}
            className="w-[15rem] h-[4.5rem] text-[#EEEEEE] bg-[#659AFF] pt-2 text-[2rem] rounded-3xl border-[#5483DC] border-b-8 border-r-4 hover:bg-[#508dff]"
          >
            책 만들기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTitleModal;
