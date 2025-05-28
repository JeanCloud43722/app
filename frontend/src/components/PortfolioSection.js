import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, TrendingUp, Target, Users, Award } from 'lucide-react';

const PortfolioSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Alle Projekte' },
    { id: 'aeo', name: 'AEO Projekte' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'b2b', name: 'B2B Services' },
    { id: 'local', name: 'Local Business' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Maritime Tech Revolution',
      subtitle: 'AEO-Transformation für Technologie-Leader',
      category: 'aeo',
      image: 'https://images.pexels.com/photos/6498304/pexels-photo-6498304.jpeg',
      results: [
        { metric: 'Voice Search Traffic', value: '+540%' },
        { metric: 'Featured Snippets', value: '94%' },
        { metric: 'Answer Engine Visibility', value: '+720%' }
      ],
      description: 'Komplette AEO-Transformation eines Hamburger Tech-Unternehmens mit Fokus auf Voice Search und KI-Optimierung.',
      industry: 'Technology',
      duration: '6 Monate',
      technologies: ['AEO', 'Schema Markup', 'Voice Search', 'NLP Optimization']
    },
    {
      id: 2,
      title: 'Hanseatic E-Commerce Empire',
      subtitle: 'Multi-Channel Performance Marketing',
      category: 'ecommerce',
      image: 'https://images.unsplash.com/photo-1477013743164-ffc3a5e556da',
      results: [
        { metric: 'Revenue Growth', value: '+380%' },
        { metric: 'Shopping Snippets', value: '+450%' },
        { metric: 'Mobile Conversions', value: '+290%' }
      ],
      description: 'Skalierung eines traditionellen Hamburger Handelsunternehmens in die digitale Welt mit modernster AEO-Technologie.',
      industry: 'Retail',
      duration: '8 Monate',
      technologies: ['AEO', 'SEA', 'Social Commerce', 'Performance Marketing']
    },
    {
      id: 3,
      title: 'Professional Services Powerhouse',
      subtitle: 'B2B Lead Generation Revolution',
      category: 'b2b',
      image: 'https://images.pexels.com/photos/7544430/pexels-photo-7544430.jpeg',
      results: [
        { metric: 'Qualified Leads', value: '+620%' },
        { metric: 'Expert Snippets', value: '89%' },
        { metric: 'LinkedIn Performance', value: '+340%' }
      ],
      description: 'Transformation einer Beratungsgesellschaft zur digitalen Thought Leadership durch strategische AEO-Implementation.',
      industry: 'Consulting',
      duration: '4 Monate',
      technologies: ['AEO', 'LinkedIn Ads', 'Content Marketing', 'Lead Nurturing']
    },
    {
      id: 4,
      title: 'Local Hamburg Champion',
      subtitle: 'Lokale Dominanz durch AEO',
      category: 'local',
      image: 'https://images.unsplash.com/photo-1593671898092-7fc681736602',
      results: [
        { metric: 'Local Visibility', value: '+480%' },
        { metric: 'Google My Business', value: '+350%' },
        { metric: 'Local Voice Search', value: '+560%' }
      ],
      description: 'Lokale SEO-Revolution für ein traditionsreiches Hamburger Unternehmen mit Fokus auf Voice Search und lokale AEO.',
      industry: 'Local Business',
      duration: '3 Monate',
      technologies: ['Local AEO', 'Google My Business', 'Local Schema', 'Voice Search']
    },
    {
      id: 5,
      title: 'SaaS Global Expansion',
      subtitle: 'Internationale AEO-Skalierung',
      category: 'b2b',
      image: 'https://images.pexels.com/photos/6498304/pexels-photo-6498304.jpeg',
      results: [
        { metric: 'International Traffic', value: '+890%' },
        { metric: 'SaaS Snippets', value: '96%' },
        { metric: 'Trial Conversions', value: '+420%' }
      ],
      description: 'Internationale Expansion eines Hamburger SaaS-Unternehmens durch mehrsprachige AEO-Strategien.',
      industry: 'SaaS',
      duration: '12 Monate',
      technologies: ['Multi-language AEO', 'International SEO', 'SaaS Marketing', 'Conversion Optimization']
    },
    {
      id: 6,
      title: 'Fashion Forward Hamburg',
      subtitle: 'Social Commerce AEO Revolution',
      category: 'ecommerce',
      image: 'https://images.pexels.com/photos/7544430/pexels-photo-7544430.jpeg',
      results: [
        { metric: 'Social Sales', value: '+670%' },
        { metric: 'Visual Search', value: '+520%' },
        { metric: 'Influencer ROI', value: '+380%' }
      ],
      description: 'Transformation einer Hamburger Modemarke durch innovative Social Commerce AEO-Strategien und Visual Search Optimization.',
      industry: 'Fashion',
      duration: '5 Monate',
      technologies: ['Visual Search AEO', 'Social Commerce', 'Influencer Marketing', 'AR Integration']
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="section-padding bg-dark-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #00abec 1px, transparent 1px),
                           linear-gradient(-45deg, #14b8a6 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
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
            Unser <span className="gradient-text">Portfolio</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Entdecken Sie die Erfolgsgeschichten, die wir für unsere Kunden geschrieben haben. 
            Jedes Projekt ist ein Beweis für die Kraft der Answer Engine Optimization.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'gradient-primary text-white'
                  : 'glass-morphism text-gray-300 hover:text-white'
              }`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="glass-morphism rounded-2xl overflow-hidden hover-glow group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              layout
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
                
                {/* Overlay on Hover */}
                <motion.div
                  className="absolute inset-0 bg-primary-500/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="text-center text-white p-6">
                    <ExternalLink className="h-8 w-8 mx-auto mb-4" />
                    <p className="text-sm">{item.description}</p>
                  </div>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-500/80 backdrop-blur-lg text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.industry}
                  </span>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-dark-900/80 backdrop-blur-lg text-white px-3 py-1 rounded-full text-sm">
                    {item.duration}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{item.subtitle}</p>

                {/* Results */}
                <div className="space-y-3 mb-6">
                  {item.results.map((result, resultIndex) => (
                    <motion.div
                      key={resultIndex}
                      className="flex justify-between items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1 + index * 0.1 + resultIndex * 0.05 }}
                    >
                      <span className="text-gray-400 text-sm">{result.metric}</span>
                      <span className="text-primary-400 font-bold">{result.value}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-dark-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <motion.button
                  className="w-full glass-morphism py-3 rounded-xl text-white font-semibold border border-primary-500/30 hover:border-primary-500 transition-colors flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Projekt ansehen</span>
                  <ExternalLink className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Portfolio Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
        >
          {[
            { icon: Target, number: '180+', label: 'Erfolgreiche Projekte' },
            { icon: TrendingUp, number: '540%', label: 'Durchschn. Wachstum' },
            { icon: Users, number: '89%', label: 'Kundenzufriedenheit' },
            { icon: Award, number: '15+', label: 'Auszeichnungen' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass-morphism p-6 text-center hover-glow"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.7 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className="h-8 w-8 text-primary-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2 }}
        >
          <div className="glass-morphism p-8 rounded-3xl inline-block">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Ihr Projekt könnte das nächste sein
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Lassen Sie uns gemeinsam eine neue Erfolgsgeschichte schreiben. 
              Ihre AEO-Transformation beginnt mit einem Gespräch.
            </p>
            <motion.button
              className="gradient-primary px-8 py-4 rounded-full text-white font-semibold hover-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projekt besprechen
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
