import React from 'react';
import Lottie from 'lottie-react';
import bookload from '@/assets/lottie/bookload.json';

const LoadingPage = () => {
  return (
    <div className="flex justify-center w-screem h-screen">
      <Lottie animationData={bookload} className="w-[30%]" />
    </div>
  );
};

export default LoadingPage;
