'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Brand Design', href: '#services' },
        { name: 'Web Development', href: '#services' },
        { name: 'Mobile Apps', href: '#services' },
        { name: 'Digital Strategy', href: '#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
        { name: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Support', href: '#contact' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Dribbble', icon: '🏀', url: '#' },
    { name: 'GitHub', icon: '👨‍💻', url: '#' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold gradient-text mb-4">
                  CreativeAgency
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                  We transform ideas into extraordinary digital experiences through 
                  innovative design, cutting-edge development, and strategic thinking.
                </p>
                
                {/* Newsletter Signup */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary whitespace-nowrap"
                    >
                      Subscribe
                    </motion.button>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:gradient-bg transition-all duration-300"
                      title={social.name}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, sectionIndex) => (
              <div key={section.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-white font-semibold mb-6">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <motion.a
                          href={link.href}
                          whileHover={{ x: 5 }}
                          className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                          {link.name}
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} CreativeAgency. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <motion.a
                  href="#"
                  whileHover={{ y: -1 }}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -1 }}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  Terms of Service
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -1 }}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  Cookies
                </motion.a>
              </div>
            </div>

            {/* Back to Top Button */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="glass-effect rounded-full p-3 hover:gradient-bg transition-all duration-300 group"
              title="Back to top"
            >
              <motion.span
                className="text-xl block"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⬆️
              </motion.span>
            </motion.a>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-50"></div>
      </div>
    </footer>
  );
};

export default Footer;
