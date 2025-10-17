import React, { useState, useRef, useEffect } from 'react';
import ManagementFeaturesAdvanced from './ManagementFeaturesAdvanced';
import TestimonialStats from './TestimonialStats';
import PricingSection from './PricingSection';
import FeatureShowcase from './FeatureShowcase';
import FAQ from './FAQ';
import Footer from './Footer';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('online-presence');
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabs = [
    { id: 'online-presence', label: '🌐 Online Presence', icon: '🌐' },
    { id: 'customer-acquisition', label: '🎯 Customer Acquisition', icon: '🎯' },
    { id: 'operations', label: '📊 Operations', icon: '📊' },
    { id: 'growth-expansion', label: '🚀 Growth & Expansion', icon: '🚀' },
    { id: 'analytics', label: '📈 Growth & Expansion', icon: '📈' }
  ];

  // Industry data - duplicated for infinite scroll
  const industries = [
    {
      id: 1,
      name: 'Manufacturing',
      description: 'Streamline daily activities and stay organized effortlessly',
      icon: '🏭',
      isHighlighted: true
    },
    {
      id: 2,
      name: 'Healthcare',
      description: 'Enhance patient care and medical operations',
      icon: '🏥',
      isHighlighted: false
    },
    {
      id: 3,
      name: 'Technology',
      description: 'Scale tech solutions and innovation processes',
      icon: '💻',
      isHighlighted: false
    },
    {
      id: 4,
      name: 'Retail',
      description: 'Optimize sales and customer experience',
      icon: '🛍️',
      isHighlighted: false
    },
    {
      id: 5,
      name: 'Food & Beverage',
      description: 'Manage supply chain and quality control',
      icon: '🍽️',
      isHighlighted: false
    },
    {
      id: 6,
      name: 'Construction',
      description: 'Streamline project management and workflows',
      icon: '🏗️',
      isHighlighted: false
    },
    {
      id: 7,
      name: 'Education',
      description: 'Transform learning and administrative processes',
      icon: '🎓',
      isHighlighted: false
    }
  ];

  // Duplicate industries for infinite scroll
  const infiniteIndustries = [...industries, ...industries, ...industries];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex >= industries.length) {
          return 0;
        }
        return newIndex;
      });
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, [industries.length]);

  // Smooth scroll effect
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 320; // w-80 = 320px
      const offset = currentIndex * cardWidth;
      scrollRef.current.scrollTo({
        left: offset,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  // Function to get content based on active tab
  const getTabContent = (tabId) => {
    switch (tabId) {
      case 'online-presence':
        return {
          title: 'Your business headquarters on the web',
          description: 'Complete profile with products, services, team, certifications, and portfolio. SEO-optimized so customers find you on Google. Updates reflect everywhere instantly —no website maintenance costs.',
          features: [
            '✓ Replace traditional website',
            '✓ Mobile-optimized for WhatsApp sharing',
            '✓ Embed in email signatures, invoices, social bios'
          ]
        };
      case 'customer-acquisition':
        return {
          title: 'Attract and convert prospects',
          description: 'Advanced lead generation tools and customer acquisition strategies to grow your business.',
          features: [
            '✓ Lead capture forms',
            '✓ Automated follow-ups',
            '✓ Conversion tracking'
          ]
        };
      case 'operations':
        return {
          title: 'Streamline your operations',
          description: 'Manage your business operations efficiently with our comprehensive tools.',
          features: [
            '✓ Order management',
            '✓ Inventory tracking',
            '✓ Process automation'
          ]
        };
      case 'growth-expansion':
        return {
          title: 'Scale your business',
          description: 'Tools and insights to help you expand and grow your business reach.',
          features: [
            '✓ Market analysis',
            '✓ Growth strategies',
            '✓ Performance metrics'
          ]
        };
      case 'analytics':
        return {
          title: 'Data-driven insights',
          description: 'Comprehensive analytics to understand your business performance.',
          features: [
            '✓ Real-time reporting',
            '✓ Customer insights',
            '✓ ROI tracking'
          ]
        };
      default:
        return {
          title: 'Your business headquarters on the web',
          description: 'Complete profile with products, services, team, certifications, and portfolio.',
          features: ['✓ Professional presence', '✓ Easy management', '✓ Growth tools']
        };
    }
  };

  const currentContent = getTabContent(activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Container to center everything */}
      <div className="container mx-auto max-w-6xl px-4">
        <section className="py-8 sm:py-12">
          <div className="text-center mb-8 lg:mb-12">
            {/* Responsive Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Grow Your{' '}
              <span className="text-blue-600 block sm:inline">Manufacturing</span>
              <br className="hidden sm:block" />
              Business Online
            </h1>
            
            {/* Responsive Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
              Get new customers, manage visibility, inquiries, and business opportunities from one 
              place — a complete suite to power your online business growth.
            </p>

            {/* Responsive URL Input Section */}
            <div className="max-w-sm sm:max-w-md lg:max-w-lg mx-auto mb-8">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg">
                <div className="flex items-center px-3 sm:px-4 py-3 bg-gray-100 border-b sm:border-b-0 sm:border-r">
                  <span className="text-gray-600 font-mono text-sm sm:text-base">onex.com/</span>
                </div>
                <input
                  type="text"
                  placeholder="company_name"
                  className="flex-1 px-3 sm:px-4 py-3 focus:outline-none text-gray-600 text-sm sm:text-base"
                />
              </div>
              
              <button className="w-full mt-4 bg-black text-white py-3 sm:py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-sm sm:text-base">
                List your business - FREE
              </button>
              
              <p className="text-xs sm:text-sm text-gray-500 mt-2 px-2 sm:px-0">
                Ready in 5 minutes. 2,500+ businesses already growing
              </p>
              
              <a href="#" className="text-blue-600 text-xs sm:text-sm underline hover:no-underline">
                Visit the business directory
              </a>
            </div>
          </div>

          {/* AI Powered Button */}
          <div className="flex justify-center mb-8">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-white px-6 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                All-in-one AI powered suite
              </span>
            </button>
          </div>

          {/* Dashboard/Image Section */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              <img 
                src="./image.png" 
                alt="Business Dashboard Preview" 
                className="w-full h-auto object-cover"
                style={{ maxHeight: '600px' }}
              />
            </div>
          </div>

          {/* Bottom AI Powered Banner */}
          <div className="flex justify-center py-6">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-white px-6 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                All-in-one AI powered suite
              </span>
            </button>
          </div>
        </section>
      </div>

      {/* Business Suite Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              One Powerful Suite, Built To Handle Every Part Of Your Online Business Growth
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              EC OneX brings all your growth pillars into one simple platform — from building your presence to converting and retaining customers.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic Tab Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {currentContent.title}
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {currentContent.description}
              </p>
              <div className="space-y-4">
                {currentContent.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-green-600">{feature.split(' ')[0]}</span>
                    <span className="text-gray-700">{feature.substring(2)}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🌐</span>
                </div>
                <p className="text-gray-600">Feature Preview</p>
              </div>
            </div>
          </div>

          {/* Bottom Feature Cards */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Professional marketing materials on demand</h4>
              <p className="text-sm text-gray-600">Generate marketing content instantly</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-2">Your business headquarters on the web</h4>
              <p className="text-sm text-gray-600">Complete online presence solution</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Post once, share everywhere</h4>
              <p className="text-sm text-gray-600">Multi-platform content distribution</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Transform Every Interaction Into a Growth Opportunity</h4>
              <p className="text-sm text-gray-600">Convert visitors into customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Industries We Serve Section - Full Width Auto-Scrolling Carousel */}
      <div className="bg-gray-50 py-16 overflow-hidden">
        {/* Centered Content */}
        <div className="container mx-auto max-w-6xl px-4 mb-12">
          {/* Top Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-sm font-medium">
              Industries We Serve
            </div>
          </div>

          {/* Section Title */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Built For Every Industry To Drive Digital Growth
            </h2>
          </div>
        </div>

        {/* Full Width Auto-Scrolling Carousel */}
        <div 
          ref={scrollRef}
          className="flex space-x-6 overflow-x-hidden px-6 mb-12"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
          onMouseEnter={() => setCurrentIndex(currentIndex)} // Pause on hover
        >
          {infiniteIndustries.map((industry, index) => (
            <div
              key={`${industry.id}-${index}`}
              className={`flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                industry.isHighlighted && index % industries.length === 0
                  ? 'ring-2 ring-blue-500 transform scale-105' 
                  : 'hover:transform hover:scale-102'
              }`}
            >
              {/* Industry Icon/Image */}
              <div className="bg-gray-100 rounded-lg h-48 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">{industry.icon}</div>
                  <div className="w-24 h-24 bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Industry Info */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          {industries.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA Section - Centered */}
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6 md:mb-0">
              <p className="text-lg text-gray-700">
                EC OneX powers industries across manufacturing, technology, and trade — 
                helping every business move from offline operations to digital growth.
              </p>
            </div>
            <div>
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold flex items-center space-x-2">
                <span>List your business for FREE</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ManagementFeaturesAdvanced />
      </div>
      <div>
        <TestimonialStats />
      </div>

      <div>
        <PricingSection />
      </div>

      <div>
        <FeatureShowcase />
      </div>

      <div>
        <FAQ  />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Hero;
