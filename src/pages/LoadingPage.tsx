import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import bookgif from '@/assets/lottie/bookgif.json';

const LoadingPage = () => {
  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const bookCreationText = '책생성중';

  return (
    <div className="flex justify-center h-screen">
      <Lottie animationData={bookgif} className="w-screen h-100" loop />
      <motion.div className="left-[38%] top-[65%] absolute">
        {bookCreationText.split('').map((char, index) => (
          <motion.p
            key={index}
            className={`text-[150px] font-normal text-white font-dongle absolute `}
            variants={textVariants}
            initial="hidden"
            animate={{
              opacity: [0, 1, 1, 0], // 글자가 나타나고 사라지도록 애니메이션 설정
              transition: { repeat: Infinity, duration: 1.6, delay: index * 1.6 },
            }}
            style={{
              left: `${index * 6}rem`,
              textShadow: '10px 5px 4px rgba(52, 98, 187, 1)',
            }}
          >
            {char}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
};

export default LoadingPage;
