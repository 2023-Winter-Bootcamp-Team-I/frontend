import jelly1 from '@/assets/Background/jelly-beans 1.svg';
import jelly2 from '@/assets/Background/jelly-beans 2.svg';
import jelly3 from '@/assets/Background/jelly-beans 3.svg';
import jelly4 from '@/assets/Background/jelly-beans 4.svg';
import jelly5 from '@/assets/Background/jelly-beans 5.svg';
import jelly6 from '@/assets/Background/jelly-beans 6.svg';
import jelly7 from '@/assets/Background/jelly-beans 7.svg';

const BackgroundTemplate = () => {
  return (
    <>
      <div className=" w-screen h-screen bg-mainColor ">
        <img src={jelly1} className="absolute top-0 left-64 w-44 h-28" />
        <img src={jelly2} className="absolute top-16 right-72 w-44 h-28" />
        <img src={jelly3} className="absolute top-0 right-4 w-44 h-28" />
        <img src={jelly4} className="absolute top-80 left-0 w-32 h-36" />
        <img src={jelly5} className="absolute bottom-1/4 right-0 w-68 h-52" />
        <img src={jelly6} className="absolute bottom-0 left-12 w-60 h-40" />
        <img src={jelly7} className="absolute bottom-0 right-40 w-60 h-24" />
      </div>
    </>
  );
};

export default BackgroundTemplate;
