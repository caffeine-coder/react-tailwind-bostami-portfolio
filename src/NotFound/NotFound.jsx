import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../PageHeader/PageHeader';
import PageNav from '../NavBar/PageNav';
import MobileNav from '../NavBar/MobileNav';
import Seo from '../Seo/Seo';
import { entrance, stroke } from '../ease';

function NotFound() {
  return (
    <div className="flex min-h-svh flex-col">
      <Seo
        title="Page not found · Caffeine Coder"
        description="This page went cold. Head back to the homepage."
        path="/404"
        noindex
      />

      <PageHeader />

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 py-16 text-center sm:px-10">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: entrance }}
        >
          <span className="font-cormorant text-8xl font-medium leading-none text-stone-900 sm:text-9xl">
            404
          </span>

          <motion.svg
            className="pointer-events-none absolute -bottom-2 left-1/2 h-4 w-[112%] -translate-x-1/2"
            viewBox="0 0 200 16"
            fill="none"
            aria-hidden="true"
          >
            <motion.path
              d="M6 10 C 60 3, 120 14, 194 6"
              stroke="#a8a29e"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: stroke }}
            />
          </motion.svg>
        </motion.div>

        <motion.h1
          className="font-cormorant text-3xl font-medium leading-tight text-stone-900 sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: entrance }}
        >
          This one went cold.
        </motion.h1>

        <motion.p
          className="max-w-md font-manrope text-base leading-relaxed text-stone-600 sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: entrance }}
        >
          Either I moved this page, or you typed something hopeful.
          Both happen.
        </motion.p>

        <motion.div
          className="relative mt-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease: entrance }}
        >

          <Link
            to="/"
            className="group relative inline-flex items-center px-6 py-2.5"
          >
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 160 60"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <motion.path
                d="M14 8 C 60 2, 110 3, 148 10 C 156 22, 155 40, 149 51
                   C 105 58, 55 57, 12 52 C 4 40, 5 20, 14 8 Z"
                stroke="#292524"
                strokeWidth="2"
                fill="none"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: stroke }}
              />
            </svg>
            <span className="relative whitespace-nowrap font-neucha text-2xl text-stone-800 transition-colors duration-200 group-hover:text-stone-950 sm:text-3xl">
              back to safety
            </span>
          </Link>
        </motion.div>
      </main>

      <PageNav />
      <MobileNav />
    </div>
  );
}

export default NotFound;
