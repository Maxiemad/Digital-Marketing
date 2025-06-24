import React from 'react';
import { motion } from 'framer-motion';
import { Check, Globe, Search, Mail, Target, Palette, Users, BookOpen } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    { icon: Target, title: 'Google & Meta Ads', description: 'Targeted advertising campaigns' },
    { icon: Globe, title: 'Website Design', description: 'Beautiful, conversion-focused sites' },
    { icon: Search, title: 'SEO Optimization', description: 'Get found by your ideal clients' },
    { icon: Mail, title: 'Email Marketing', description: 'Nurture leads into loyal clients' },
    { icon: Target, title: 'Marketing Automation', description: 'Work smarter, not harder' },
    { icon: Palette, title: 'Content Strategy', description: 'Engaging, authentic content' },
    { icon: BookOpen, title: 'GoToRetreats Academy', description: 'Exclusive training & resources' },
    { icon: Users, title: 'Lifetime Community', description: 'Ongoing support & networking' },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What You Get
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build a thriving wellness practice
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="group p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="flex items-center mb-4"
                  animate={{
                    y: [0, -2, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  <motion.div
                    className="mr-3"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                  </motion.div>
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-teal-600 transition-colors" />
                </motion.div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors text-sm sm:text-base">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;