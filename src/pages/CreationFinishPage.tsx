import barcodeImg from '@/assets/images/barcode.svg';
import QuestionMark from '@/assets/image/CreateBook/QuestionMark.svg';
import { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CreationFinishPage() {
  const book = useRef(null);
  const navigate = useNavigate();
  const navigateToCreateBookPage = () => {
    // setTimeout(() => {
    //   navigate('../title');
    // }, 1000);
  };

  useEffect(() => {
    // Set an interval to flip the page every 5 seconds
    const intervalId = setInterval(() => {
      if (book.current) {
        // Check if the book is not flipping, then flip to the next page
        // if (!book.current.pageFlip().isFlipping) {
        //   book.current.pageFlip().flipNext();
        // }
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Run this effect only once on mount

  return (
    <div className="w-screen h-screen">
      <div className="h-full flex flex-col justify-center items-center">
        <div className="xl:w-9/12 md:w-10/12 sm:w-9/12 w-11/12 md:top-20">
          <div className="flex flex-col h-11/12">
            <HTMLFlipBook
              width={1200}
              height={1300}
              size="stretch"
              minWidth={400}
              maxWidth={1200}
              minHeight={700}
              maxHeight={1180}
              drawShadow={true}
              flippingTime={1000}
              className="book-theme"
              startPage={1}
              usePortrait={true}
              startZIndex={30}
              autoSize={true}
              maxShadowOpacity={0.5}
              showCover={false}
              mobileScrollSupport={true}
              clickEventForward={true}
              useMouseEvents={true}
              swipeDistance={3}
              showPageCorners={true}
              disableFlipByClick={false}
              style={{}}
              ref={book}
              onFlip={navigateToCreateBookPage}
            >
              {[1, 2].map((index) => (
                <div className="flex flex-col justify-center items-center">
                  <Page key={index}></Page>
                </div>
              ))}
              <div className="flex flex-col justify-center items-center">
                <BackCover></BackCover>
              </div>
            </HTMLFlipBook>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreationFinishPage;

const Page = React.forwardRef(() => {
  return (
    <div className="flex flex-col px-[2.5rem] w-full h-full py-8 pr-4 bg-[#93C4FF] border-[#7bb6ff] border-4 border-solid rounded-2xl">
      <div className="flex flex-col items-center justify-around box-border px-2 w-full h-[776px] bg-white bg-opacity-45  rounded-2xl z-30">
        <img src={QuestionMark} className=" mt-12 h-1/4 z-30"></img>
        <div className="box-border mt-4 h-[55%] w-[95%] bg-[#fdfdfd] bg-opacity-70 rounded-2xl z-30 pb-10 mb-10">
          <div className="flex justify-center"></div>
        </div>
      </div>
    </div>
  );
});

const BackCover = React.forwardRef(() => {
  return (
    <div className="flex h-full w-full pr-4">
      <div className="flex bg-bookCoverBack h-full w-full rounded-3xl">
        <div className="flex flex-col bg-bookCoverFront h-full w-full mt-5 z-20 ml-6 -mr-6 rounded-3xl gap-8 items-end ">
          <div className="bg-bookCoverLine h-1/5 w-full mt-[55%]"></div>
          <img className="z-20 w-80 mr-10 mt-4" src={barcodeImg} alt="barcode_image" />
        </div>
      </div>
    </div>
  );
});
