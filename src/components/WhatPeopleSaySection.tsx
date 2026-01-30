import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const testimonials = [
  {
    src: '/WhatsApp Image 2026-01-30 at 16.10.35.jpeg',
    alt: 'Client testimonial 1',
  },
  {
    src: '/WhatsApp Image 2026-01-30 at 16.10.35 (1).jpeg',
    alt: 'Client testimonial 2',
  },
];

const WhatPeopleSaySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-teal-100 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
          >
            <Users className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600" />
          </motion.div>

          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            What people say after working with us
          </motion.h3>

          <motion.p
            className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Unfiltered feedback from founders, creators, and operators who cared about doing things right.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] sm:gap-[4px] my-8 justify-items-center">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                className="w-full max-w-[360px] sm:max-w-[400px] rounded-xl bg-gray-50 border border-gray-200 overflow-hidden shadow-lg cursor-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto max-h-[420px] object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatPeopleSaySection;
