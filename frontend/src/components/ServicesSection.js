import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Search, Share2, Target, TrendingUp, Mic } from 'lucide-react';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Brain,
      title: 'Answer Engine Optimization (AEO)',
      description: 'Spezialisierte Optimierung für KI-Antworten, Voice Search und Featured Snippets. Wir machen Ihre Inhalte zur ersten Wahl für Answer Engines.',
      features: ['Voice Search Optimierung', 'Featured Snippet Targeting', 'KI-Content Strukturierung', 'Schema Markup Advanced'],
      image: 'https://images.unsplash.com/photo-1477013743164-ffc3a5e556da',
      gradient: 'from-primary-500 to-blue-600',
      stats: { increase: '+340%', metric: 'Voice Search Traffic' }
    },
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      description: 'Klassische SEO trifft moderne Technologie. Wir optimieren für traditionelle Suchergebnisse und bereiten Sie auf die Zukunft der Suche vor.',
      features: ['Technical SEO Audit', 'Content-Strategie', 'Local SEO Hamburg', 'Core Web Vitals'],
      image: 'https://images.unsplash.com/photo-1477013743164-ffc3a5e556da',
      gradient: 'from-teal-500 to-green-600',
      stats: { increase: '+280%', metric: 'Organischer Traffic' }
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Strategische Social Media Kampagnen, die Ihre Marke zum Gesprächsthema machen. Von LinkedIn bis TikTok - wir kennen jede Plattform.',
      features: ['Multi-Platform Strategien', 'Content Creation', 'Community Management', 'Influencer Marketing'],
      image: 'https://images.pexels.com/photos/7544430/pexels-photo-7544430.jpeg',
      gradient: 'from-coral-500 to-pink-600',
      stats: { increase: '+450%', metric: 'Social Engagement' }
    },
    {
      icon: Target,
      title: 'Search Engine Advertising (SEA)',
      description: 'Präzise Google Ads und Microsoft Ads Kampagnen mit maximaler ROI. Wir verbrennen kein Budget - wir investieren strategisch.',
      features: ['Google Ads Management', 'Shopping Campaigns', 'Display Advertising', 'Remarketing Strategien'],
      image: 'https://images.unsplash.com/photo-1477013743164-ffc3a5e556da',
      gradient: 'from-orange-500 to-red-600',
      stats: { increase: '+520%', metric: 'Conversion Rate' }
    },
    {
      icon: TrendingUp,
      title: 'Performance Marketing',
      description: 'Datengetriebene Kampagnen über alle Kanäle. Wir optimieren nicht nur - wir revolutionieren Ihre Marketing-Performance.',
      features: ['Cross-Channel Analytics', 'Conversion Optimierung', 'A/B Testing', 'Attribution Modeling'],
      image: 'https://images.pexels.com/photos/6498304/pexels-photo-6498304.jpeg',
      gradient: 'from-purple-500 to-indigo-600',
      stats: { increase: '+380%', metric: 'Marketing ROI' }
    },
    {
      icon: Mic,
      title: 'Inbound & Outbound Marketing',
      description: 'Die perfekte Balance zwischen Anziehung und Aktivität. Wir bringen Kunden zu Ihnen und Sie zu den richtigen Kunden.',
      features: ['Content Marketing', 'Lead Generation', 'Email Marketing', 'Sales Enablement'],
      image: 'https://images.unsplash.com/photo-1593671898092-7fc681736602',
      gradient: 'from-emerald-500 to-teal-600',
      stats: { increase: '+290%', metric: 'Qualified Leads' }
    }
  ];

  return (
    <section id="services" className="section-padding bg-dark-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #00abec 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #14b8a6 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }} />
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
            Unsere <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Von traditionellem SEO bis hin zu revolutionärer Answer Engine Optimization - 
            wir bieten das komplette Spektrum moderner Performance Marketing Services.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative glass-morphism p-8 hover-glow overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />

              {/* Gradient Overlay */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-20`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <motion.div
                    className="text-right"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <div className="text-2xl font-bold text-primary-400">{service.stats.increase}</div>
                    <div className="text-sm text-gray-400">{service.stats.metric}</div>
                  </motion.div>
                </div>

                <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-3 text-sm text-gray-400"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1 + index * 0.1 + featureIndex * 0.05 }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className="mt-6 text-primary-400 font-semibold flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ x: 5 }}
                >
                  <span>Mehr erfahren</span>
                  <div className="w-4 h-4 rounded-full border-2 border-primary-400 flex items-center justify-center">
                    <div className="w-1 h-1 bg-primary-400 rounded-full" />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
        >
          <div className="glass-morphism p-8 inline-block rounded-3xl">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Bereit für die Zukunft der Suche?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Lassen Sie uns gemeinsam Ihre digitale Präsenz revolutionieren. 
              AEO ist nicht die Zukunft - es ist das Jetzt.
            </p>
            <motion.a
              href="/#contact"
              className="gradient-primary px-8 py-4 rounded-full text-white font-semibold hover-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Kostenloses Strategiegespräch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
