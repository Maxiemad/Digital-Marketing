import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, FileText } from 'lucide-react';

const FinalCTASection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-teal-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 sm:top-20 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-teal-400/20 rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-12 h-12 sm:w-24 sm:h-24 bg-orange-400/20 rounded-full"
          animate={{
            y: [0, 30, 0],
            x: [0, -25, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              background: 'linear-gradient(45deg, #ffffff, #14b8a6, #f97316, #ffffff)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            You're Here to Help Others.
            <br />
            Let Us Help You Get Seen.
          </motion.h2>
          
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Ready to transform your wellness practice with marketing that actually works?
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Strategy Call CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-teal-600 rounded-full mb-4"
              whileHover={{ 
                scale: 1.1,
                rotate: 360
              }}
              transition={{ duration: 0.6 }}
            >
              <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Book Strategy Call</h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Get a custom roadmap for your practice in 30 minutes
            </p>
            <motion.a
              href="https://calendly.com/avi-gotoretreats/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all cursor-hover text-sm sm:text-base"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(20, 184, 166, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.a>
          </motion.div>

          {/* Free Audit CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full mb-4"
              whileHover={{ 
                scale: 1.1,
                rotate: -360
              }}
              transition={{ duration: 0.6 }}
            >
              <FileText className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Free Marketing Audit</h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Discover what's holding your practice back
            </p>
            <motion.a
              href="https://hello.gotoretreats.com/free-marketing-assessment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all cursor-hover text-sm sm:text-base"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Audit
            </motion.a>
          </motion.div>

          {/* Email Contact */}
          <motion.div
            className="text-center sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gray-600 rounded-full mb-4"
              whileHover={{ 
                scale: 1.1,
                y: -5
              }}
              transition={{ duration: 0.3 }}
            >
              <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Email Us Directly</h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Have questions? We're here to help
            </p>
            <motion.a
              href="mailto:avi@gotoretreats.com"
              className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all cursor-hover text-sm sm:text-base break-all"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(75, 85, 99, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              avi@gotoretreats.com
            </motion.a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center pt-8 sm:pt-12 border-t border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center justify-center mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="/Screenshot_2025-06-08_at_7.05.20_PM-removebg-preview.png" 
              alt="GoToRetreats" 
              className="h-16 sm:h-20 w-auto opacity-90"
            />
          </motion.div>
          <p className="text-gray-400 text-sm sm:text-base">
            © 2025 GoToRetreats. Helping wellness practitioners thrive online.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;