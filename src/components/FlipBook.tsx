import React, { useRef, useEffect, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import axios from 'axios';
import prevButtonImg from '@/assets/images/prevButton.svg';
import nextButtonImg from '@/assets/images/nextButton.svg';
import barcodeImg from '@/assets/images/barcode.svg';
import robotImg from '@/assets/images/robot.svg';

const FlipBook: React.FC<FlipBookProps> = (props) => {
  const [novelStory, setNovelStory] = useState<novelStory[]>();
  const [pageList, setpageList] = useState<[]>();
  const url = 'http://www.techeer-team-a.store:8000/api/v1/mynovels/' + props.novel_id;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  //   const GetData = async () => {
  //     try {
  //       const response = await axios.get<Response>(url, {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Accept: 'application/json',
  //         },
  //       });
  //       setNovelStory(response.data.novelStory);
  //       setpageList(PageList(response.data.novelStory));
  //       console.log(pageList);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  useEffect(() => {
    // GetData();
  }, []);

  // const book = useRef(null);
  return (
    <div className="w-screen h-screen bg-mainColor bg-opacity-15 relative z-10">
      <div className="xl:w-full md:w-10/12 sm:w-9/12 w-11/12 h-4/6 absolute md:top-24 top-24">
        <div className="flex flex-col animate-fade-up animate-once animate-duration-1000 animate-ease-linear">
          <HTMLFlipBook
            width={viewportWidth}
            height={viewportHeight}
            size="stretch"
            minWidth={400}
            maxWidth={650}
            minHeight={600}
            maxHeight={680}
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
            // ref={book}
          >
            <div className="w-full h-full">
              <div className="absolute top-[45%] left-[2%] bg-moveButtonColor rounded-full h-24 w-24 ml-10 z-20">
                <img
                  className="flex w-20 z-20 mx-auto -ml-[0.01px] mt-[0.02px] my-0"
                  src={prevButtonImg}
                  alt="prev_button"
                />
              </div>
              <div className="flex flex-col basis-1/2 h-screen justify-center">
                <div className="flex basis-1/2 justify-center">
                  <img className="flex mx-auto min-h-full z-20 w-60 mt-36" src={robotImg} alt="robot_character" />
                </div>
                <div className="flex flex-col basis-1/2 items-center align-middle mt-24 ml-20 gap-y-10">
                  <div className="flex justify-center font-dongle text-6xl w-2/3 leading-snug break-keep">
                    라푼젤의 주인공이 되어 이야기를 완성시켜봐!
                  </div>
                </div>
              </div>
            </div>
            <div>
              <PageCover>
                <div className="flex flex-row w-[1500px] mx-auto my-0">
                  <div className="flex basis-1/2 h-screen justify-center content-center">
                    <div className="flex bg-bookCoverBack h-[90%] w-[96%] mt-8 -ml-24 rounded-3xl">
                      <div className="flex flex-col bg-bookCoverFront h-full w-full mt-6 z-10 -ml-6 mr-6 rounded-3xl justify-center items-center">
                        <div className="flex bg-bookCoverTextBox h-[25%] w-4/5 rounded-3xl border-2 border-shadowGray border-solid font-dongle text-[7rem] mb-44 items-center justify-center">
                          <div className="p-10 break-keep text-titleColor align-bottom">백설 공주</div>
                        </div>
                        <div className="bg-bookCoverLine h-1/5 w-full mt-10 mb-44"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[45%] right-10 bg-moveButtonColor rounded-full h-24 w-24 z-20 items-end">
                  <img className="w-20 z-20 mx-auto my-0" src={nextButtonImg} alt="next_button" />
                </div>
              </PageCover>
            </div>
            {/* {pageList.map((data, index) => (
                <div key={index}>{data}</div>
              ))} */}
            <div>
              <PageCover>
                <div className="flex flex-row w-[1500px] mx-auto my-0">
                  <div className="flex basis-1/2 h-screen justify-center content-center">
                    <div className="flex bg-bookCoverBack h-[90%] w-[96%] mt-8 ml-24 rounded-3xl">
                      <div className="flex flex-col bg-bookCoverFront h-full w-full mt-6 z-10 ml-6 -mr-6 rounded-3xl justify-center items-end ">
                        <div className="relative bg-bookCoverLine h-1/5 w-full mt-[500px]"></div>
                        <img className="z-20 w-80 mr-10 mt-16" src={barcodeImg} alt="robot_character" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[45%] left-[2%] bg-moveButtonColor rounded-full h-24 w-24 z-20">
                    <img className="flex w-20 z-20 mx-auto mt-[0.02px] my-0" src={prevButtonImg} alt="prev_button" />
                  </div>
                  <div className="flex flex-col basis-1/2 h-screen justify-center">
                    <div className="flex flex-col basis-1/2 items-center align-middle mt-24 ml-20 gap-y-10"></div>
                  </div>
                </div>
              </PageCover>
            </div>
          </HTMLFlipBook>
        </div>
      </div>
    </div>
  );
};

