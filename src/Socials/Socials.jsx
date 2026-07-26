import React from 'react';
import { motion } from 'framer-motion';
import {
  FiGithub, FiLinkedin, FiMail, FiInstagram, FiYoutube,
} from 'react-icons/fi';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/caffeine-coder', Icon: FiGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhishekhaptech/', Icon: FiLinkedin },
  { label: 'Email', href: 'mailto:abhishek_haptech@outlook.com', Icon: FiMail },
  { label: 'Instagram', href: 'https://www.instagram.com/caffeine_coder', Icon: FiInstagram },
  { label: 'YouTube', href: 'https://www.youtube.com/@CaffeineCoders', Icon: FiYoutube },
];

function Socials() {
  return (
    <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-stretch lg:gap-8">
      <div className="flex items-center gap-6 lg:flex-col lg:gap-5">
        {SOCIAL_LINKS.map(({ label, href, Icon }) => (
          <motion.a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noreferrer"
            className="text-stone-700 hover:text-stone-900"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <Icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-5 lg:w-5" />
          </motion.a>
        ))}
      </div>
      <span className="h-px w-16 bg-stone-300 lg:h-auto lg:w-px" aria-hidden="true" />
    </div>
  );
}

export default Socials;
