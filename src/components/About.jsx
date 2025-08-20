'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// SVG Icon Components
const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-400">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor" />
  </svg>
);

const HandshakeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-purple-400">
    <path d="M9.20156 13.8037L9.7687 7.56857C9.82757 6.95362 10.3392 6.5 10.9587 6.5H13.0413C13.6608 6.5 14.1724 6.95362 14.2313 7.56857L14.7984 13.8037C14.9302 15.0485 13.9466 16.144 12.7 16.1987L11.3 16.2582C10.0532 16.3129 9.0699 15.2087 9.20156 13.8037Z" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M19.5 16L19.0895 10.2724C19.0364 9.4365 18.3905 8.76882 17.5537 8.6882V8.6882C16.4394 8.5808 15.4013 9.27428 15.1767 10.3599L14.5999 13.2756" stroke="currentColor" strokeWidth="2" />
    <path d="M4.5 16L4.91052 10.2724C4.96361 9.4365 5.6095 8.76882 6.44635 8.6882V8.6882C7.5606 8.5808 8.59872 9.27428 8.82332 10.3599L9.40008 13.2756" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const BoltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-yellow-400">
    <path d="M13 3V10H19L11 21V14H5L13 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-red-400">
    <path d="M4.5 18.5L8.5 14.5M9.5 6.5L10 7M13.5 3.5C13.5 3.5 13.5 7.5 11.5 9.5C9.5 11.5 7 12 5.5 12.5C5 14 5.5 16.5 6.5 18C8 19 10.5 19.5 12 19C12.5 17.5 13 15 15 13C17 11 21 11 21 11C21 11 21 6 17.5 3C14 0 9.5 6.5 9.5 6.5Z" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// Building Icon
const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-full h-full opacity-50">
    <path d="M11 11V3H5V11H11ZM11 21H5V13H11V21ZM13 21H19V13H13V21ZM13 3V11H19V3H13Z" stroke="white" strokeWidth="2" />
  </svg>
);

