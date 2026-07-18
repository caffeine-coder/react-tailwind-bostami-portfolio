import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import {
  SiReact, SiTypescript, SiSpringboot, SiAmazonaws, SiDocker,
  SiRedux, SiTailwindcss, SiTerraform,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { stroke } from '../ease';

const tech = [
  { label: 'React', Icon: SiReact },
  { label: 'TypeScript', Icon: SiTypescript },
  { label: 'Java', Icon: DiJava },
  { label: 'Spring Boot', Icon: SiSpringboot },
  { label: 'AWS', Icon: SiAmazonaws },
  { label: 'Docker', Icon: SiDocker },
  { label: 'Redux', Icon: SiRedux },
  { label: 'Tailwind CSS', Icon: SiTailwindcss },
  { label: 'Terraform', Icon: SiTerraform },
];

function Heading({ children }) {
  return (
    <div className="mb-4">
      <h2 className="font-cormorant text-2xl font-medium text-stone-900 sm:text-3xl">
        {children}
      </h2>
      <svg
        className="mt-1 h-2 w-14 text-stone-400"
        viewBox="0 0 60 8"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d="M2 5 C 15 2, 22 7, 30 4 C 40 1, 48 6, 58 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: stroke }}
        />
      </svg>
    </div>
  );
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};

function TechIcon({ label, Icon, index }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: 'easeOut' }}
    >
      <div className="flex h-10 w-10 items-center justify-center text-stone-700 transition-transform duration-200 ease-out hover:-translate-y-1.5 hover:scale-130 sm:h-12 sm:w-12">
        <Icon className="h-full w-full" />
      </div>
      <span className="font-manrope text-xs font-semibold text-stone-500">{label}</span>
    </motion.div>
  );
}

TechIcon.propTypes = {
  label: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  index: PropTypes.number.isRequired,
};

function AboutDetails() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 sm:px-10">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:divide-x sm:divide-stone-300">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Heading>What drives me</Heading>
          <p className="max-w-sm font-manrope text-base leading-relaxed text-stone-600">
            I like building things. Give me an idea and I'll want to see it
            running by the end of the week. Six years in and that part
            hasn't worn off.
          </p>
        </motion.div>

        <motion.div
          className="sm:pl-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: 0.08, duration: 0.5, ease: 'easeOut' }}
        >
          <Heading>What I do</Heading>
          <p className="max-w-sm font-manrope text-base leading-relaxed text-stone-600">
            Front-end mostly, but I'll go as deep into the stack as a thing
            needs. APIs, infrastructure, whatever's in the way. Right now I
            lead a team doing exactly that.
          </p>
        </motion.div>
      </div>

      <div className="mt-20 border-t border-stone-300 pt-12 sm:mt-24 sm:pt-14">
        <Heading>Tech I reach for</Heading>

        <div className="mt-8 flex flex-wrap items-end justify-center gap-x-8 gap-y-10 sm:mt-10 sm:gap-x-10">
          {tech.map(({ label, Icon }, index) => (
            <TechIcon key={label} label={label} Icon={Icon} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutDetails;
