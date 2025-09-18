import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NewsletterSignupSection: React.FC = () => {
  console.log('NewsletterSignupSection rendered');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Ensure this section scrolls into view when accessed via anchor link
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#pdf-download') {
      // Wait for component to render, then scroll
      setTimeout(() => {
        const element = document.getElementById('pdf-download');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1000);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted, setting success to true');
    // Just show success immediately - no API call needed
    setIsSuccess(true);
  };

  const resetForm = () => {
    setFirstName('');
    setEmail('');
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <section id="pdf-download" className="py-16 bg-[#444444] border border-[#e6e6e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-green-400 text-6xl mb-4">✅</div>
            <h4 className="text-white text-2xl font-bold mb-2">Thank you{firstName ? `, ${firstName}` : ''}!</h4>
            <p className="text-white text-lg mb-4">Your Retreat Marketing Guide is Here! 🙌</p>
            <p className="text-white mb-6">You're one step closer to marketing your successful retreat!</p>
            <a 
              href="https://drive.google.com/file/d/1BZ9P5OWawV_8XCYiRrws853jz6Om78zI/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#009e9b] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#E09453] transition-colors"
            >
              Download Your FREE Guide
            </a>
            <button 
              onClick={resetForm}
              className="block mx-auto mt-4 text-white text-sm underline hover:no-underline"
            >
              Subscribe another email
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="pdf-download" className="py-16 bg-[#444444] border border-[#e6e6e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white text-2xl sm:text-3xl font-bold mb-3">
            Want to Maximize Your Retreat Marketing Strategy?
          </h3>
          <p className="text-white text-base sm:text-lg">
            Simply leave your email address, and we'll give you the link to download your{' '}
            <span className="font-semibold">FREE Retreat Marketing Guide</span> right away!
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="flex-1 w-full sm:max-w-[200px]">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white text-[#444444] placeholder-[#444444] border-2 border-[#009e9b] rounded-md focus:outline-none focus:ring-2 focus:ring-[#009e9b] focus:border-[#009e9b] transition-all"
              />
            </div>
            <div className="flex-1 w-full sm:max-w-md">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white text-[#444444] placeholder-[#444444] border-2 border-[#009e9b] rounded-md focus:outline-none focus:ring-2 focus:ring-[#009e9b] focus:border-[#009e9b] transition-all"
              />
            </div>
            <div className="w-full sm:w-auto">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#009e9b] hover:bg-[#E09453] text-white font-semibold rounded-md px-6 py-3 transition-colors flex items-center justify-center min-w-[120px]"
              >
                Subscribe
              </button>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-white text-xs sm:text-sm">
              You can unsubscribe anytime. For more details, review our Privacy Policy.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default NewsletterSignupSection;