// Palette Icon
const PaletteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C13.1046 22 14 21.1046 14 20V18.9752C14 18.4379 14.4379 18 14.9752 18H18C19.1046 18 20 17.1046 20 16C20 15.4477 19.5523 15 19 15H16.5C16.2239 15 16 14.7761 16 14.5V14C16 13.4477 16.4477 13 17 13H19C20.1046 13 21 12.1046 21 11C21 10.4477 20.5523 10 20 10H17.5C17.2239 10 17 9.77614 17 9.5V9C17 8.44772 17.4477 8 18 8H19C20.1046 8 21 7.10457 21 6C21 4.89543 20.1046 4 19 4C19 4 16.9901 4 15.9901 4C15.4378 4 15 4.44772 15 5V7.5C15 7.77614 14.7761 8 14.5 8H9.5C9.22386 8 9 7.77614 9 7.5V5C9 4.44772 8.5523 4 8 4H7C5.89543 4 5 4.89543 5 6C5 7.10457 5.89543 8 7 8H8C8.5523 8 9 8.44772 9 9V9.5C9 9.77614 8.77614 10 8.5 10H4C3.44772 10 3 10.4477 3 11C3 12.1046 3.89543 13 5 13H8.5C8.77614 13 9 13.2239 9 13.5V14C9 14.5523 8.5523 15 8 15H5C3.89543 15 3 15.8954 3 17C3 19.2091 5.00001 20 7 20H12.1889C12.0647 19.6798 12 19.3441 12 19V16.9752C12 16.9026 12.0055 16.8312 12.016 16.7614C12.0095 16.7135 12.0062 16.6649 12.0062 16.6159C12.0062 15.1796 13.1752 14.0109 14.6118 14.0109C14.6159 14.0109 14.62 14.0109 14.624 14.011C14.7154 14.0037 14.809 14 14.9044 14H15C16.6569 14 18 12.6569 18 11C18 9.34315 16.6569 8 15 8H14.9044C14.8313 8 14.7591 8.00234 14.6881 8.00692C13.2088 8.03983 12.0062 9.24748 12.0062 10.7292C12.0062 10.7448 12.0063 10.7604 12.0066 10.7761C12.0022 10.8492 12 10.9239 12 11V14C12 14.3441 12.0647 14.6798 12.1889 15H9C7.00001 15 5 14.2091 5 12C5 11.8954 5.04072 11.7943 5.11429 11.7143L5.11429 11.7143C5.2 11.6143 5.33197 11.5422 5.4859 11.518L5.4859 11.518C5.5324 11.5121 5.5799 11.5092 5.62784 11.5092C6.10764 11.5092 6.52692 11.8267 6.62608 12.2793C6.74254 12.6369 7.0443 13 7.60715 13H7.75C8.44036 13 9 12.4404 9 11.75V8.25C9 7.55964 8.44036 7 7.75 7H7.42857C7.19184 7 7 6.80816 7 6.57143V6.42857C7 6.19184 7.19184 6 7.42857 6H8.75C9.44036 6 10 5.44036 10 4.75V4.5C10 3.67157 10.6716 3 11.5 3H12.5C13.3284 3 14 3.67157 14 4.5V4.75C14 5.44036 14.5596 6 15.25 6H16.5714C16.8082 6 17 6.19184 17 6.42857V6.57143C17 6.80816 16.8082 7 16.5714 7H16.25C15.5596 7 15 7.55964 15 8.25V11.75C15 12.4404 15.5596 13 16.25 13H16.5C16.7761 13 17 13.2239 17 13.5V13.5C17 13.7761 16.7761 14 16.5 14H16.25C15.5596 14 15 14.5596 15 15.25V18.5C15 18.7761 14.7761 19 14.5 19H13.5C13.2239 19 13 18.7761 13 18.5V15.25C13 14.5596 12.4404 14 11.75 14H8.5C8.22386 14 8 13.7761 8 13.5V13.5C8 13.2239 8.22386 13 8.5 13H8.75C9.44036 13 10 12.4404 10 11.75V8.25C10 7.55964 9.44036 7 8.75 7H8.5C8.22386 7 8 6.77614 8 6.5V6.5C8 6.22386 8.22386 6 8.5 6H11.75C12.4404 6 13 5.44036 13 4.75V4.5C13 4.22386 12.7761 4 12.5 4H11.5C11.2239 4 11 4.22386 11 4.5V4.75C11 5.44036 10.4404 6 9.75 6H8.5C8.22386 6 8 6.22386 8 6.5V6.5C8 6.77614 8.22386 7 8.5 7H8.75C9.44036 7 10 7.55964 10 8.25V11.75C10 12.4404 9.44036 13 8.75 13H8.5C8.22386 13 8 13.2239 8 13.5V13.5C8 13.7761 8.22386 14 8.5 14H11.75C12.4404 14 13 14.5596 13 15.25V18.5C13 18.7761 13.2239 19 13.5 19H14.5C14.7761 19 15 18.7761 15 18.5V15.25C15 14.5596 15.5596 14 16.25 14H16.5C16.7761 14 17 13.7761 17 13.5V13.5C17 13.2239 16.7761 13 16.5 13H16.25C15.5596 13 15 12.4404 15 11.75V8.25C15 7.55964 15.5596 7 16.25 7H16.5714C16.8082 7 17 6.80816 17 6.57143V6.42857C17 6.19184 16.8082 6 16.5714 6H15.25C14.5596 6 14 5.44036 14 4.75V4.5C14 3.67157 13.3284 3 12.5 3H11.5C10.6716 3 10 3.67157 10 4.5V4.75C10 5.44036 9.44036 6 8.75 6H7.42857C7.19184 6 7 6.19184 7 6.42857V6.57143C7 6.80816 7.19184 7 7.42857 7H7.75C8.44036 7 9 7.55964 9 8.25V11.75C9 12.4404 8.44036 13 7.75 13H7.60715C7.0443 13 6.74254 12.6369 6.62608 12.2793C6.52692 11.8267 6.10764 11.5092 5.62784 11.5092C5.5799 11.5092 5.5324 11.5121 5.4859 11.518C5.33197 11.5422 5.2 11.6143 5.11429 11.7143C5.04072 11.7943 5 11.8954 5 12C5 14.2091 7.00001 15 9 15H12.1889C12.0647 14.6798 12 14.3441 12 14V11C12 10.9239 12.0022 10.8492 12.0066 10.7761C12.0063 10.7604 12.0062 10.7448 12.0062 10.7292C12.0062 9.24748 13.2088 8.03983 14.6881 8.00692C14.7591 8.00234 14.8313 8 14.9044 8H15C16.6569 8 18 9.34315 18 11C18 12.6569 16.6569 14 15 14H14.9044C14.809 14 14.7154 14.0037 14.624 14.011C14.62 14.0109 14.6159 14.0109 14.6118 14.0109C13.1752 14.0109 12.0062 15.1796 12.0062 16.6159C12.0062 16.6649 12.0095 16.7135 12.016 16.7614C12.0055 16.8312 12 16.9026 12 16.9752V19C12 19.3441 12.0647 19.6798 12.1889 20H7C5.00001 20 3 19.2091 3 17C3 15.8954 3.89543 15 5 15H8C8.5523 15 9 14.5523 9 14V13.5C9 13.2239 8.77614 13 8.5 13H5C3.89543 13 3 12.1046 3 11C3 10.4477 3.44772 10 4 10H8.5C8.77614 10 9 9.77614 9 9.5V9C9 8.44772 8.5523 8 8 8H7C5.89543 8 5 7.10457 5 6C5 4.89543 5.89543 4 7 4H8C8.5523 4 9 4.44772 9 5V7.5C9 7.77614 9.22386 8 9.5 8H14.5C14.7761 8 15 7.77614 15 7.5V5C15 4.44772 15.4378 4 15.9901 4C16.9901 4 19 4 19 4C20.1046 4 21 4.89543 21 6C21 7.10457 20.1046 8 19 8H18C17.4477 8 17 8.44772 17 9V9.5C17 9.77614 17.2239 10 17.5 10H20C20.5523 10 21 10.4477 21 11C21 12.1046 20.1046 13 19 13H17C16.4477 13 16 13.4477 16 14V14.5C16 14.7761 16.2239 15 16.5 15H19C19.5523 15 20 15.4477 20 16C20 17.1046 19.1046 18 18 18H14.9752C14.4379 18 14 18.4379 14 18.9752V20C14 21.1046 13.1046 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2Z" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
);

