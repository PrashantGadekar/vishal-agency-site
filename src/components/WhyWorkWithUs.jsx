'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const WhyWorkWithUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  // Reasons to work with us - will be replaced with proper images once created by designer
  const reasons = [
    {
      image: '/images/why-work-with-us/growth.png', // placeholder - designer will create this
      title: 'Grow within Months',
      description: 'We help you increase your viewership count within a set period. Our strategic approach ensures consistent growth across platforms.'
    },
    {
      image: '/images/why-work-with-us/custom.png', // placeholder - designer will create this
      title: 'Custom Design',
      description: 'Custom elements built from scratch to cater to your specific needs. Every visual element is designed to match your brand identity.'
    },
    {
      image: '/images/why-work-with-us/proven.png', // placeholder - designer will create this
      title: 'Proven Growth Methods',
      description: 'Elevate your personal brand to new heights with our unique strategies. We implement techniques that have been tested and proven effective.'
    }
    // ,
    // {
    //   image: '/images/why-work-with-us/strategy.png', // placeholder - designer will create this
    //   title: 'Strategic Approach',
    //   description: 'We don\'t just create content; we develop comprehensive strategies aligned with your business goals and target audience expectations.'
    // },
    // {
    //   image: '/images/why-work-with-us/excellence.png', // placeholder - designer will create this
    //   title: 'Creative Excellence',
    //   description: 'Our team of designers and editors brings your vision to life with stunning visuals, professional editing, and captivating storytelling.'
    // },
    // {
    //   image: '/images/why-work-with-us/results.png', // placeholder - designer will create this
    //   title: 'Measurable Results',
    //   description: 'We don\'t just create content; we track performance and provide insights on how your content is helping you achieve your business objectives.'
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section id="why-work-with-us" ref={ref} className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* <p className="text-sm text-blue-400 uppercase tracking-wider mb-4">Our Advantages</p> */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Why Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">With Us</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            We don't just edit, we grow brands.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-10 border border-gray-700/50"
            >
              <div className="flex flex-col items-center text-center">
                {/* Image will be in the middle - placeholder until designer creates them */}
                <div className="relative w-36 h-36 mb-6 mx-auto">
                  {/* Once designer creates images, replace this div with the actual Image component */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full flex items-center justify-center">
                    <div className="text-3xl text-blue-400">
                      {/* Placeholder icon/text until real images are available */}
                      {index === 0 && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                          <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
                          <path d="M13 7h-2v6h6v-2h-4z" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                        </svg>
                      )}
                      {index === 3 && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                          <path d="M11 7h2v6h-2zm0 8h2v2h-2z" />
                        </svg>
                      )}
                      {index === 4 && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm2-10c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-6c-3.31 0-6 2.69-6 6 0 1.66.68 3.15 1.76 4.24l1.42-1.42C8.45 12.09 8 11.11 8 10c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.11-.45 2.09-1.18 2.82l1.42 1.42C17.32 13.15 18 11.66 18 10c0-3.31-2.69-6-6-6z" />
                        </svg>
                      )}
                      {index === 5 && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  {/* Once images are ready, uncomment this code and provide the correct paths */}
                  {/* <Image 
                    src={reason.image}
                    alt={reason.title}
                    fill
                    className="object-contain"
                  /> */}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">{reason.title}</h3>
                <p className="text-gray-300 text-lg max-w-2xl">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-block"
          >
            Start Your Project
          </motion.a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
