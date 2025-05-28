import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, TrendingUp, Users, Target, Award } from 'lucide-react';

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const metrics = [
    { icon: TrendingUp, number: 847, suffix: '%', label: 'Durchschnittlicher ROI-Anstieg', color: 'text-primary-400' },
    { icon: Users, number: 156, suffix: '+', label: 'Zufriedene Kunden', color: 'text-teal-400' },
    { icon: Target, number: 94, suffix: '%', label: 'Featured Snippet Rate', color: 'text-coral-400' },
    { icon: Award, number: 23, suffix: '', label: 'Branchenauszeichnungen', color: 'text-purple-400' }
  ];

  const testimonials = [
    {
      name: 'Dr. Marcus Weber',
      position: 'CEO',
      company: 'TechNord Hamburg',
      image: 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51',
      text: 'AEO Hamburg hat unsere Voice Search Performance um 420% gesteigert. Ihre AEO-Expertise ist konkurrenzlos - echte Pioniere in diesem Bereich.',
      rating: 5,
      results: [
        { metric: 'Voice Search Traffic', increase: '+420%' },
        { metric: 'Featured Snippets', increase: '+380%' },
        { metric: 'Local Leads', increase: '+290%' }
      ],
      industry: 'Technology'
    },
    {
      name: 'Sarah Lindström',
      position: 'Marketing Director',
      company: 'Hanseatic Retail Group',
      image: 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51',
      text: 'Dank der AEO-Strategie sind wir bei 89% aller relevanten Featured Snippets präsent. Das Team versteht die Zukunft der Suche wie kein anderes.',
      rating: 5,
      results: [
        { metric: 'Featured Snippets', increase: '+540%' },
        { metric: 'E-Commerce Sales', increase: '+340%' },
        { metric: 'Brand Visibility', increase: '+280%' }
      ],
      industry: 'Retail'
    },
    {
      name: 'Prof. Dr. Michael Hansen',
      position: 'Geschäftsführer',
      company: 'Maritime Solutions Hamburg',
      image: 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51',
      text: 'Die hanseatische Gründlichkeit kombiniert mit modernster AEO-Technologie. Unser organischer Traffic hat sich verdreifacht.',
      rating: 5,
      results: [
        { metric: 'Organic Traffic', increase: '+310%' },
        { metric: 'Answer Engine Visibility', increase: '+450%' },
        { metric: 'Conversion Rate', increase: '+180%' }
      ],
      industry: 'Maritime'
    }
  ];

  // Animated counters
  const [counters, setCounters] = useState(metrics.map(() => 0));

  useEffect(() => {
    if (inView) {
      metrics.forEach((metric, index) => {
        const duration = 2000;
        const increment = metric.number / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= metric.number) {
            current = metric.number;
            clearInterval(timer);
          }
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, 16);
      });
    }
  }, [inView]);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 10, 11, 0.9), rgba(10, 10, 11, 0.9)), url('https://images.unsplash.com/photo-1513530534585-c7b1394c6d51')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Metrics Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-6xl font-heading font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Unsere <span className="gradient-text">Erfolge</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Zahlen lügen nicht. Hier sind die Ergebnisse, die unsere Kunden mit 
              unserer Answer Engine Optimization erreicht haben.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="glass-morphism p-8 text-center hover-glow group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="inline-flex p-4 rounded-2xl bg-primary-500/20 mb-6 group-hover:bg-primary-500/30 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <metric.icon className={`h-8 w-8 ${metric.color}`} />
                </motion.div>
                
                <motion.div 
                  className={`text-4xl font-bold ${metric.color} mb-2`}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                >
                  {counters[index]}{metric.suffix}
                </motion.div>
                
                <div className="text-gray-300 text-sm leading-tight">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Was unsere Kunden sagen
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Echte Erfolgsgeschichten von Unternehmen, die mit uns die Zukunft der Suche erobert haben.
            </p>
          </div>

          {/* Main Testimonial */}
          <motion.div
            className="glass-morphism p-8 md:p-12 rounded-3xl mb-12 relative overflow-hidden"
            key={activeTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 h-16 w-16 text-primary-500/20" />
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial Content */}
              <div className="md:col-span-2">
                <div className="flex items-center mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-400">
                    ({testimonials[activeTestimonial].industry})
                  </span>
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-teal-500 p-0.5">
                    <div 
                      className="w-full h-full rounded-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${testimonials[activeTestimonial].image})` }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-gray-400">
                      {testimonials[activeTestimonial].position}, {testimonials[activeTestimonial].company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary-400 mb-4">Erreichte Ergebnisse:</h4>
                {testimonials[activeTestimonial].results.map((result, index) => (
                  <motion.div
                    key={index}
                    className="bg-dark-800/50 p-4 rounded-xl"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-2xl font-bold text-primary-400">{result.increase}</div>
                    <div className="text-sm text-gray-400">{result.metric}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center space-x-4">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-4 h-4 rounded-full transition-colors ${
                  index === activeTestimonial ? 'bg-primary-500' : 'bg-gray-600'
                }`}
                onClick={() => setActiveTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
        >
          <div className="glass-morphism p-8 rounded-3xl inline-block">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Werden Sie unser nächster Erfolg
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Lassen Sie uns gemeinsam Ihre AEO-Erfolgsgeschichte schreiben. 
              Die Zukunft der Suche wartet auf Sie.
            </p>
            <motion.a
              href="/#contact"
              className="gradient-primary px-8 py-4 rounded-full text-white font-semibold hover-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Jetzt durchstarten
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
