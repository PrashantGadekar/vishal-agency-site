'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-bg">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(102, 126, 234, 0.3) 0%, transparent 50%)`,
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        {/* Floating Hero Images - positioned relative to content */}
        <motion.div
          className="absolute -top-16 -right-32 md:-top-16 md:-right-32 -top-32 right-2 w-48 h-48 rounded-lg overflow-hidden shadow-lg"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0
          }}
        >
          <img 
            src="/images/Hero/social-media.png" 
            alt="Social Media metrics" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="hidden md:block absolute -top-20 -left-32 w-48 h-48 rounded-lg overflow-hidden shadow-lg"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 3, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        >
          <img 
            src="/images/Hero/likes.png" 
            alt="Likes metrics" 
            className="w-full h-full object-contain"
          />
        </motion.div>

        <motion.div
          className="hidden md:block absolute bottom-6 -left-28 w-36 h-36 rounded-lg overflow-hidden shadow-lg"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 8, -8, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        >
          <img 
            src="/images/Hero/counts.png" 
            alt="Count metrics" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="hidden md:block absolute bottom-6 -right-24 w-42 h-42 rounded-lg overflow-hidden shadow-lg"
          animate={{ 
            y: [0, 18, 0],
            rotate: [0, -6, 6, 0]
          }}
          transition={{ 
            duration: 4.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        >
          <img 
            src="/images/Hero/views.png" 
            alt="Views metrics" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="mt-16">
        <motion.h1
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-none text-center max-w-5xl mx-auto"
          style={{ fontFamily: 'Rude-ExtraBold', marginBottom: '3rem' }}
        >
          STRATEGIC CONTENT PRODUCTION AND{' '}
          <span className="text-blue-400" style={{ fontFamily: 'Rude-ExtraBold' }}>
            DISTRIBUTION
          </span>{' '}
          FOR FOUNDERS & CREATORS
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-base text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed text-center"
          style={{ fontFamily: 'Montreal-Regular' }}
        >
          Turn your knowledge and expertise into a powerful digital presence with high impact video content that increases visibility, 
          builds audience trust, and positions you as the go-to leader in your space.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="https://calendly.com/vishalkale/30min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className=" bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
          >
            Book a call
          </motion.a>
        </motion.div>
        </div>

        {/* Scroll indicator */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        > */}
          {/* <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white border-opacity-30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white bg-opacity-50 rounded-full mt-2"
            />
          </motion.div>
          <p className="text-white text-opacity-50 text-sm mt-2">Scroll Down</p>
        </motion.div> */}
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border border-purple-500 border-opacity-30 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 border border-blue-500 border-opacity-30 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
    </section>
  );
};

export default Hero;
