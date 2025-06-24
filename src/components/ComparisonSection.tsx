import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const comparisons = [
    { gotoretreats: 'Specializes in wellness industry', others: 'Generic approach' },
    { gotoretreats: 'Custom strategy for each client', others: 'One-size-fits-all solutions' },
    { gotoretreats: 'Ongoing support & optimization', others: 'One-time setup and goodbye' },
    { gotoretreats: 'Story-first marketing approach', others: 'Template-focused content' },
    { gotoretreats: 'Soulful & smart methodology', others: 'Focus on vanity metrics' },
    { gotoretreats: 'Lifetime community access', others: 'No ongoing community' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why We're Different
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Not all marketing agencies are created equal
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* GoToRetreats Column */}
            <div className="bg-teal-50 p-6 sm:p-8">
              <motion.div
                className="text-center mb-6 sm:mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-teal-600 text-white rounded-full font-semibold text-sm sm:text-base">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  GoToRetreats
                </div>
              </motion.div>

              <div className="space-y-3 sm:space-y-4">
                {comparisons.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-white rounded-lg"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    >
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    </motion.div>
                    <p className="text-gray-700 text-sm sm:text-base">{item.gotoretreats}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Other Agencies Column */}
            <div className="bg-red-50 p-6 sm:p-8">
              <motion.div
                className="text-center mb-6 sm:mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-red-500 text-white rounded-full font-semibold text-sm sm:text-base">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Other Agencies
                </div>
              </motion.div>

              <div className="space-y-3 sm:space-y-4">
                {comparisons.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-white rounded-lg"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, -5, 5, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    >
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    </motion.div>
                    <p className="text-gray-700 text-sm sm:text-base">{item.others}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;