// Computer Icon
const ComputerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full opacity-70">
    <path d="M20 4H4C2.89543 4 2 4.89543 2 6V15C2 16.1046 2.89543 17 4 17H20C21.1046 17 22 16.1046 22 15V6C22 4.89543 21.1046 4 20 4Z" stroke="white" strokeWidth="2" fill="none" />
    <path d="M8 20H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 17V20" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Mobile Icon
const MobileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full opacity-70">
    <path d="M15 2H9C7.89543 2 7 2.89543 7 4V20C7 21.1046 7.89543 22 9 22H15C16.1046 22 17 21.1046 17 20V4C17 2.89543 16.1046 2 15 2Z" stroke="white" strokeWidth="2" fill="none" />
    <path d="M12 19H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const About = () => {
  const ref = useRef(null);
  // Changed once: false to make the animation trigger each time the section enters the viewport
  const isInView = useInView(ref, { once: false, threshold: 0.1 });
  // State to track animated counter values
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    support: 0
  });

  // Original target values for counters
  const stats = [
    { id: 'projects', number: '100+', label: 'Projects Completed', target: 100 },
    { id: 'clients', number: '50+', label: 'Happy Clients', target: 50 },
    { id: 'experience', number: '5+', label: 'Years Experience', target: 5 },
    { id: 'support', number: '24/7', label: 'Support Available', target: 24 },
  ];

  // Animation for counters when section comes into view
  useEffect(() => {
    let interval;
    let startDelayTimeout;
    
    if (isInView) {
      // Reset counters to 0 when section comes into view
      setCounters({
        projects: 0,
        clients: 0,
        experience: 0,
        support: 0
      });
      
      // Add a 2-second delay before starting the animation
      startDelayTimeout = setTimeout(() => {
        // Duration of the counter animation in ms
        const animationDuration = 2000;
        // Start time of the animation
        const startTime = Date.now();
        
        interval = setInterval(() => {
          const currentTime = Date.now();
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / animationDuration, 1);
          
          // Update all counters based on progress
          setCounters({
            projects: Math.floor(progress * stats[0].target),
            clients: Math.floor(progress * stats[1].target),
            experience: Math.floor(progress * stats[2].target),
            support: Math.floor(progress * stats[3].target)
          });
          
          // Stop the interval when animation is complete
          if (progress === 1) {
            clearInterval(interval);
          }
        }, 16); // ~60fps
      }, 1000); // 1-second delay before animation starts
    } else {
      // Reset counters when section leaves view
      setCounters({
        projects: 0,
        clients: 0,
        experience: 0,
        support: 0
      });
    }
    
    // Clear interval and timeout on component unmount or when section leaves view
    return () => {
      if (interval) clearInterval(interval);
      if (startDelayTimeout) clearTimeout(startDelayTimeout);
    };
  }, [isInView]);

  const values = [
    // {
    //   icon: <TargetIcon />,
    //   title: 'Innovation',
    //   description: 'We constantly push boundaries to deliver cutting-edge solutions.',
    // },
    // {
    //   icon: <HandshakeIcon />,
    //   title: 'Collaboration',
    //   description: 'We work closely with our clients to achieve their vision.',
    // },
    // {
    //   icon: <BoltIcon />,
    //   title: 'Excellence',
    //   description: 'We strive for perfection in every project we undertake.',
    // },
    // {
    //   icon: <RocketIcon />,
    //   title: 'Growth',
    //   description: 'We help businesses scale and reach their full potential.',
    // },
  ];

  return (
    <section id="about" ref={ref} className="section-padding bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Our Agency</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We are a creative digital agency passionate about crafting exceptional 
              digital experiences. Our team of designers, developers, and strategists 
              work together to bring your vision to life.
            </p>

            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              Founded in 2019, we've grown from a small startup to a trusted partner 
              for businesses worldwide. We believe in the power of great design and 
              innovative technology to transform businesses and create meaningful 
              connections with users.
            </p>

            {/* Stats */}
            {/* <div className="grid grid-cols-2 gap-8 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                  >
                    {stat.id === 'projects' ? `${counters.projects}+` : 
                     stat.id === 'clients' ? `${counters.clients}+` : 
                     stat.id === 'experience' ? `${counters.experience}+` : 
                     stat.id === 'support' ? `${counters.support}/7` : stat.number}
                  </motion.div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div> */}

            {/* <motion.a
              href="#portfolio"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              See Our Work
            </motion.a> */}
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Placeholder */}
            {/* <div className="relative glass-effect rounded-2xl overflow-hidden h-96 mb-8"> */}
            <div style={{ marginTop: 'auto' }}>
              {/* <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                <div className="w-16 h-16">
                  <BuildingIcon />
                </div>
              </div> */}
              
              {/* Floating elements */}
              {/* <motion.div
                className="absolute top-4 right-4 w-16 h-16 glass-effect rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-8 h-8">
                  <BoltIcon />
                </div>
              </motion.div> */}
              
              
              {/* <motion.div
                className="absolute bottom-4 left-4 w-12 h-12 glass-effect rounded-full flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-6 h-6">
                  <PaletteIcon />
                </div>
              </motion.div> */}


              {/* Stats here added */}
              {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                  >
                    {stat.id === 'projects' ? `${counters.projects}+` : 
                     stat.id === 'clients' ? `${counters.clients}+` : 
                     stat.id === 'experience' ? `${counters.experience}+` : 
                     stat.id === 'support' ? `${counters.support}/7` : stat.number}
                  </motion.div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
            </div>

            {/* Secondary Images */}
            {/* <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-effect rounded-xl h-32 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center"
              >
                <div className="w-10 h-10">
                  <ComputerIcon />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="glass-effect rounded-xl h-32 bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center"
              >
                <div className="w-10 h-10">
                  <MobileIcon />
                </div>
              </motion.div>
            </div> */}
          </motion.div>
        </div>

        {/* Values Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our <span className="gradient-text">Values</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mb-4 inline-block"
                >
                  {value.icon}
                </motion.div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                  {value.title}
                </h4>
                
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;
