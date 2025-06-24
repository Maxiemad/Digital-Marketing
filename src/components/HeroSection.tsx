import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden pt-20 sm:pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-teal-100 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-4 sm:right-10 w-12 h-12 sm:w-24 sm:h-24 bg-orange-100 rounded-full opacity-60"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-8 h-8 sm:w-16 sm:h-16 bg-red-100 rounded-full opacity-60"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Column - Text & CTAs */}
        <motion.div
          className="space-y-6 sm:space-y-8 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Finally - Digital Marketing That Gets You{' '}
            <motion.span
              className="text-teal-600"
              animate={{ color: ['#008C8D', '#FF6B35', '#008C8D'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Booked
            </motion.span>
            , Not Burnt Out
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Attract more clients, grow your presence, and stay focused on your practice without burnout.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="https://calendly.com/avi-gotoretreats/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-teal-600 text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-teal-700 transition-all cursor-hover group w-full sm:w-auto"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 140, 141, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="mr-2 group-hover:animate-pulse" size={20} />
              Book Your Free Strategy Call
            </motion.a>

            <motion.button
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-base sm:text-lg hover:border-teal-600 hover:text-teal-600 transition-all cursor-hover group w-full sm:w-auto"
              whileHover={{ 
                scale: 1.05,
                borderColor: '#008C8D',
                color: '#008C8D'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="mr-2 group-hover:animate-pulse" size={20} />
              Watch How It Works
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column - Visual */}
        <motion.div
          className="relative mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative bg-gradient-to-br from-teal-50 to-orange-50 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <motion.div
              className="grid grid-cols-2 gap-3 sm:gap-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-lg">
                <div className="w-full h-2 sm:h-3 bg-teal-200 rounded mb-2"></div>
                <div className="w-3/4 h-1.5 sm:h-2 bg-gray-200 rounded mb-1"></div>
                <div className="w-1/2 h-1.5 sm:h-2 bg-gray-200 rounded"></div>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-lg">
                <div className="w-full h-2 sm:h-3 bg-orange-200 rounded mb-2"></div>
                <div className="w-2/3 h-1.5 sm:h-2 bg-gray-200 rounded mb-1"></div>
                <div className="w-3/4 h-1.5 sm:h-2 bg-gray-200 rounded"></div>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-lg">
                <div className="w-full h-2 sm:h-3 bg-red-200 rounded mb-2"></div>
                <div className="w-1/2 h-1.5 sm:h-2 bg-gray-200 rounded mb-1"></div>
                <div className="w-2/3 h-1.5 sm:h-2 bg-gray-200 rounded"></div>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-lg">
                <div className="w-full h-2 sm:h-3 bg-gray-300 rounded mb-2"></div>
                <div className="w-3/4 h-1.5 sm:h-2 bg-gray-200 rounded mb-1"></div>
                <div className="w-1/3 h-1.5 sm:h-2 bg-gray-200 rounded"></div>
              </div>
            </motion.div>
          </div>

          {/* Floating Icons */}
          <motion.div
            className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 bg-teal-600 rounded-full flex items-center justify-center text-white text-sm sm:text-base"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            ✨
          </motion.div>
          <motion.div
            className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-6 h-6 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs sm:text-sm"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            📈
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;