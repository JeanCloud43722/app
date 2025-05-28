import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Anchor } from 'lucide-react';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Unser Standort',
      details: ['Landungsbrücken 1', '20359 Hamburg', 'Deutschland'],
      color: 'text-primary-400'
    },
    {
      icon: Phone,
      title: 'Telefon',
      details: ['+49 40 123 456 789', '+49 40 987 654 321'],
      color: 'text-teal-400'
    },
    {
      icon: Mail,
      title: 'E-Mail',
      details: ['hello@aeo-hamburg.de', 'info@aeo-hamburg.de'],
      color: 'text-coral-400'
    },
    {
      icon: Clock,
      title: 'Öffnungszeiten',
      details: ['Mo-Fr: 9:00 - 18:00', 'Sa: 10:00 - 14:00', 'So: Geschlossen'],
      color: 'text-purple-400'
    }
  ];

  const services = [
    'Answer Engine Optimization (AEO)',
    'Search Engine Optimization (SEO)',
    'Search Engine Advertising (SEA)',
    'Social Media Marketing',
    'Performance Marketing',
    'Inbound & Outbound Marketing',
    'Beratung & Strategie',
    'Technical Audit'
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Hamburg Landungsbrücken Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 11, 0.85), rgba(10, 10, 11, 0.9)), url('https://images.unsplash.com/photo-1593671898092-7fc681736602')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Hanseatic Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 opacity-10"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Anchor className="h-32 w-32 text-primary-400" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 opacity-10"
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Anchor className="h-24 w-24 text-teal-400" />
        </motion.div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Kontakt <span className="gradient-text">aufnehmen</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Hanseatische Verbindlichkeit trifft moderne AEO-Expertise. 
            Lassen Sie uns gemeinsam Ihre digitale Zukunft gestalten.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            className="glass-morphism p-8 md:p-12 rounded-3xl"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                  >
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-800/50 border border-gray-700 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="Ihr vollständiger Name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9 }}
                  >
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-800/50 border border-gray-700 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="ihre@email.de"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-dark-800/50 border border-gray-700 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Ihr Unternehmen"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.1 }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Interessiert an *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-800/50 border border-gray-700 rounded-xl px-4 py-4 text-white focus:border-primary-500 focus:outline-none transition-colors"
                  >
                    <option value="">Service auswählen</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Nachricht *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-dark-800/50 border border-gray-700 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                    placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full gradient-primary py-4 rounded-xl text-white font-semibold hover-glow flex items-center justify-center space-x-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="h-5 w-5" />
                  <span>Nachricht senden</span>
                </motion.button>

                <p className="text-xs text-gray-400 text-center">
                  * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                </p>
              </form>
            ) : (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="inline-flex p-6 rounded-full bg-green-500/20 mb-6"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <CheckCircle className="h-16 w-16 text-green-400" />
                </motion.div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">
                  Vielen Dank für Ihre Nachricht!
                </h3>
                <p className="text-gray-300 mb-6">
                  Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen. 
                  Hanseatisches Wort!
                </p>
                <motion.button
                  className="glass-morphism px-6 py-3 rounded-xl text-white font-semibold border border-primary-500/50 hover:border-primary-500 transition-colors"
                  onClick={() => setIsSubmitted(false)}
                  whileHover={{ scale: 1.02 }}
                >
                  Neue Nachricht
                </motion.button>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="glass-morphism p-6 rounded-2xl hover-glow group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className={`p-3 rounded-xl bg-primary-500/20 group-hover:bg-primary-500/30 transition-colors`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <info.icon className={`h-6 w-6 ${info.color}`} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-300">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div
              className="glass-morphism p-8 rounded-2xl text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.5 }}
            >
              <div className="inline-flex p-4 rounded-full bg-primary-500/20 mb-6">
                <Anchor className="h-8 w-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">
                Bereit für AEO?
              </h3>
              <p className="text-gray-300 mb-6">
                Lassen Sie uns bei einem Kaffee über Ihre digitale Zukunft sprechen. 
                Hanseatisch direkt und ehrlich.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/#contact"
                  className="gradient-primary px-6 py-3 rounded-full text-white font-semibold hover-glow flex-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Termin vereinbaren
                </motion.a>
                <motion.a
                  href="tel:+4940123456789"
                  className="glass-morphism px-6 py-3 rounded-full text-white font-semibold border border-primary-500/50 hover:border-primary-500 transition-colors flex-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  +49 40 123 456 789
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          className="mt-20 glass-morphism p-8 rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Besuchen Sie uns in Hamburg
            </h3>
            <p className="text-gray-300">
              Direkt an den historischen Landungsbrücken - dort wo Hamburgs maritime Tradition 
              auf digitale Innovation trifft.
            </p>
          </div>
          
          <div className="bg-dark-800 rounded-2xl h-64 flex items-center justify-center relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1593671898092-7fc681736602')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="relative z-10 text-center">
              <MapPin className="h-12 w-12 text-primary-400 mx-auto mb-4" />
              <p className="text-white font-semibold">Landungsbrücken 1, 20359 Hamburg</p>
              <p className="text-gray-300 text-sm">Direkter Blick auf die Elbe</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
