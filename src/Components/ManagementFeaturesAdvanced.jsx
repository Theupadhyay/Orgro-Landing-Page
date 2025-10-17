import React, { useState } from 'react';

const ManagementFeaturesAdvanced = () => {
  const [activeFeature, setActiveFeature] = useState('Quotation & Invoicing');

  const features = [
    {
      id: 1,
      name: 'Quotation & Invoicing',
      icon: '💼',
      description: 'Create professional quotes and invoices instantly',
      color: 'bg-gray-900 text-white',
      isActive: true
    },
    {
      id: 2,
      name: 'Brand Assets Hub',
      icon: '🎨',
      description: 'Centralized brand resource management',
      color: 'bg-orange-100 text-orange-600',
      isActive: false
    },
    {
      id: 3,
      name: 'Review & Feedback Management',
      icon: '📊',
      description: 'Track customer reviews and feedback',
      color: 'bg-pink-100 text-pink-600',
      isActive: false
    },
    {
      id: 4,
      name: 'Lead Management',
      icon: '📈',
      description: 'Capture and nurture potential customers',
      color: 'bg-green-100 text-green-600',
      isActive: false
    },
    {
      id: 5,
      name: 'Analytics & Insights',
      icon: '🚀',
      description: 'Data-driven business insights',
      color: 'bg-blue-100 text-blue-600',
      isActive: false
    },
    {
      id: 6,
      name: 'Project Management',
      icon: '📋',
      description: 'Organize and track project progress',
      color: 'bg-cyan-100 text-cyan-600',
      isActive: false
    },
    {
      id: 7,
      name: 'Automation Tools',
      icon: '💡',
      description: 'Streamline repetitive tasks',
      color: 'bg-purple-100 text-purple-600',
      isActive: false
    },
    {
      id: 8,
      name: 'Performance Tracking',
      icon: '⚡',
      description: 'Monitor business performance metrics',
      color: 'bg-yellow-100 text-yellow-600',
      isActive: false
    }
  ];

  const getActiveFeature = () => {
    return features.find(feature => feature.name === activeFeature || feature.isActive);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Top AI Badge */}
        <div className="flex justify-center mb-8">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-white px-6 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                All-in-one AI powered suite
              </span>
            </button>
          </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Title & Description */}
          <div className="lg:sticky lg:top-8">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Easy Management.
              <br />
              <span className="block">With Powerful Features</span>
            </h2>
            
            {/* Active Feature Description */}
            <div className="mt-8 p-6 bg-white rounded-xl border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getActiveFeature()?.color || 'bg-gray-100'}`}>
                  <span className="text-lg">{getActiveFeature()?.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {getActiveFeature()?.name}
                </h3>
              </div>
              <p className="text-gray-600">
                {getActiveFeature()?.description}
              </p>
            </div>
          </div>

          {/* Right Side - Features List */}
          <div className="relative">
            {/* Main Features List */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 space-y-2">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.name)}
                  className={`flex items-center space-x-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeFeature === feature.name || feature.isActive
                      ? 'bg-gray-900 text-white shadow-lg transform scale-[1.02]'
                      : 'hover:bg-gray-50 hover:shadow-md'
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-colors ${
                    activeFeature === feature.name || feature.isActive
                      ? 'bg-white/20 text-white'
                      : feature.color
                  }`}>
                    <span className="text-base">{feature.icon}</span>
                  </div>
                  
                  <span className={`font-medium text-base flex-1 ${
                    activeFeature === feature.name || feature.isActive
                      ? 'text-white'
                      : 'text-gray-700'
                  }`}>
                    {feature.name}
                  </span>

                  {/* Active Indicator */}
                  {(activeFeature === feature.name || feature.isActive) && (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/3 -right-2 w-4 h-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-50 animate-ping" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Bottom Section Divider */}
        <div className="mt-20 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-8 h-1 bg-blue-200 rounded-full opacity-60"></div>
            <div className="w-4 h-1 bg-blue-300 rounded-full opacity-40"></div>
            <div className="w-2 h-1 bg-blue-400 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementFeaturesAdvanced;
