import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const scrollItems = [
  { content: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', alt: 'Wellness Coach' },
  { content: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', alt: 'Yoga Practice' },
  { content: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', alt: 'Meditation' },
  { content: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', alt: 'Life Coach' },
  { content: 'https://images.pexels.com/photos/4056530/pexels-photo-4056530.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', alt: 'Reiki Healing' },
  { content: 'https://images.pexels.com/photos/4056531/pexels-photo-4056531.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', alt: 'Sound Healing' },
  { content: 'https://images.pexels.com/photos/4056532/pexels-photo-4056532.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', alt: 'Energy Work' },
  { content: 'https://images.pexels.com/photos/4056533/pexels-photo-4056533.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', alt: 'Mindfulness' },
  { content: 'https://images.pexels.com/photos/4056534/pexels-photo-4056534.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', alt: 'Wellness Retreat' },
  { content: 'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', alt: 'Spiritual Guide' },
];

const InfiniteScrollRail: React.FC = () => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [rowWidth, setRowWidth] = useState(0);

  useEffect(() => {
    if (rowRef.current) {
      setRowWidth(rowRef.current.scrollWidth);
    }
  }, []);

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-r from-teal-50 to-orange-50 overflow-hidden">
      <div className="relative w-full overflow-hidden" style={{ height: '240px' }}>
        <motion.div
          className="flex"
          style={{ width: rowWidth ? rowWidth * 2 : 'auto' }}
          animate={rowWidth ? { x: [0, -rowWidth] } : {}}
          transition={rowWidth ? {
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          } : {}}
        >
          {/* First row with correct spacing */}
          <div ref={rowRef} className="flex gap-8 sm:gap-12">
            {scrollItems.map((item, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={item.content}
                  alt={item.alt}
                  className="w-48 h-48 sm:w-56 sm:h-56 rounded-lg object-cover shadow-lg border-2 border-white hover:shadow-xl transition-shadow duration-300"
                  draggable={false}
                />
              </div>
            ))}
          </div>
          {/* Duplicate row for seamless loop */}
          <div className="flex gap-8 sm:gap-12">
            {scrollItems.map((item, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={item.content}
                  alt={item.alt}
                  className="w-48 h-48 sm:w-56 sm:h-56 rounded-lg object-cover shadow-lg border-2 border-white hover:shadow-xl transition-shadow duration-300"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfiniteScrollRail;