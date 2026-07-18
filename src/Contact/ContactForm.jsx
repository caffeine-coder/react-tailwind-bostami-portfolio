import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { stroke } from '../ease';

const emptyForm = { name: '', email: '', message: '' };
const maxChars = 40;
const maxWidthCh = 26;
const clearAfter = 4000;

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

function Blank({
  name, type, placeholder, value, onChange, onFocus, onBlur, focused,
}) {
  const width = Math.min(
    Math.max(placeholder.length, value.length || 0, 4) + 2,
    maxWidthCh,
  );

  return (
    <span className="relative inline-block align-baseline">
      <input
        id={name}
        name={name}
        type={type}
        required
        maxLength={maxChars}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        style={{ width: `${width}ch` }}
        className={`bg-transparent px-1 font-cormorant italic text-stone-900 outline-none placeholder:text-stone-400 placeholder:not-italic ${focused ? 'border-b-2 border-transparent' : 'border-b-2 border-dotted border-stone-400'
        }`}
      />
      <motion.span
        className="pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full bg-stone-800"
        initial={false}
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />
    </span>
  );
}

Blank.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  focused: PropTypes.bool.isRequired,
};

function ContactForm() {
  const [values, setValues] = useState(emptyForm);
  const [status, setStatus] = useState('idle');
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    if (status === 'idle' || status === 'sending') return undefined;

    const timeoutId = setTimeout(() => setStatus('idle'), clearAfter);
    return () => clearTimeout(timeoutId);
  }, [status]);

  const handleChange = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!values.name || !validateEmail(values.email) || !values.message) {
      setStatus('invalid');
      return;
    }

    setStatus('sending');

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_emailId: values.email,
          message: values.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus('sent');
          setValues(emptyForm);
        },
        () => setStatus('error'),
      );
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-14">
      <p className="font-cormorant text-3xl font-medium leading-[1.6] text-stone-900 sm:text-4xl">
        Hi, I'm
        {' '}
        <Blank
          name="name"
          type="text"
          placeholder="your name"
          value={values.name}
          focused={focusedField === 'name'}
          onChange={(event) => handleChange('name', event.target.value)}
          onFocus={() => setFocusedField('name')}
          onBlur={() => setFocusedField(null)}
        />
        {' '}
        and you can reach me at
        {' '}
        <Blank
          name="email"
          type="email"
          placeholder="you@email.com"
          value={values.email}
          focused={focusedField === 'email'}
          onChange={(event) => handleChange('email', event.target.value)}
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
        />
      </p>

      <div className="relative">
        <label htmlFor="message" className="block">
          <span className="font-cormorant text-2xl font-semibold text-stone-800 sm:text-3xl">
            What's on your mind
          </span>
          <textarea
            id="message"
            required
            rows={4}
            value={values.message}
            onChange={(event) => handleChange('message', event.target.value)}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            className="themed-scrollbar mt-4 block w-full resize-none border-none bg-[repeating-linear-gradient(to_bottom,transparent,transparent_2.5rem,#d6d3d1_2.5rem,#d6d3d1_calc(2.5rem+1px))] bg-origin-content px-1 font-cormorant text-2xl leading-10 text-stone-900 outline-none sm:text-3xl"
          />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <motion.button
          type="submit"
          disabled={status === 'sending'}
          className="group relative inline-flex cursor-pointer items-center px-5 py-2 disabled:cursor-wait"
          whileHover="hover"
          whileTap={{ scale: 0.96 }}
          initial="rest"
          animate={{
            y: [0, -6, 0],
            filter: [
              'drop-shadow(0 2px 3px rgba(41,37,36,0.12))',
              'drop-shadow(0 8px 10px rgba(41,37,36,0.22))',
              'drop-shadow(0 2px 3px rgba(41,37,36,0.12))',
            ],
          }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.svg
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
              variants={{
                rest: { pathLength: 1, opacity: 1 },
                hover: { pathLength: [0, 1], opacity: 1 },
              }}
              transition={{ duration: 0.5, ease: stroke }}
            />
          </motion.svg>
          <span className="relative whitespace-nowrap font-neucha text-2xl text-stone-800 sm:text-3xl">
            {status === 'sending' ? 'sending…' : 'send it over'}
          </span>
        </motion.button>

        <AnimatePresence mode="wait">
          {status === 'sent' && (
            <motion.span
              key="sent"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="-rotate-2 font-neucha text-2xl text-stone-500"
            >
              sent! talk soon
            </motion.span>
          )}
          {status === 'invalid' && (
            <motion.span
              key="invalid"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="-rotate-2 font-neucha text-2xl text-stone-500"
            >
              missing something up there
            </motion.span>
          )}
          {status === 'error' && (
            <motion.span
              key="error"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="-rotate-2 font-neucha text-2xl text-stone-500"
            >
              that didn't work, try again?
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

export default ContactForm;
