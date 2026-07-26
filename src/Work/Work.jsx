import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../PageHeader/PageHeader';
import PageNav from '../NavBar/PageNav';
import MobileNav from '../NavBar/MobileNav';
import Seo from '../Seo/Seo';
import PageHeading from '../PageHeading/PageHeading';
import ProjectCard from './ProjectCard';
import PROJECTS from './projects';

function Work() {
  return (
    <div className="flex min-h-svh flex-col overflow-x-hidden">
      <Seo
        title="Work · Caffeine Coder"
        description="Things I've built outside of work — side projects, experiments, and the occasional weekend rabbit hole."
        path="/work"
      />

      <PageHeader />

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:px-10 sm:py-20">
        <PageHeading title="Things I've built.">
          <p className="mt-3 max-w-lg font-manrope text-base leading-relaxed text-stone-600 sm:text-lg">
            Side projects and experiments — the stuff I build when nobody
            assigned it to me.
          </p>
        </PageHeading>

        <div className="mx-auto mt-16 grid w-full max-w-md grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 sm:gap-y-20 md:max-w-none md:grid-cols-2 lg:gap-x-10">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.p
          className="mt-20 text-center font-neucha text-2xl text-stone-500 sm:mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          more brewing...
        </motion.p>
      </main>

      <PageNav />
      <MobileNav />
    </div>
  );
}

export default Work;
