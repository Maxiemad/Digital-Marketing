import React from 'react';
import { motion } from 'framer-motion';

const PainPointsSection: React.FC = () => {
  const painPoints = [
    "Your content isn't converting to clients",
    "Marketing feels like a second full-time job",
    "You're posting but not seeing results",
    "Your website isn't bringing in leads",
    "Social media is overwhelming and time-consuming",
    "You're competing on price instead of value"
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          You're Not Alone in This Struggle
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-4 bg-white rounded-lg shadow-sm border-l-4 border-red-400"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex-shrink-0 w-2 h-2 bg-red-400 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
              <motion.p
                className="text-gray-700 text-left text-sm sm:text-base"
                whileHover={{ color: '#EF4444' }}
              >
                {point}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg sm:text-xl text-gray-600 mb-6">
            But what if there was a better way?
          </p>
          <motion.div
            className="w-16 sm:w-24 h-1 bg-gradient-to-r from-teal-600 to-orange-500 mx-auto rounded-full"
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsSection;