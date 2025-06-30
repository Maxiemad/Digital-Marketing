import React from 'react';
import { motion } from 'framer-motion';
const SoulfulMethodology: React.FC = () => {
  const soulfulBlocks = [
    {
      letter: 'S',
      title: 'STORYTELLING',
      description: 'Creative content that emotionally connects audiences.',
      color: 'bg-indigo-600',
      hoverColor: 'hover:bg-indigo-700'
    },
    {
      letter: 'O',
      title: 'ONLINE PRESENCE',
      description: 'Visible on social media, websites, and listings.',
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600'
    },
    {
      letter: 'U',
      title: 'USER TRUST',
      description: 'Reviews, real feedback, and consistent brand honesty.',
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600'
    },
    {
      letter: 'L',
      title: 'LOVE & ENGAGE',
      description: 'Interactive content that builds genuine relationships.',
      color: 'bg-gray-400',
      hoverColor: 'hover:bg-gray-500'
    },
    {
      letter: 'F',
      title: 'FINDABILITY',
      description: 'Rank higher using SEO, maps, and keywords.',
      color: 'bg-gray-600',
      hoverColor: 'hover:bg-gray-700'
    },
    {
      letter: 'U',
      title: 'UNVEIL',
      description: 'Marketing through PR, ads, events, and flyers.',
      color: 'bg-gray-800',
      hoverColor: 'hover:bg-gray-900'
    },
    {
      letter: 'L',
      title: 'LONGEVITY',
      description: 'Grow with communities, courses, and consistency.',
      color: 'bg-teal-600',
      hoverColor: 'hover:bg-teal-700'
    }
  ];


  return (
    <section id="methodology" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The SOULFUL Methodology
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 7-step framework that transforms wellness practitioners into thriving businesses
          </p>
        </motion.div>

        {/* Mobile: Stack vertically, Desktop: 7 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 sm:gap-6 lg:gap-4 mb-8 sm:mb-12">
          {soulfulBlocks.map((block, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Letter Block */}
              <motion.div
                className={`${block.color} ${block.hoverColor} text-white rounded-lg p-4 sm:p-6 h-24 sm:h-32 flex items-center justify-center mb-4 transition-all duration-300 shadow-lg`}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 180,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                }}
                animate={{
                  y: [0, -5, 0]
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }
                }}
              >
                <span className="text-2xl sm:text-4xl font-bold group-hover:hidden">
                  {block.letter}
                </span>
                <div className="hidden group-hover:block text-center transform rotate-y-180">
                  <div className="text-xs sm:text-sm font-semibold mb-1">{block.title}</div>
                </div>
              </motion.div>

              {/* Description */}
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2 text-xs sm:text-sm">
                  {block.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {block.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://hello.gotoretreats.com/free-marketing-assessment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-teal-600 text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-teal-700 transition-all cursor-hover"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0, 140, 141, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            See How SOULFUL Works for You
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SoulfulMethodology;