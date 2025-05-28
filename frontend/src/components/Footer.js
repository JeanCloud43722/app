import React from 'react';
import { motion } from 'framer-motion';
import { 
  Anchor, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Answer Engine Optimization', href: '#aeo' },
    { name: 'SEO Services', href: '#seo' },
    { name: 'Social Media Marketing', href: '#social' },
    { name: 'Performance Marketing', href: '#performance' },
    { name: 'Unser Prozess', href: '#process' },
    { name: 'Portfolio', href: '#portfolio' }
  ];

  const resources = [
    { name: 'AEO Blog', href: '#blog' },
    { name: 'Case Studies', href: '#cases' },
    { name: 'Kostenlose Tools', href: '#tools' },
    { name: 'Webinare', href: '#webinars' },
    { name: 'AEO Guide', href: '#guide' },
    { name: 'FAQ', href: '#faq' }
  ];

  const legal = [
    { name: 'Impressum', href: '#impressum' },
    { name: 'Datenschutz', href: '#datenschutz' },
    { name: 'AGB', href: '#agb' },
    { name: 'Cookie-Richtlinien', href: '#cookies' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/aeo-hamburg', name: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/aeohamburg', name: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/aeohamburg', name: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/aeohamburg', name: 'YouTube' }
  ];

  return (
    <footer className="relative bg-dark-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Pre-Footer CTA */}
      <div className="relative z-10 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex p-4 rounded-full bg-primary-500/20 mb-6">
              <Anchor className="h-8 w-8 text-primary-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Bereit für die Zukunft der Suche?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Lassen Sie uns gemeinsam Ihre Answer Engine Optimization beginnen. 
              Hanseatische Qualität trifft moderne Technologie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="gradient-primary px-8 py-4 rounded-full text-white font-semibold hover-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Kostenlose AEO-Beratung
              </motion.button>
              <motion.button
                className="glass-morphism px-8 py-4 rounded-full text-white font-semibold border-2 border-primary-500/50 hover:border-primary-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                +49 40 123 456 789
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Anchor className="h-8 w-8 text-primary-400" />
                <span className="text-2xl font-heading font-bold gradient-text">
                  AEO Hamburg
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Die führende Performance Marketing Agentur in Hamburg. 
                Spezialisiert auf Answer Engine Optimization und die Zukunft der digitalen Suche.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-4 w-4 text-primary-400 flex-shrink-0" />
                  <span className="text-sm">Landungsbrücken 1, 20359 Hamburg</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-4 w-4 text-primary-400 flex-shrink-0" />
                  <span className="text-sm">+49 40 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-4 w-4 text-primary-400 flex-shrink-0" />
                  <span className="text-sm">hello@aeo-hamburg.de</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-morphism rounded-xl text-gray-400 hover:text-primary-400 transition-colors hover-glow"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-heading font-bold text-white mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-heading font-bold text-white mb-6">
                Ressourcen
              </h3>
              <ul className="space-y-3">
                {resources.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-heading font-bold text-white mb-6">
                AEO Newsletter
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Bleiben Sie auf dem neuesten Stand der Answer Engine Optimization. 
                Exklusive Insights und Strategien direkt in Ihr Postfach.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  className="w-full bg-dark-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors text-sm"
                />
                <motion.button
                  className="w-full gradient-primary py-3 rounded-xl text-white font-semibold hover-glow text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Abonnieren
                </motion.button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Kein Spam. Jederzeit abbestellbar. DSGVO-konform.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-sm flex items-center space-x-2">
                <span>© 2024 AEO Hamburg. Alle Rechte vorbehalten.</span>
                <Heart className="h-4 w-4 text-red-400" />
                <span>Made in Hamburg</span>
              </p>
              <div className="flex items-center space-x-4">
                {legal.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-500 hover:text-gray-300 transition-colors text-xs"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="glass-morphism p-3 rounded-xl text-gray-400 hover:text-primary-400 transition-colors hover-glow"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Hamburg Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-teal-500 to-primary-500" />
    </footer>
  );
};

export default Footer;
