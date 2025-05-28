import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

const BlogSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      id: 1,
      title: 'Die Zukunft der Suche: Warum AEO SEO ablöst',
      excerpt: 'Answer Engine Optimization revolutioniert die Art, wie Menschen Informationen finden. Erfahren Sie, warum traditionelles SEO nicht mehr ausreicht.',
      author: 'Dr. Sarah Schmidt',
      date: '15. Januar 2024',
      readTime: '8 min',
      category: 'AEO Strategy',
      image: 'https://images.unsplash.com/photo-1477013743164-ffc3a5e556da',
      tags: ['AEO', 'Voice Search', 'KI', 'Zukunft'],
      featured: true
    },
    {
      id: 2,
      title: 'Voice Search Optimization: Der Hamburg Guide',
      excerpt: 'Lokale Unternehmen in Hamburg können mit gezielter Voice Search Optimization ihre Sichtbarkeit massiv steigern. Praktische Tipps und Strategien.',
      author: 'Marcus Weber',
      date: '12. Januar 2024',
      readTime: '6 min',
      category: 'Local SEO',
      image: 'https://images.unsplash.com/photo-1593671898092-7fc681736602',
      tags: ['Voice Search', 'Hamburg', 'Local SEO', 'Mobile']
    },
    {
      id: 3,
      title: 'Featured Snippets erobern: Die ultimative Anleitung',
      excerpt: 'Position Zero erreichen ist kein Zufall. Unsere bewährte Strategie für Featured Snippets mit konkreten Beispielen und Checklisten.',
      author: 'Lisa Müller',
      date: '10. Januar 2024',
      readTime: '12 min',
      category: 'SEO Tactics',
      image: 'https://images.pexels.com/photos/7544430/pexels-photo-7544430.jpeg',
      tags: ['Featured Snippets', 'SERP', 'Content', 'Rankings']
    },
    {
      id: 4,
      title: 'KI-Content für Answer Engines optimieren',
      excerpt: 'Wie Sie Ihre Inhalte strukturieren müssen, damit KI-Assistenten sie verstehen und bevorzugt ausgeben. Technische Insights und praktische Umsetzung.',
      author: 'Prof. Dr. Michael Hansen',
      date: '8. Januar 2024',
      readTime: '10 min',
      category: 'Content Strategy',
      image: 'https://images.pexels.com/photos/6498304/pexels-photo-6498304.jpeg',
      tags: ['KI-Content', 'NLP', 'Strukturierung', 'Schema']
    },
    {
      id: 5,
      title: 'Performance Marketing Trends 2024',
      excerpt: 'Die wichtigsten Entwicklungen im Performance Marketing: Von Zero-Click Searches bis zu conversational AI. Was Hamburg-basierte Unternehmen wissen müssen.',
      author: 'Anna Petersen',
      date: '5. Januar 2024',
      readTime: '7 min',
      category: 'Marketing Trends',
      image: 'https://images.unsplash.com/photo-1477013743164-ffc3a5e556da',
      tags: ['Performance Marketing', 'Trends 2024', 'Conversion', 'Analytics']
    },
    {
      id: 6,
      title: 'Schema Markup für AEO: Advanced Techniken',
      excerpt: 'Erweiterte Schema Markup Strategien, die Ihre Answer Engine Optimization auf das nächste Level bringen. Mit Code-Beispielen und Tools.',
      author: 'Tom Schneider',
      date: '3. Januar 2024',
      readTime: '15 min',
      category: 'Technical SEO',
      image: 'https://images.pexels.com/photos/6498304/pexels-photo-6498304.jpeg',
      tags: ['Schema Markup', 'Technical SEO', 'Structured Data', 'Implementation']
    }
  ];

  const categories = [
    { name: 'AEO Strategy', count: 12, color: 'text-primary-400' },
    { name: 'Local SEO', count: 8, color: 'text-teal-400' },
    { name: 'SEO Tactics', count: 15, color: 'text-coral-400' },
    { name: 'Content Strategy', count: 10, color: 'text-purple-400' },
    { name: 'Technical SEO', count: 7, color: 'text-green-400' },
    { name: 'Marketing Trends', count: 9, color: 'text-yellow-400' }
  ];

  return (
    <section id="blog" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
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
            AEO <span className="gradient-text">Insights</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Exklusive Einblicke in die Welt der Answer Engine Optimization. 
            Strategien, Trends und Praxistipps direkt von unseren Hamburg-Experten.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <motion.article
              className="glass-morphism rounded-3xl overflow-hidden mb-12 hover-glow group"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${blogPosts[0].image})` }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogPosts[0].tags.map((tag, index) => (
                      <span key={index} className="bg-dark-700/50 text-gray-400 px-2 py-1 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-teal-500 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">{blogPosts[0].author}</div>
                        <div className="text-gray-400 text-xs flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{blogPosts[0].date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <motion.button
                      className="text-primary-400 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all"
                      whileHover={{ x: 5 }}
                    >
                      <span>Weiterlesen</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.slice(1, 5).map((post, index) => (
                <motion.article
                  key={post.id}
                  className="glass-morphism rounded-2xl overflow-hidden hover-glow group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-500/80 backdrop-blur-lg text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-gray-400 text-sm mb-3">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-heading font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-dark-700/50 text-gray-400 px-2 py-1 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-teal-500 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-white text-xs">{post.author}</div>
                          <div className="text-gray-400 text-xs">{post.date}</div>
                        </div>
                      </div>
                      
                      <ArrowRight className="h-4 w-4 text-primary-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.5 }}
            >
              <motion.a
                href="/#contact"
                className="gradient-primary px-8 py-4 rounded-full text-white font-semibold hover-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Weitere Artikel laden
              </motion.a>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Categories */}
              <motion.div
                className="glass-morphism p-6 rounded-2xl"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1 }}
              >
                <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center space-x-2">
                  <Tag className="h-5 w-5 text-primary-400" />
                  <span>Kategorien</span>
                </h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-xl bg-dark-800/50 hover:bg-dark-800 transition-colors cursor-pointer group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <span className={`font-medium ${category.color} group-hover:text-white transition-colors`}>
                        {category.name}
                      </span>
                      <span className="bg-primary-500/20 text-primary-400 px-2 py-1 rounded text-xs">
                        {category.count}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                className="glass-morphism p-6 rounded-2xl"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.3 }}
              >
                <h3 className="text-xl font-heading font-bold text-white mb-4">
                  AEO Newsletter
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  Bleiben Sie auf dem neuesten Stand der Answer Engine Optimization. 
                  Exklusive Insights direkt in Ihr Postfach.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    className="w-full bg-dark-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                  />
                  <motion.a
                    href="/#contact"
                    className="w-full gradient-primary py-3 rounded-xl text-white font-semibold hover-glow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Abonnieren
                  </motion.a>
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  Kein Spam. Jederzeit abbestellbar.
                </p>
              </motion.div>

              {/* Recent Posts */}
              <motion.div
                className="glass-morphism p-6 rounded-2xl"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.4 }}
              >
                <h3 className="text-xl font-heading font-bold text-white mb-6">
                  Neueste Artikel
                </h3>
                <div className="space-y-4">
                  {blogPosts.slice(4, 6).map((post, index) => (
                    <motion.div
                      key={post.id}
                      className="flex space-x-3 p-3 rounded-xl bg-dark-800/50 hover:bg-dark-800 transition-colors cursor-pointer group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.5 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div 
                        className="w-16 h-16 bg-cover bg-center rounded-xl flex-shrink-0"
                        style={{ backgroundImage: `url(${post.image})` }}
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white text-sm font-semibold line-clamp-2 group-hover:text-primary-400 transition-colors">
                          {post.title}
                        </h4>
                        <div className="text-gray-400 text-xs mt-1 flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
