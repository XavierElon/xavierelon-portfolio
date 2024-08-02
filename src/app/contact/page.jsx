'use client';

import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2">
          <motion.div>{text.split('')}</motion.div>
        </div>
        {/* FORM CONTAINER */}
        <form className="h-1/2 lg:h-full lg:w-1/2"></form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
