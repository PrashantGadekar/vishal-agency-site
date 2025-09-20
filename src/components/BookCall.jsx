'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const BookCall = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  return (
    <section id="book-call" ref={ref} className="min-h-screen flex items-center bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-16 md:p-20 border border-gray-700/50 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-300 mb-12 text-2xl md:text-3xl font-medium"
            style={{ marginBottom: 'revert' }}
          >
            Ready to transform your content strategy?
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 mb-20 text-lg md:text-xl"
            style={{ marginBottom: 'revert' }}
          >
            Book a free discovery call with our team to learn more.
          </motion.p>
          <motion.a
            href="https://calendly.com/vishalkale/30min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{ willChange: 'transform' }} 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-block"
          >
            Book a call
          </motion.a>
        </motion.div>
        
        {/* Logo and Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          {/* Logo */}
          <div className="mb-8">
            <div className="relative w-36 h-36 mx-auto mb-6">
              <Image 
                src="/TheViSocial.png" 
                alt="Company Logo" 
                fill 
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Contact Links */}
          <div className="flex justify-center gap-8">
            <motion.a
              href="mailto:vishalkalee57@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: 'transform' }} 
              className="text-gray-300 hover:text-white transition-colors duration-300 text-lg font-medium"
            >
              Contact
            </motion.a>
            <motion.a
              href="https://www.instagram.com/thevisocial/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: 'transform' }} 
              className="text-gray-300 hover:text-white transition-colors duration-300 text-lg font-medium"
            >
              Instagram
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookCall;
