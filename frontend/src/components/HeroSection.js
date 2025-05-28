import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: '500+', label: 'Erfolgreiche AEO-Projekte', icon: Target },
    { number: '250%', label: 'Durchschnittlicher Traffic-Anstieg', icon: TrendingUp },
    { number: '95%', label: 'Featured Snippet Erfolgsrate', icon: Zap }
  ];

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 10, 11, 0.8), rgba(10, 10, 11, 0.9)), url('https://images.unsplash.com/photo-1611162618071-b39a2ec055fb')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary-500/20 backdrop-blur-lg px-6 py-3 rounded-full border border-primary-500/30 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Zap className="h-5 w-5 text-primary-400" />
            <span className="text-primary-300 font-medium">
              #1 AEO Agentur in Hamburg
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight mb-6">
            <span className="gradient-text">Answer Engine</span>
            <br />
            <span className="text-white">Optimization</span>
            <br />
            <span className="text-gray-300 text-3xl md:text-4xl lg:text-5xl font-light">
              Die Zukunft der Suche
            </span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            Wir optimieren Ihre Inhalte für <strong className="text-primary-400">Voice Search</strong>, 
            <strong className="text-primary-400"> Featured Snippets</strong> und 
            <strong className="text-primary-400"> KI-Assistenten</strong>. 
            Hanseatische Gründlichkeit trifft modernste AEO-Technologie.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              className="gradient-primary px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center space-x-2 hover-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Kostenlose AEO-Analyse</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
            
            <motion.button
              className="glass-morphism px-8 py-4 rounded-full text-white font-semibold text-lg border-2 border-primary-500/50 hover:border-primary-500 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Case Studies ansehen
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-morphism p-6 text-center hover-glow"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 + index * 0.2 }}
            >
              <stat.icon className="h-8 w-8 text-primary-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
