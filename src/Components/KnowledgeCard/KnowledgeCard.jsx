import React from 'react';
import { PropTypes } from 'prop-types';
import { motion } from 'framer-motion';

function KnowledgeCard({ icon, name }) {
  return (
    <div className="">
      <motion.div
        className="flex items-center justify-center flex-col mt-4 "
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <div className="rounded-full bg-gradient-to-tr to-pink-500 via-indigo-300 from-rose-500 p-0.5 hover:-translate-y-4 hover:transition">
          <div className="bg-white flex items-center p-5 rounded-full justify-center shadow-lg">
            {icon}
          </div>
        </div>
        <div>
          <p className=" text-sm font-poppins text-gray-500 md:text-lg self-center lg:text-sm lg:mt-2">
            {name}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

KnowledgeCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default KnowledgeCard;
