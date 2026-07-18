import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import WatercolorStroke from './WatercolorStroke';
import { entrance } from '../ease';

function PageHeading({ title, children = null }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: entrance }}
    >
      <h1 className="font-cormorant text-4xl font-medium leading-tight text-stone-900 sm:text-5xl">
        <span className="relative inline-block px-5 py-2">
          <WatercolorStroke />
          <span className="relative">{title}</span>
        </span>
      </h1>
      {children}
    </motion.div>
  );
}

PageHeading.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default PageHeading;
