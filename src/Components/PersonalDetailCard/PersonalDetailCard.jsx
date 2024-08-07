import React from 'react';
import { PropTypes } from 'prop-types';

function PersonalDetailCard({ title, detail }) {
  return (
    <div className="flex flex-col">
      <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-poppins lg:text-xs">
        {title}
      </p>
      <p className="font-medium font-poppins text-sm md:text-lg lg:text-sm dark:text-gray-300">
        {detail}
      </p>
    </div>
  );
}

PersonalDetailCard.propTypes = {
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
};

export default PersonalDetailCard;
