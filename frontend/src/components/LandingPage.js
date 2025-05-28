import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import ProcessSection from './ProcessSection';
import TestimonialsSection from './TestimonialsSection';
import PortfolioSection from './PortfolioSection';
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import Navigation from './Navigation';

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>AEO Hamburg - Führende Answer Engine Optimization Agentur</title>
        <meta name="description" content="Die führende Performance Marketing Agentur in Hamburg. Spezialisiert auf Answer Engine Optimization (AEO), SEO, SEA und Social Media Marketing. Hanseatische Kompetenz trifft moderne Technologie." />
        <meta name="keywords" content="AEO Hamburg, Answer Engine Optimization, Performance Marketing, SEO Hamburg, SEA, Social Media Marketing, Inbound Marketing, Outbound Marketing" />
        <meta property="og:title" content="AEO Hamburg - Führende Answer Engine Optimization Agentur" />
        <meta property="og:description" content="Die führende Performance Marketing Agentur in Hamburg. Spezialisiert auf Answer Engine Optimization (AEO), SEO, SEA und Social Media Marketing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aeo-hamburg.de" />
        <link rel="canonical" href="https://aeo-hamburg.de" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AEO Hamburg",
            "description": "Führende Performance Marketing Agentur spezialisiert auf Answer Engine Optimization",
            "url": "https://aeo-hamburg.de",
            "telephone": "+49 40 123456789",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Landungsbrücken 1",
              "addressLocality": "Hamburg",
              "postalCode": "20359",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 53.5448,
              "longitude": 9.9658
            },
            "sameAs": [
              "https://www.linkedin.com/company/aeo-hamburg",
              "https://www.xing.com/companies/aeo-hamburg"
            ],
            "service": [
              {
                "@type": "Service",
                "name": "Answer Engine Optimization (AEO)",
                "description": "Strategische Optimierung für Antwort-Suchmaschinen und Voice Search"
              },
              {
                "@type": "Service", 
                "name": "Search Engine Optimization (SEO)",
                "description": "Professionelle Suchmaschinenoptimierung für nachhaltige Sichtbarkeit"
              },
              {
                "@type": "Service",
                "name": "Social Media Marketing",
                "description": "Strategische Social Media Kampagnen für maximale Reichweite"
              }
            ]
          })}
        </script>
      </Helmet>
      
      <div className="relative min-h-screen bg-dark-900">
        <Navigation />
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <PortfolioSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
