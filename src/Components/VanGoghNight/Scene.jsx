import React from 'react';
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types, object-curly-newline
function Scene({ title, content, image, align = 'left' }) {
  const isLeft = align === 'left';

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div
        className={`flex flex-col-reverse lg:flex-row ${
          isLeft ? '' : 'lg:flex-row-reverse'
        } items-center gap-10 max-w-6xl w-full`}
      >
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h2 className="text-4xl font-bold text-pink-200 mb-4">
            <span className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-lg text-gray-200 whitespace-pre-line leading-relaxed">
            {content}
          </p>
        </motion.div>

        {/* Image */}
        <motion.img
          src={image}
          alt={title}
          className="rounded-3xl shadow-2xl w-full lg:w-1/2 object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
}

export default Scene;
