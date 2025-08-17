'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // SVG icons for services
  const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-400">
      <path d="M11 14.9861C11 15.5384 11.4477 15.9861 12 15.9861C12.5523 15.9861 13 15.5384 13 14.9861V7.82831L16.2428 11.0711C16.6333 11.4616 17.2665 11.4616 17.657 11.0711C18.0475 10.6806 18.0475 10.0474 17.657 9.65692L12.7071 4.70692C12.3166 4.31639 11.6834 4.31639 11.2929 4.70692L6.34292 9.65692C5.95239 10.0474 5.95239 10.6806 6.34292 11.0711C6.73344 11.4616 7.36661 11.4616 7.75713 11.0711L11 7.82831V14.9861Z" />
      <path d="M4 14C4 13.4477 3.55228 13 3 13C2.44772 13 2 13.4477 2 14V16C2 18.2091 3.79086 20 6 20H18C20.2091 20 22 18.2091 22 16V14C22 13.4477 21.5523 13 21 13C20.4477 13 20 13.4477 20 14V16C20 17.1046 19.1046 18 18 18H6C4.89543 18 4 17.1046 4 16V14Z" />
    </svg>
  );
  
  const EditIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-purple-400">
      <path d="M21.2635 2.29289C20.873 1.90237 20.2398 1.90237 19.8493 2.29289L18.9769 3.16525C17.8618 2.63254 16.4857 2.82181 15.5621 3.74534L4.95549 14.3519L10.6066 20.0031L21.2132 9.39645C22.1367 8.47292 22.326 7.09681 21.7933 5.98175L22.6656 5.10938C23.0562 4.71885 23.0562 4.08569 22.6656 3.69516L21.2635 2.29289ZM16.9955 10.8035L10.6066 17.1924L7.78392 14.3698L14.1728 7.98093L16.9955 10.8035ZM16.0382 5.53475L17.8241 7.32063L19.1425 5.98175C19.5331 5.59123 19.5331 4.95806 19.1425 4.56754C18.752 4.17702 18.1188 4.17702 17.7283 4.56754L16.0382 5.53475Z" />
      <path d="M2 22.9502L4.12171 15.1717L9.77817 20.8289L2 22.9502Z" />
    </svg>
  );
  
  const ShareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-green-400">
      <path d="M15 8C15 10.2091 13.2091 12 11 12C8.79086 12 7 10.2091 7 8C7 5.79086 8.79086 4 11 4C13.2091 4 15 5.79086 15 8Z" />
      <path d="M11 14C6.58172 14 3 17.5817 3 22H19C19 17.5817 15.4183 14 11 14Z" />
      <path d="M18 2V6M16 4H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  const services = [
    {
      icon: <UploadIcon />,
      title: 'Submit Your Recordings',
      description: 'All you need to do is record your content, share the files and we will take care of the rest.',
      features: ['Easy file upload', 'Multiple formats supported', 'Secure file handling', 'Quick processing'],
    },
    {
      icon: <EditIcon />,
      title: 'Your Video, Perfected',
      description: 'Our creative team will craft a unique style, thoughtfully aligned with your brand\'s theme and vision.',
      features: ['Custom brand styling', 'Professional editing', 'Visual storytelling', 'Brand consistency'],
    },
    {
      icon: <ShareIcon />,
      title: 'Maximize Your Reach',
      description: 'Watch as we redistribute your content across platforms, stopping the scroll and leaving viewers in awe.',
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
            We handle everything, from content creation to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              platform adaptation
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-1 gap-12"
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
                  className="w-16 h-16 mb-6 block"
                >
                  {service.icon}
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-8 text-lg">
            Ready to transform your content strategy?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
          >
            Book a discovery call
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
