import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set(['is-ec-onex-free'])); // First item open by default

  // Memoized FAQ data to prevent recreation on re-renders
  const faqData = useMemo(() => [
    {
      id: 'is-ec-onex-free',
      question: 'Is EC OneX free to use?',
      answer: 'Yes! We offer a free plan for basic visibility. We also have paid plans with premium features for MSMEs and organizations needing advanced support.',
      isExpanded: true
    },
    {
      id: 'who-can-benefit',
      question: 'Who can benefit from EC OneX?',
      answer: 'EC OneX is designed for small to medium enterprises (SMEs), startups, freelancers, and organizations looking to establish or enhance their digital presence. Whether you\'re just starting online or scaling your business, our platform provides tools suited for various business stages and industries.',
      isExpanded: false
    },
    {
      id: 'how-to-get-started',
      question: 'How do I get started?',
      answer: 'Getting started with EC OneX is simple! Sign up for a free account, choose your business category, fill out your profile with basic information, and you\'ll be live online within minutes. Our step-by-step onboarding process guides you through setting up your digital presence.',
      isExpanded: false
    },
    {
      id: 'need-help-questions',
      question: 'What if I need help or have more questions?',
      answer: 'We\'re here to help! You can reach our support team through multiple channels: email support, live chat during business hours, comprehensive help documentation, video tutorials, and community forums. Premium plan users get priority support with dedicated account managers.',
      isExpanded: false
    },
    {
      id: 'data-security',
      question: 'How secure is my data on EC OneX?',
      answer: 'Data security is our top priority. We use enterprise-grade encryption, secure cloud infrastructure with 99.9% uptime, regular security audits, GDPR compliance, and secure data backups. Your business information is protected with bank-level security protocols.',
      isExpanded: false
    }
  ], []);

  // Optimized toggle function with useCallback to prevent unnecessary re-renders
  const toggleItem = useCallback((itemId) => {
    setOpenItems(prevOpenItems => {
      const newOpenItems = new Set(prevOpenItems);
      if (newOpenItems.has(itemId)) {
        newOpenItems.delete(itemId);
      } else {
        newOpenItems.add(itemId);
      }
      return newOpenItems;
    });
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            Frequently Asked <span className="text-gray-900">Questions</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openItems.has(item.id)}
              onToggle={toggleItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Memoized FAQ Item component for optimal performance
const FAQItem = React.memo(({ item, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(isOpen ? 'auto' : 0);

  // Optimized height calculation with useEffect
  useEffect(() => {
    if (contentRef.current) {
      const scrollHeight = contentRef.current.scrollHeight;
      setHeight(isOpen ? scrollHeight : 0);
    }
  }, [isOpen]);

  // Memoized click handler
  const handleClick = useCallback(() => {
    onToggle(item.id);
  }, [item.id, onToggle]);

  // Memoized icon component to prevent re-renders
  const ToggleIcon = useMemo(() => {
    return (
      <div className={`transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          )}
        </svg>
      </div>
    );
  }, [isOpen]);

  return (
    <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
      {/* Question Header */}
      <button
        className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors duration-200 hover:bg-gray-100"
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${item.id}`}
      >
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
          {item.question}
        </h3>
        <div className="flex-shrink-0 text-gray-500 hover:text-gray-700 transition-colors duration-200">
          {ToggleIcon}
        </div>
      </button>

      {/* Answer Content with Smooth Animation */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ 
          maxHeight: isOpen ? `${height}px` : '0px',
          opacity: isOpen ? 1 : 0
        }}
      >
        <div
          ref={contentRef}
          id={`faq-content-${item.id}`}
          className="px-6 pb-6"
          role="region"
          aria-labelledby={`faq-question-${item.id}`}
        >
          <div className="pt-2 border-t border-gray-200">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

// Set display name for debugging
FAQItem.displayName = 'FAQItem';

export default React.memo(FAQ);
