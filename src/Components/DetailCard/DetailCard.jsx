import React from 'react';
import { motion } from 'framer-motion';
import { PropTypes } from 'prop-types';

function DetailCard({
  header, title, description, classname,
}) {
  return (
    <div className={classname}>
      <motion.div
        className=" flex flex-col p-3 "
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {typeof header !== 'string' ? (
          <div className=" text-4xl m-3 mb-4">{header}</div>
        ) : (
          <div className="text-gray-500  m-3 mb-4">
            <p className="font-poppins">{header}</p>
          </div>
        )}
        <h1 className="m-2 font-poppins font-medium text-xl text-gray-700 mb-4">
          {title}
        </h1>
        <p className="m-2 font-poppins font-medium text-gray-500 tracking-normal mb-4">
          {description}
        </p>
      </motion.div>
    </div>
  );
}

DetailCard.propTypes = {
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
};

export default DetailCard;
