import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../PageHeader/PageHeader';
import PageNav from '../NavBar/PageNav';
import MobileNav from '../NavBar/MobileNav';
import ContactForm from './ContactForm';
import Seo from '../Seo/Seo';
import PageHeading from '../PageHeading/PageHeading';
import { entrance } from '../ease';

function Contact() {
  return (
    <div className="flex min-h-svh flex-col">
      <Seo
        title="Contact · Caffeine Coder"
        description="Get in touch about a project, a role, or anything worth talking through over coffee."
        path="/contact"
      />

      <PageHeader />

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-10 px-6 py-16 sm:px-10 sm:py-20">
        <PageHeading title="Say hello.">
          <p className="mt-3 max-w-md font-manrope text-base leading-relaxed text-stone-600 sm:text-lg">
            Got a project, a role, or just want to talk shop over coffee?
            Drop a note below.
          </p>
        </PageHeading>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: entrance }}
        >
          <ContactForm />
        </motion.div>
      </main>

      <PageNav />
      <MobileNav />
    </div>
  );
}

export default Contact;
