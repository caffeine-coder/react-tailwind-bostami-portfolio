import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { entrance } from '../ease';

const tilts = [-1.2, 0.9, -0.7, 1.3];

function EmptyThumb() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-stone-200/70">
      <svg
        className="h-12 w-12 text-stone-400 sm:h-14 sm:w-14"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M8 14 C 6 11, 9 9, 13 9 L 52 8 C 57 8, 59 11, 58 15
             L 56 48 C 55 53, 51 55, 46 55 L 15 56 C 10 56, 7 53, 7 48 Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M13 44 L 25 31 L 34 40 L 42 33 L 53 44"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="42" cy="21" r="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
      </svg>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const {
    name, year, blurb, stack, live, code, thumb, note,
  } = project;

  const tilt = tilts[index % tilts.length];

  return (
    <motion.article
      className="group relative"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        delay: (index % 2) * 0.08,
        duration: 0.6,
        ease: entrance,
      }}
    >
      {note ? (
        <span className="absolute -top-4 right-4 z-10 -rotate-6 whitespace-nowrap font-neucha text-lg text-stone-500 sm:text-xl">
          {note}
        </span>
      ) : null}

      <div
        style={{ '--tilt': `${tilt}deg` }}
        className="rotate-(--tilt) rounded-sm border border-stone-300/80 bg-[#f7f4f0] p-3 shadow-[0_2px_6px_rgba(41,37,36,0.08)] transition-[transform,box-shadow] duration-300 ease-out group-hover:-translate-y-2 group-hover:rotate-0 group-hover:shadow-[0_14px_28px_rgba(41,37,36,0.16)]"
      >
        <div className="aspect-16/10 w-full overflow-hidden rounded-sm bg-stone-200">
          {thumb ? (
            <img
              src={thumb}
              alt={name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <EmptyThumb />
          )}
        </div>

        <div className="px-1 pb-1 pt-4">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-cormorant text-2xl font-medium text-stone-900 sm:text-3xl">
              {name}
            </h2>
            <span className="shrink-0 font-manrope text-xs text-stone-400">
              {year}
            </span>
          </div>

          <p className="mt-2 font-manrope text-sm leading-relaxed text-stone-600">
            {blurb}
          </p>

          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
            {stack.map((tech) => (
              <li
                key={tech}
                className="font-grotesk text-xs uppercase tracking-wide text-stone-500"
              >
                {tech}
              </li>
            ))}
          </ul>

          {live || code ? (
            <div className="mt-5 flex items-center gap-5 border-t border-stone-200 pt-4">
              {live ? (
                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-neucha text-xl text-stone-700 underline-offset-4 transition-colors duration-200 hover:text-stone-950 hover:underline"
                >
                  have a look
                  <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : null}

              {code ? (
                <a
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-neucha text-xl text-stone-500 underline-offset-4 transition-colors duration-200 hover:text-stone-900 hover:underline"
                >
                  <FiGithub className="h-4 w-4" aria-hidden="true" />
                  the code
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    blurb: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    live: PropTypes.string,
    code: PropTypes.string,
    thumb: PropTypes.string,
    note: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectCard;