export default FlipBook;

const PageCover: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    // <div
    //   className="h-full p-3 text-left text-black bg-[#ECECEC]"
    //   style={{
    //     boxShadow: 'inset -7px 0 30px -7px rgba(0, 0, 0, 0.4), 10px 10px 4px rgba(0, 0, 0, 0.20)',
    //   }}
    // >
    //   <div className="w-full h-full p-1 color-[#F5F5F5] border-spacing-1">
    //     <div className="w-full h-full flex flex-col justify-center">
    <div>{props.children}</div>
    //     </div>
    //   </div>
    // </div>
  );
};

const Page: React.FC<{ children: React.ReactNode; number: number; left: boolean }> = React.forwardRef(
  (props, ref: React.Ref<HTMLInputElement>) => {
    return (
      <div className="w-full h-full p-1 color-[#785e3a] border-spacing-1" ref={ref}>
        <div className="w-full h-full flex flex-col justify-between">
          <div className="overflow-y-scroll h-11/12 flex-grow-1 text-size-[18px] text-justify mt-6 p-10 lg:text-18 text-15">
            {props.children}
          </div>
          {!props.left && <h2 className="h-auto font-[20px] text-right mr-5 mb-2 ml-5 text-black">{props.number}</h2>}
          {props.left && <h2 className="h-auto font-[20px] text-left mr-5 mb-2 ml-5 text-black">{props.number}</h2>}
        </div>
      </div>
    );
  }
);

interface novelStory {
  id: number;
  page: number;
  image: string;
  content: string;
}

interface Response {
  novel_name: string;
  cover: string;
  novelStory: novelStory[];
}

function PageList(novelStory: novelStory[]) {
  const pageList: any = [];
  novelStory.map((data, index) => {
    for (let i = 0; i < 2; i++) {
      pageList.push(
        i == 1 ? (
          <div
            className="h-full p-3 text-left bg-[#fdfaf7] text-black"
            style={{
              boxShadow: 'inset -7px 0 30px -7px rgba(0, 0, 0, 0.4), 10px 10px 4px rgba(0, 0, 0, 0.20)',
            }}
          >
            <Page key={data.id} number={2 * index + 2} left={false}>
              <div className="h-full">
                {novelStory != null &&
                  data.content.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
              </div>
            </Page>
          </div>
        ) : (
          <div
            className="h-full p-3 text-left bg-[#fdfaf7] text-black"
            style={{
              boxShadow: 'inset 7px 0 36px -7px rgba(0, 0, 0, 0.4), 10px 10px 4px rgba(0, 0, 0, 0.20)',
              borderLeft: '0',
            }}
          >
            <Page key={data.id} number={2 * index + 1} left={true}>
              <div className="flex flex-col items-center">
                <span className="mb-8 text-center text-5xl text-[#744624] font-['Inria']">Chapter {index + 1}</span>
                <img src={data.image} className="w-4/5 h-3/4 flex flex-col items-center object-cover" />
              </div>
            </Page>
          </div>
        )
      );
    }
  });
  console.log(pageList);
  return pageList;
}
