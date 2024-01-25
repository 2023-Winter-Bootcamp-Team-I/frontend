import { BookPage } from '@/api/books';
import React from 'react';
import QuestionMark from '@/assets/image/CreateBook/QuestionMark.svg';

interface ContentPageProps {
  pageData: BookPage;
}

const ContentPage = React.forwardRef(({ pageData }: ContentPageProps) => {
  return (
    <div className="flex justify-center items-center flex-col px-[2.5rem] py-8 bg-[#93C4FF] border-[#7bb6ff] border-y-4 border-l-4 border-solid rounded-2xl">
      <div className="flex flex-col items-center justify-around box-border px-2 w-full h-[776px] bg-white bg-opacity-45  rounded-2xl z-30">
        <img src={QuestionMark} className=" mt-12 h-1/4 z-30" alt="question_mark" />
        <div className="box-border mt-4 h-[55%] w-[95%] bg-[#fdfdfd] bg-opacity-70 rounded-2xl z-30 pb-10 mb-10">
          <div className="flex justify-center">{pageData.ko_content}</div>
        </div>
      </div>
    </div>
  );
});

export default ContentPage;
