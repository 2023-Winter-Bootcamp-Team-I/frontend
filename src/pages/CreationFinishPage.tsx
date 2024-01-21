import robotImg from '@/assets/images/robot.svg';
import nextButtonImg from '@/assets/images/nextButton.svg';
import barcodeImg from '@/assets/images/barcode.svg';
import QuestionMark from '@/assets/image/CreateBook/QuestionMark.svg';
import { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import React from 'react';
import { useEffect } from 'react';

function CreationFinishPage() {
  const book = useRef(null);

  useEffect(() => {
    // Set an interval to flip the page every 5 seconds
    const intervalId = setInterval(() => {
      if (book.current) {
        // Check if the book is not flipping, then flip to the next page
        if (!book.current.pageFlip().isFlipping) {
          book.current.pageFlip().flipNext();
        }
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Run this effect only once on mount

  return (
    <div className="flex flex-col">
      <div className="w-screen h-screen bg-mainColor bg-opacity-15 relative z-10">
        <div className="flex flex-row h-screen mx-auto my-0 w-full px-10">
          <HTMLFlipBook
            width={1200}
            height={1180}
            size="stretch"
            minWidth={400}
            maxWidth={1200}
            minHeight={600}
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
          >
            {[1, 2].map((index) => (
              <div>
                <Page key={index}></Page>
              </div>
            ))}
            <div className="flex w-full h-[800px] pl-10">
              <BackCover></BackCover>
            </div>
          </HTMLFlipBook>
        </div>
      </div>
    </div>
  );
}

export default CreationFinishPage;

const FrontCover = React.forwardRef(() => {
  return (
    <div className="flex h-full pb-6">
      <div className="flex bg-bookCoverBack h-full w-full rounded-3xl">
        <div className="flex flex-col bg-bookCoverFront h-full w-full mt-6 z-20 -ml-6 mr-6 rounded-3xl justify-center items-center">
          <div className="flex bg-bookCoverTextBox h-[25%] w-4/5 rounded-3xl border-2 border-shadowGray border-solid font-dongle text-[7rem] mb-44 items-center justify-center">
            <div className="p-10 break-keep text-titleColor align-bottom">백설 공주</div>
          </div>
          <div className="bg-bookCoverLine h-1/5 w-full mt-10 mb-44"></div>
        </div>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div
      className="flex justify-center items-center flex-col px-[2.5rem] py-8 bg-[#93C4FF] border-[#7bb6ff] border-y-4 border-l-4 border-solid rounded-2xl"
      ref={ref}
    >
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
    <div className="flex h-full pb-6">
      <div className="flex bg-bookCoverBack h-full w-full rounded-3xl">
        <div className="flex flex-col bg-bookCoverFront h-full w-full mt-6 z-20 ml-6 -mr-6 rounded-3xl gap-8 items-end ">
          <div className="bg-bookCoverLine h-1/5 w-full mt-[55%]"></div>
          <img className="z-20 w-80 mr-10 mt-4" src={barcodeImg} alt="barcode_image" />
        </div>
      </div>
    </div>
  );
});