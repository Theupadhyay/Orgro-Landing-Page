import React, { useMemo, useState, useEffect, useRef, useCallback } from 'react';

const TestimonialStatsAdvanced = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});
  const sectionRef = useRef(null);

  // Memoized statistics data
  const stats = useMemo(() => [
    {
      id: 1,
      value: 10000,
      displayValue: "10,000+",
      label: "businesses onboarded",
      color: "text-blue-600",
      suffix: "+"
    },
    {
      id: 2,
      value: 3,
      displayValue: "3x increase",
      label: "in enquiries within 30 days",
      color: "text-blue-600",
      suffix: "x increase"
    },
    {
      id: 3,
      value: 70,
      displayValue: "70%",
      label: "of businesses saved costs on marketing",
      color: "text-blue-600",
      suffix: "%"
    },
    {
      id: 4,
      value: 50,
      displayValue: "50+",
      label: "industries represented",
      color: "text-blue-600",
      suffix: "+"
    }
  ], []);

  // Optimized brand logos with reduced memory footprint
  const brands = useMemo(() => [
    'gilvy', 'Forbes', 'dyson', 'SIEMENS', 'Ogilvy', 'Forbes', 
    'dyson', 'Ogilvy', 'Forbes', 'dyson', 'Ogilvy'
  ], []);

  // Intersection Observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startAnimation();
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Optimized number animation
  const startAnimation = useCallback(() => {
    stats.forEach((stat) => {
      let current = 0;
      const increment = Math.ceil(stat.value / 60); // 60 frames for smooth animation
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        
        setAnimatedStats(prev => ({
          ...prev,
          [stat.id]: formatNumber(current, stat)
        }));
      }, 16); // ~60fps
    });
  }, [stats]);

  // Optimized number formatting
  const formatNumber = useCallback((num, stat) => {
    if (stat.id === 1) return `${(num / 1000).toFixed(0)},${String(num % 1000).padStart(3, '0')}+`;
    if (stat.id === 2) return `${num}x increase`;
    if (stat.id === 3) return `${num}%`;
    if (stat.id === 4) return `${num}+`;
    return num.toString();
  }, []);

  return (
    <div className="bg-gray-50 py-16 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl px-4">
        {/* Main Quote Section */}
        <div className="text-center mb-16">
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-12 max-w-4xl mx-auto">
            "EC OneX is already helping businesses grow visibility, enquiries, and opportunities."
          </blockquote>
          
          {/* Animated Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
            {stats.map((stat) => (
              <div 
                key={stat.id} 
                className={`text-center transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${stat.id * 200}ms` }}
              >
                <div className={`text-4xl md:text-5xl lg:text-6xl font-bold ${stat.color} mb-2 tabular-nums`}>
                  {animatedStats[stat.id] || (isVisible ? stat.displayValue : '0')}
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Badge */}
          <div className="flex justify-center mb-12">
            <div className="bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-gray-600 text-sm font-medium">Real Growth, Real Businesses</span>
            </div>
          </div>
        </div>

        {/* Optimized Infinite Scrolling Brands */}
        <div className="relative select-none">
          {/* Performance optimized gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Container with GPU acceleration */}
          <div className="flex overflow-hidden will-change-transform">
            <div 
              className="flex animate-infinite-scroll space-x-16 md:space-x-20 lg:space-x-24"
              style={{ 
                transform: 'translateZ(0)', // Force GPU acceleration
                backfaceVisibility: 'hidden'
              }}
            >
              {/* Render brands twice for seamless loop */}
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center h-16 md:h-20"
                  style={{ 
                    minWidth: '120px',
                    willChange: 'transform' // Optimize for animation
                  }}
                >
                  <span className="text-gray-400 font-medium text-xl md:text-2xl lg:text-3xl whitespace-nowrap font-mono">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Memoized export for maximum performance
export default React.memo(TestimonialStatsAdvanced);
