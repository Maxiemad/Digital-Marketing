import React from 'react';
import { motion } from 'framer-motion';
import { Target, Globe, Search, Mail, Zap, Palette, BookOpen, Users } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    { 
      icon: Target, 
      title: 'Google & Meta Ads', 
      description: 'Targeted campaigns that convert prospects into clients',
      gradient: 'from-blue-400 to-purple-500'
    },
    { 
      icon: Globe, 
      title: 'Website Design', 
      description: 'Beautiful, conversion-focused sites that book clients',
      gradient: 'from-teal-400 to-cyan-500'
    },
    { 
      icon: Search, 
      title: 'SEO Optimization', 
      description: 'Get found by your ideal clients organically',
      gradient: 'from-green-400 to-emerald-500'
    },
    { 
      icon: Mail, 
      title: 'Email Marketing', 
      description: 'Nurture leads into loyal, long-term clients',
      gradient: 'from-orange-400 to-red-500'
    },
    { 
      icon: Zap, 
      title: 'Marketing Automation', 
      description: 'Work smarter with systems that scale',
      gradient: 'from-yellow-400 to-orange-500'
    },
    { 
      icon: Palette, 
      title: 'Content Strategy', 
      description: 'Engaging, authentic content that resonates',
      gradient: 'from-pink-400 to-rose-500'
    },
    { 
      icon: BookOpen, 
      title: 'GoToRetreats Academy', 
      description: 'Host courses & webinars for free, earn passive income',
      gradient: 'from-indigo-400 to-blue-500'
    },
    { 
      icon: Users, 
      title: 'Lifetime Community', 
      description: 'Build your own community and boost customer lifetime value',
      gradient: 'from-purple-400 to-indigo-500'
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 pointer-events-none" style={{ willChange: 'transform' }}>
        {/* Floating Glow Elements */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ willChange: 'transform' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ willChange: 'transform' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-pink-400/15 to-orange-400/15 rounded-full blur-3xl pointer-events-none"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ willChange: 'transform' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            What You Get
          </motion.h2>
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Everything you need to build a thriving wellness practice
          </motion.p>
        </motion.div>

        {/* 3D Glassmorphism Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="group relative cursor-hover"
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02
                }}
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                  willChange: 'transform',
                }}
              >
                {/* Card Background with Glassmorphism */}
                <div
                  className="relative bg-white/40 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl transition-shadow duration-500 hover:shadow-3xl overflow-hidden"
                  style={{ willChange: 'transform' }}
                >
                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl" />
                  
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with Premium Styling */}
                    <div
                      className="mb-6"
                      style={{ willChange: 'transform' }}
                    >
                      <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-bold text-gray-900 mb-4 text-lg sm:text-xl group-hover:text-gray-800 transition-colors duration-300"
                    >
                      {service.title}
                    </h3>

                    {/* Elegant Divider */}
                    <motion.div
                      className={`w-12 h-0.5 bg-gradient-to-r ${service.gradient} mb-4 rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: 48 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    />

                    {/* Description */}
                    <motion.p
                      className="text-gray-600 text-sm sm:text-base leading-relaxed font-light"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.7 }}
                      viewport={{ once: true }}
                    >
                      {service.description}
                    </motion.p>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500 -z-10`}
                    whileHover={{
                      scale: 1.05,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://crm.gotoretreats.com/book/avi-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-2xl font-semibold text-lg sm:text-xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-hover backdrop-blur-sm border border-white/10"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(20, 184, 166, 0.4)",
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent"
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Start Your Transformation Today
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;