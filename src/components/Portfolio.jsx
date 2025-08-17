'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Modern e-commerce solution with advanced filtering and payment integration.',
      image: '/images/project1.jpg',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      link: '#',
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      category: 'design',
      description: 'Complete brand overhaul for a tech startup including logo, guidelines, and assets.',
      image: '/images/project2.jpg',
      technologies: ['Figma', 'Illustrator', 'Photoshop'],
      link: '#',
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure and intuitive mobile banking application with biometric authentication.',
      image: '/images/project3.jpg',
      technologies: ['React Native', 'Firebase', 'Biometrics'],
      link: '#',
    },
    {
      id: 4,
      title: 'SaaS Dashboard',
      category: 'web',
      description: 'Analytics dashboard for SaaS platform with real-time data visualization.',
      image: '/images/project4.jpg',
      technologies: ['Next.js', 'D3.js', 'PostgreSQL', 'WebSocket'],
      link: '#',
    },
    {
      id: 5,
      title: 'Restaurant Mobile App',
      category: 'mobile',
      description: 'Food ordering app with real-time tracking and payment integration.',
      image: '/images/project5.jpg',
      technologies: ['Flutter', 'Firebase', 'Google Maps'],
      link: '#',
    },
    {
      id: 6,
      title: 'Corporate Website',
      category: 'web',
      description: 'Professional corporate website with CMS and multilingual support.',
      image: '/images/project6.jpg',
      technologies: ['WordPress', 'PHP', 'MySQL'],
      link: '#',
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'design', label: 'Design' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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
    <section id="portfolio" ref={ref} className="section-padding bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Discover our latest projects and see how we bring digital visions to life.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'gradient-bg text-white'
                    : 'glass-effect text-gray-300 hover:text-white'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layout
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="glass-effect rounded-2xl overflow-hidden h-full transition-all duration-300 hover:bg-opacity-10 hover:bg-white">
                {/* Project Image */}
                <div className="relative overflow-hidden h-64 bg-gradient-to-br from-purple-500 to-blue-600">
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm"
                    >
                      <span className="text-white text-2xl">👁️</span>
                    </motion.div>
                  </div>
                  
                  {/* Placeholder for project image */}
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                    <span className="text-white text-4xl opacity-50">📱</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-purple-400 font-medium uppercase tracking-wide">
                      {project.category}
                    </span>
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <span className="text-xl">↗️</span>
                    </motion.a>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary text-lg px-8 py-4"
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
