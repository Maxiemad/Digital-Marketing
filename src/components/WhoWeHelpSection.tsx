import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Zap, Music, Dumbbell, Brain, Sparkles, Users, Flower } from 'lucide-react';

const WhoWeHelpSection: React.FC = () => {
  const professions = [
    { icon: Heart, title: 'Life Coaches', description: 'Transform lives with purpose' },
    { icon: Zap, title: 'Reiki Practitioners', description: 'Channel healing energy' },
    { icon: Music, title: 'Sound Healers', description: 'Heal through vibration' },
    { icon: Dumbbell, title: 'Yoga Teachers', description: 'Guide mindful movement' },
    { icon: Brain, title: 'Mindset Mentors', description: 'Shift limiting beliefs' },
    { icon: Sparkles, title: 'Energy Workers', description: 'Balance chakras & auras' },
    { icon: Users, title: 'Wellness Coaches', description: 'Holistic health guidance' },
    { icon: Flower, title: 'Spiritual Guides', description: 'Awaken inner wisdom' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who We Help
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Wellness practitioners who are ready to share their gifts with the world
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {professions.map((profession, index) => {
            const IconComponent = profession.icon;
            return (
              <motion.div
                key={index}
                className="group text-center p-4 sm:p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-hover"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-100 to-orange-100 rounded-full mb-4 group-hover:from-teal-200 group-hover:to-orange-200 transition-all duration-300"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                >
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600 group-hover:text-teal-700 transition-colors" />
                </motion.div>
                
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors text-sm sm:text-base">
                  {profession.title}
                </h3>
                
                <motion.p
                  className="text-gray-600 text-xs sm:text-sm"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  {profession.description}
                </motion.p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Don't see your specialty? We work with all wellness professionals!
          </p>
          <motion.a
            href="https://crm.gotoretreats.com/widget/booking/oRJHFwXLOYf8WFB6X1qN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-teal-600 text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-teal-700 transition-all cursor-hover"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0, 140, 141, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk About Your Practice
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;