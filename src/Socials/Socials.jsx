import React from 'react';
import { motion } from 'framer-motion';
import {
  FiGithub, FiLinkedin, FiMail, FiInstagram,
} from 'react-icons/fi';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com', Icon: FiGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: FiLinkedin },
  { label: 'Email', href: 'mailto:abhishek_haptech@outlook.com', Icon: FiMail },
  { label: 'Instagram', href: 'https://instagram.com', Icon: FiInstagram },
];

function Socials() {
  return (
    <div className="flex items-stretch gap-8">
      <div className="flex flex-col items-center gap-8">
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
            <Icon className="h-8 w-8" />
          </motion.a>
        ))}
      </div>
      <span className="w-px bg-stone-300" aria-hidden="true" />
    </div>
  );
}

export default Socials;
