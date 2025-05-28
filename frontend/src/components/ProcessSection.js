import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, BarChart3, Cog, Rocket, Target, Trophy } from 'lucide-react';

const ProcessSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const processSteps = [
    {
      icon: Search,
      title: 'Analyse & Audit',
      description: 'Tiefgreifende Analyse Ihrer aktuellen Performance. Wir identifizieren Potentiale und entwickeln eine maßgeschneiderte AEO-Strategie.',
      duration: '1-2 Wochen',
      deliverables: ['AEO-Audit Report', 'Competitor Analysis', 'Keyword-Strategie', 'Technical Roadmap'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Target,
      title: 'Strategieentwicklung',
      description: 'Basierend auf der Analyse entwickeln wir eine präzise Strategie für Answer Engine Optimization und Performance Marketing.',
      duration: '1 Woche',
      deliverables: ['AEO-Strategie', 'Content-Plan', 'Channel-Mix', 'KPI-Definition'],
      color: 'from-primary-500 to-teal-600'
    },
    {
      icon: Cog,
      title: 'Implementation',
      description: 'Umsetzung der definierten Maßnahmen mit hanseatischer Gründlichkeit. Jeder Schritt wird dokumentiert und messbar gemacht.',
      duration: '2-4 Wochen',
      deliverables: ['Technical Setup', 'Content Optimization', 'Schema Implementation', 'Tracking Setup'],
      color: 'from-teal-500 to-green-600'
    },
    {
      icon: BarChart3,
      title: 'Monitoring & Optimierung',
      description: 'Kontinuierliche Überwachung und Optimierung. Wir passen die Strategie basierend auf Performance-Daten an.',
      duration: 'Ongoing',
      deliverables: ['Weekly Reports', 'Performance Analytics', 'Optimization Recommendations', 'Strategy Updates'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Rocket,
      title: 'Skalierung',
      description: 'Erfolgreiche Maßnahmen werden skaliert und auf neue Bereiche ausgeweitet. Nachhaltiges Wachstum steht im Fokus.',
      duration: '1-3 Monate',
      deliverables: ['Scale Strategy', 'New Channel Integration', 'Advanced Automation', 'Growth Hacking'],
      color: 'from-emerald-500 to-cyan-600'
    },
    {
      icon: Trophy,
      title: 'Erfolgsmessung',
      description: 'Regelmäßige Erfolgsauswertung und Strategieanpassung. Transparente Berichterstattung über alle KPIs.',
      duration: 'Monatlich',
      deliverables: ['ROI Reports', 'Success Metrics', 'Future Roadmap', 'Best Practice Documentation'],
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  return (
    <section id="process" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.1, 0.3],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
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
            Unser <span className="gradient-text">Prozess</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Hanseatische Gründlichkeit trifft agile Methodik. Jeder Schritt ist darauf ausgelegt, 
            messbare Ergebnisse zu liefern und nachhaltigen Erfolg zu schaffen.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-teal-500 to-cyan-500" />

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.2 }}
              >
                {/* Timeline Point */}
                <motion.div
                  className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-teal-500 flex items-center justify-center z-10"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-3 h-3 bg-white rounded-full" />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className={`ml-16 md:ml-0 md:w-5/12 glass-morphism p-8 rounded-2xl hover-glow group ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${step.color} mb-6`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-heading font-bold text-white group-hover:text-primary-400 transition-colors">
                      {step.title}
                    </h3>
                    <span className="text-sm bg-primary-500/20 text-primary-300 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-primary-400 mb-3">Deliverables:</h4>
                    {step.deliverables.map((deliverable, deliverableIndex) => (
                      <motion.div
                        key={deliverableIndex}
                        className="flex items-center space-x-3 text-sm text-gray-400"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          delay: 1 + index * 0.2 + deliverableIndex * 0.05 
                        }}
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-400 to-teal-400 rounded-full" />
                        <span>{deliverable}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress indicator */}
                  <motion.div
                    className="mt-6 w-full bg-dark-700 rounded-full h-2"
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : {}}
                    transition={{ delay: 1.2 + index * 0.2 }}
                  >
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${step.color}`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: '100%' } : {}}
                      transition={{ delay: 1.4 + index * 0.2, duration: 1 }}
                    />
                  </motion.div>
                </motion.div>

                {/* Step Number */}
                <motion.div
                  className={`hidden md:block absolute ${
                    index % 2 === 0 ? 'right-0' : 'left-0'
                  } text-6xl font-bold text-primary-500/20 font-heading`}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 + index * 0.2 }}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2 }}
        >
          <div className="glass-morphism p-8 rounded-3xl inline-block">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Starten wir Ihr AEO-Projekt
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Lassen Sie uns gemeinsam den ersten Schritt in Richtung Answer Engine Optimization gehen. 
              Ihre digitale Transformation beginnt heute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="gradient-primary px-8 py-4 rounded-full text-white font-semibold hover-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Projekt starten
              </motion.button>
              <motion.button
                className="glass-morphism px-8 py-4 rounded-full text-white font-semibold border-2 border-primary-500/50 hover:border-primary-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Prozess-Details
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
