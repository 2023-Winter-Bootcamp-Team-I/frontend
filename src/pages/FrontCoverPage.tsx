import React from 'react';
import robotImg from '@/assets/images/robot.svg';
import prevButtonImg from '@/assets/images/prevButton.svg';
import nextButtonImg from '@/assets/images/nextButton.svg';
import QuestionMark from '@/assets/image/CreateBook/QuestionMark.svg';
import barcodeImg from '@/assets/images/barcode.svg';
import { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';

function FrontCoverPage() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const book = useRef(null);

  return (
    <div className="flex flex-col">
      <div className="w-screen h-screen bg-mainColor bg-opacity-15 relative z-10">
        <button
          className="absolute top-[45%] left-[2%] bg-moveButtonColor rounded-full h-24 w-24 ml-10 z-20"
          onClick={() => book.current.pageFlip().flipPrev()}
        >
          <img className="flex w-20 z-20 mx-auto -ml-[0.01px] mt-[0.02px] my-0" src={prevButtonImg} alt="prev_button" />
        </button>
        <div className="flex flex-row h-screen mx-auto my-0 w-full px-10">
          <HTMLFlipBook
            // width={viewportWidth}
            // height={viewportHeight}
            // size="stretch"
            // // minWidth={viewportWidth}
            // // maxWidth={viewportWidth}
            // // minHeight={viewportHeight}
            // // maxHeight={viewportHeight}
            // drawShadow={false}
            // flippingTime={1000}
            // className="book-theme"
            // startPage={1}
            // usePortrait={true}
            // startZIndex={10}
            // autoSize={true}
            // maxShadowOpacity={0.5}
            // showCover={false}
            // mobileScrollSupport={true}
            // clickEventForward={true}
            // useMouseEvents={true}
            // swipeDistance={3}
            // showPageCorners={true}
            // disableFlipByClick={false}
            // style={{}}
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
            {/* <div className="flex flex-col h-screen justify-center align-center"> */}
            <div className="flex flex-col w-full h-full">
              <div className="flex justify-center">
                <img className="flex mx-auto min-h-full z-20 w-60" src={robotImg} alt="robot_character" />
              </div>
              <div className="flex flex-col basis-1/2 items-center align-middle ml-20 gap-y-10">
                <div className="flex justify-center font-dongle text-6xl w-2/3 leading-snug break-keep">
                  라푼젤의 주인공이 되어 이야기를 완성시켜봐!
                </div>
              </div>
            </div>
            <div className="flex w-full h-[800px] pl-10">
              <FrontCover></FrontCover>
            </div>
            {[1, 2].map((index) => (
              <div>
                <Page pageNumber={index}></Page>
              </div>
            ))}
            <div className="flex w-full h-[800px] pl-10">
              {/* <FrontCover></FrontCover> */}
              <BackCover></BackCover>
            </div>
            <div></div>
            {/* <div className="flex flex-col w-full h-full">
              <div className="flex justify-center">
                <img className="flex mx-auto min-h-full z-20 w-60" src={robotImg} alt="robot_character" />
              </div>
              <div className="flex flex-col basis-1/2 items-center align-middle ml-20 gap-y-10">
                <div className="flex justify-center font-dongle text-6xl w-2/3 leading-snug break-keep">
                  라푼젤의 주인공이 되어 이야기를 완성시켜봐!
                </div>
              </div>
            </div> */}
          </HTMLFlipBook>
        </div>
        <button
          className="absolute top-[45%] right-10 bg-moveButtonColor rounded-full h-24 w-24 z-20 items-end"
          onClick={() => book.current.pageFlip().flipNext()}
        >
          <img className="w-20 z-20 mx-auto my-0" src={nextButtonImg} alt="next_button" />
        </button>
      </div>
    </div>
  );
}

export default FrontCoverPage;

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

const Page = React.forwardRef((props, ref) => {
  const { pageNumber } = props;
  return (
    <div
      className="flex justify-center items-center flex-col px-[2.5rem] py-8 bg-[#93C4FF] border-[#7bb6ff] border-y-4 border-l-4 border-solid rounded-2xl"
      ref={ref}
    >
      <div className="flex flex-col items-center justify-around box-border px-2 w-full h-[776px] bg-white bg-opacity-45  rounded-2xl z-30">
        <img src={QuestionMark} className=" mt-12 h-1/4 z-30"></img>
        <div className="box-border mt-4 h-[55%] w-[95%] bg-[#fdfdfd] bg-opacity-70 rounded-2xl z-30 pb-10 mb-10">
          <div className="flex justify-center">{pageNumber} contents blahblahblah</div>
          <div className="flex justify-center">page contents blahblahblah</div>
          <div className="flex justify-center">page contents blahblahblah</div>
          <div className="flex justify-center">page contents blahblahblah</div>
        </div>
      </div>
    </div>

    // <div className="w-screen h-screen bg-white bg-opacity-25 relative z-5">
    //   <div className="absolute top-[45%] left-[2%] bg-moveButtonColor rounded-full h-24 w-24 z-20">
    //     <img className="flex w-20 z-20 mx-auto -ml-[0.01px] mt-[0.02px] my-0" src={prevButtonImg} alt="prev_button" />
    //   </div>
    //   <div className="flex mx-auto my-0 justify-center h-screen w-[1500px]">
    //     {/* 가장 큰 박스 */}
    //     <div className=" w-[1450px] px-0 my-3 bg-[#93C4FF] rounded-2xl z-10">
    //       <div className="flex flex-row w-full h-full">
    //         {/* 왼쪽 박스 */}
    //         <div className=" w-1/2 flex justify-center items-center flex-col px-[2.5rem] py-8 border-[#7bb6ff] border-y-4 border-l-4 border-solid rounded-2xl">
    //           <div className="flex flex-col items-center justify-around box-border px-2 w-full h-full bg-white bg-opacity-45  rounded-2xl z-20">
    //             <img src={QuestionMark} className=" mt-12 h-1/4 z-30"></img>
    //             <div className="box-border mt-4 h-[55%] w-[95%] bg-[#fdfdfd] bg-opacity-70 rounded-2xl z-30">asdf</div>
    //           </div>
    //         </div>
    //         {/* 중간 띠 */}
    //         <div className="w-[4px] mt-4 h-[96.5%] z-30 rounded-l bg-[#7bb6ff]" />
    //         {/* 오른쪽 박스 */}
    //         <div className=" w-1/2 flex justify-center items-center flex-col px-[2.5rem] py-8 border-[#7bb6ff] border-y-4 border-r-4 border-solid rounded-2xl">
    //           <div className="flex flex-col items-center justify-around box-border px-2 w-full h-full bg-white bg-opacity-45  rounded-2xl z-20">
    //             <img src={QuestionMark} className=" mt-12 h-1/4 z-30"></img>
    //             <div className="box-border mt-4 h-[55%] w-[95%] bg-[#fdfdfd] bg-opacity-70 rounded-2xl z-30">asdf</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="absolute top-[45%] right-10 bg-moveButtonColor rounded-full h-24 w-24 z-20 items-end">
    //     <img className="w-20 z-20 mx-auto my-0" src={nextButtonImg} alt="next_button" />
    //   </div>
    // </div>
  );
});

// const PageCover: React.FC<{ children: React.ReactNode }> = (props) => {
//   return <div>{props.children}</div>;
// };
