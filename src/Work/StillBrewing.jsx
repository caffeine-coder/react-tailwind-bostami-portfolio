import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../PageHeader/PageHeader';
import PageNav from '../NavBar/PageNav';
import MobileNav from '../NavBar/MobileNav';
import Seo from '../Seo/Seo';
import PageHeading from '../PageHeading/PageHeading';
import { entrance } from '../ease';

function StillBrewing() {
  return (
    <div className="flex min-h-svh flex-col">
      <Seo
        title="Work · Caffeine Coder"
        description="Side projects and experiments, currently being written up."
        path="/work"
      />

      <PageHeader />

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-10 px-6 py-16 text-center sm:px-10">
        <PageHeading title="Still brewing.">
          <p className="mx-auto mt-4 max-w-md font-manrope text-base leading-relaxed text-stone-600 sm:text-lg">
            The projects exist. Writing them up properly is taking longer
            than building them did.
          </p>
        </PageHeading>

        <motion.span
          className="-rotate-2 font-neucha text-2xl text-stone-500 sm:text-3xl"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: entrance }}
        >
          give it a minute
        </motion.span>

        <motion.p
          className="font-manrope text-sm text-stone-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
        >
          Meanwhile, there&rsquo;s more about me on the
          {' '}
          <Link
            to="/about"
            className="text-stone-800 underline decoration-stone-400 underline-offset-4 transition-colors duration-200 hover:decoration-stone-800"
          >
            about page
          </Link>
          , or you can just
          {' '}
          <Link
            to="/contact"
            className="text-stone-800 underline decoration-stone-400 underline-offset-4 transition-colors duration-200 hover:decoration-stone-800"
          >
            say hello
          </Link>
          .
        </motion.p>
      </main>

      <PageNav />
      <MobileNav />
    </div>
  );
}

export default StillBrewing;
