'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const services = [
    {
      image: '/images/Submit_Icon.png',
      title: 'Submit Your Recordings',
      description: 'Just film your content, send it our way, and we will handle the rest.',
      features: ['Easy file upload', 'Multiple formats supported', 'Secure file handling', 'Quick processing'],
    },
    {
      image: '/images/Polished.png',
      title: 'Polished to Perfection',
      description: 'Our creative team edits with precision, aligning every video to your unique style and brand voice.',
      features: ['Custom brand styling', 'Professional editing', 'Visual storytelling', 'Brand consistency'],
    },
    {
      image: '/images/Submit_Icon.png',
      title: 'Expand Your Reach',
      description: 'Your content is repurposed and distributed across platforms to maximize attention and engagement.',
      features: ['Multi-platform distribution', 'Optimized for each platform', 'Engagement optimization', 'Performance tracking'],
    },
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
    <section id="services" ref={ref} className="section-padding bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">How it works</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            We manage the entire journey from content creation to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              platform ready adaptation.
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 h-full transition-all duration-300 hover:bg-gray-800/40 border border-gray-700/50">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-24 h-24 mb-6 relative"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </motion.div>

                {/* <br/> */}
                
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h3>

                
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                {/* <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.05) }}
                      className="text-xs text-gray-400 flex items-center"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </motion.li>
                  ))}
                </ul> */}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-8 text-lg">
            Ready to transform your content strategy?
          </p>
          <motion.a
            href="https://calendly.com/vishalkale/30min"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
          >
            Book a call
          </motion.a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Services;
