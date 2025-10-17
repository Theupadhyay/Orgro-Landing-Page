import React, { useState } from 'react';

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState('Digital Business');

  const pricingPlans = [
    {
      id: 'business-automation',
      name: 'Business Automation',
      subtitle: 'Automate your growth',
      price: '₹1999',
      period: '/month',
      originalPrice: '₹16,510 billed quarterly',
      discount: 'Save 20%',
      target: 'Future-focused businesses & innovators',
      features: [
        'Basic profile (8 sections only)',
        '2 trust badges',
        'Share your profile',
        'Advanced automation tools'
      ],
      buttonText: 'Coming Soon!',
      buttonStyle: 'bg-gray-900 text-white cursor-not-allowed',
      isComingSoon: true,
      isPopular: false
    },
    {
      id: 'digital-business',
      name: 'Digital Business',
      subtitle: 'Get online, build trust',
      price: '₹1499',
      period: '/month',
      originalPrice: '₹16,510 billed quarterly',
      discount: 'Save 20%',
      target: 'Growing MSMEs building their brand',
      features: [
        'Full profile setup',
        'Marketing Kit',
        'Templates',
        'CTA Tools'
      ],
      buttonText: 'Get Started',
      buttonStyle: 'bg-gray-900 text-white hover:bg-gray-800 transition-colors',
      isComingSoon: false,
      isPopular: true,
      highlight: 'bg-blue-50 border-2 border-blue-200'
    },
    {
      id: 'innovation-research',
      name: 'Innovation & Research',
      subtitle: 'Lead innovation with smart digital advantage',
      price: '₹3499',
      period: '/month',
      originalPrice: '₹16,510 billed quarterly',
      discount: 'Save 20%',
      target: 'Established businesses scaling operations',
      features: [
        'All Digital Business features',
        'Advanced analytics',
        'Priority support',
        'Custom integrations'
      ],
      buttonText: 'Coming Soon!',
      buttonStyle: 'bg-gray-900 text-white cursor-not-allowed',
      isComingSoon: true,
      isPopular: false,
      badge: 'Most Popular'
    }
  ];

  const handlePlanClick = (planName) => {
    setSelectedPlan(planName);
    console.log(`Plan selected: ${planName}`);
    // Add your plan selection logic here
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center py-6">
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

        {/* Pricing Cards Container */}
        <div className="bg-white rounded-3xl border-2 border-blue-100 p-6 lg:p-8 shadow-xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => {
              const isSelected = selectedPlan === plan.name;
              
              return (
                <div
                  key={plan.id}
                  className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                    plan.isPopular 
                      ? plan.highlight || 'bg-blue-50 border-2 border-blue-200'
                      : isSelected 
                        ? 'bg-gray-50 border-2 border-gray-300 shadow-md'
                        : 'bg-white border border-gray-100'
                  }`}
                  onClick={() => handlePlanClick(plan.name)}
                >
                  {/* Selection Indicator */}
                  {isSelected && !plan.isPopular && (
                    <div className="absolute -top-2 -right-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Popular Badge */}
                  {plan.badge && (
                    <div className="absolute -top-3 right-4">
                      <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        {plan.badge}
                      </div>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {plan.subtitle}
                    </p>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-baseline mb-2">
                        <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                          {plan.price}
                        </span>
                        <span className="text-gray-600 ml-1">{plan.period}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="text-gray-500">{plan.originalPrice}</span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                          {plan.discount}
                        </span>
                      </div>
                    </div>

                    {/* Target Audience */}
                    <div className="flex items-start space-x-2 mb-6">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {plan.target}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-300 ${plan.buttonStyle}`}
                    disabled={plan.isComingSoon}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!plan.isComingSoon) {
                        handlePlanClick(plan.name);
                        // Add your purchase logic here
                        console.log(`Purchase button clicked for: ${plan.name}`);
                      }
                    }}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
