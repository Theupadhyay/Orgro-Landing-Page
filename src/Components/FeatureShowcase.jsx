import React from 'react';

const FeatureShowcase = () => {
  const features = [
    {
      id: 'indiamart',
      title: 'Indiamart',
      subtitle: 'send, track, and close deals faster.',
      mockup: '/path/to/indiamart-mockup.png',
      mockupAlt: 'Indiamart app interface mockup'
    },
    {
      id: 'expo',
      title: 'Expo',
      subtitle: 'store all visuals, documents, and certificates.',
      mockup: '/path/to/expo-mockup.png',
      mockupAlt: 'Expo app interface mockup'
    }
  ];

  const services = [
    {
      id: 'marketing-automation',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Marketing Automation',
      description: 'Reach your audience everywhere — without manual effort.'
    },
    {
      id: 'operations-management',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Operations Management',
      description: 'Streamline daily activities and stay organized effortlessly.'
    },
    {
      id: 'growth-engine',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Growth Engine',
      description: 'Use real-time analytics to make smarter decisions.'
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-white px-6 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                All-in-one AI powered suite
              </span>
            </button>
          </div>    
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Pricing
          </h2>
        </div>

        {/* Feature Showcase Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`rounded-3xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl ${
                index === 0 
                  ? 'bg-white border-2 border-blue-200' 
                  : 'bg-white border border-gray-200'
              }`}
            >
              {/* App Mockup */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  {/* Phone Mockup Frame */}
                  <div className="w-64 h-96 bg-gray-100 rounded-3xl p-4 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                      {/* Mockup Content Placeholder */}
                      <div className="p-4">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                            <div>
                              <div className="w-16 h-2 bg-gray-300 rounded mb-1"></div>
                              <div className="w-12 h-2 bg-gray-200 rounded"></div>
                            </div>
                          </div>
                          <div className="w-6 h-6 bg-gray-300 rounded"></div>
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-3">
                          <div className="w-full h-3 bg-gray-200 rounded"></div>
                          <div className="w-4/5 h-3 bg-gray-200 rounded"></div>
                          <div className="w-full h-20 bg-gray-100 rounded-lg"></div>
                          <div className="w-3/5 h-3 bg-gray-200 rounded"></div>
                        </div>
                        
                        {/* Button */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="w-full h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-xs font-medium">
                              Never lose a lead again — manage all your customers in one place
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Info */}
              <div className="text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="text-center p-6 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-6">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;
