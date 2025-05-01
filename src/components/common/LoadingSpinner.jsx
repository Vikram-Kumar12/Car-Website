// import { motion } from 'framer-motion';

// const LoadingSpinner = () => {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//         className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
//       />
//     </div>
//   );
// };

// export default LoadingSpinner;

import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20
        }}
        className="text-white text-4xl font-bold flex flex-col items-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border-4 border-t-transparent border-white rounded-full mb-4"
        />
        <span>LuxCars</span>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;