import Lottie from 'lottie-react';
import book from '@/assets/lottie/loading book.json';
// import bar from '@/assets/lottie/loading bar.json';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/library');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-[#bddaff]">
      <Lottie animationData={book} className="-mt-32" />
      <p className="font-dongle text-white text-[2.5rem] -mt-32">책을 만들고 있어요!</p>
      {/* <Lottie animationData={bar} className="w-[20%] h-[30%] -mt-56" /> */}
    </div>
  );
};

export default LoadingPage;
