import React from 'react';
import { PropTypes } from 'prop-types';

function SocialCard({ icon, className }) {
  return <div className={`${className} cursor-pointer`}>{icon}</div>;
}

SocialCard.propTypes = {
  className: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default SocialCard;
