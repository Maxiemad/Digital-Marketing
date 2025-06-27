import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const scrollItems = [
  { content: '/1.png', alt: 'Image 1' },
  { content: '/2.png', alt: 'Image 2' },
  { content: '/3.png', alt: 'Image 3' },
  { content: '/4.png', alt: 'Image 4' },
  { content: '/5.png', alt: 'Image 5' },
  { content: '/6.png', alt: 'Image 6' },
  { content: '/7.png', alt: 'Image 7' },
  { content: '/8.png', alt: 'Image 8' },
  { content: '/9.png', alt: 'Image 9' },
  { content: '/10.png', alt: 'Image 10' },
  { content: '/11.png', alt: 'Image 11' },
  { content: '/12.png', alt: 'Image 12' },
  { content: '/13.png', alt: 'Image 13' },
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