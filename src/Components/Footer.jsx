import React from 'react';

const Footer = () => {
  // Static footer data
  const footerData = {
    social: [
      {
        name: 'Facebook',
        href: 'https://facebook.com',
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        )
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com',
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        )
      },
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        )
      },
      {
        name: 'YouTube',
        href: 'https://youtube.com',
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        )
      }
    ],
    links: {
      product: [
        { name: 'Grid & Layouts', href: '/product/grids' },
        { name: 'Typography', href: '/product/typography' },
        { name: 'Media Manager', href: '/product/media' },
        { name: 'Form Builder', href: '/product/forms' },
        { name: 'Pop-Up Builder', href: '/product/popups' },
        { name: 'Interaction & Animations', href: '/product/interactions' },
        { name: 'Accessibility', href: '/product/accessibility' }
      ],
      company: [
        { name: 'Affiliates', href: '/company/affiliates' },
        { name: 'Terms & Privacy', href: '/company/terms' },
        { name: 'Cookie', href: '/company/cookies' }
      ],
      resources: [
        { name: 'Blog', href: '/blog' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Release Notes', href: '/releases' }
      ],
      support: [
        { name: 'Pricing', href: '/pricing' },
        { name: 'Contact Us', href: '/contact' }
      ]
    }
  };

  return (
    <footer className="bg-white">
      {/* CTA Banner Section with Gradient */}
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto max-w-6xl px-4 py-12 lg:py-16 relative">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - CTA Text */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                List your business today!
              </h2>
            </div>

            {/* Right Side - URL Input and CTA */}
            <div className="text-center lg:text-right">
              <div className="mb-6">
                <div className="inline-flex items-center bg-white rounded-2xl p-2 shadow-xl max-w-md w-full">
                  <div className="flex items-center px-4 py-3">
                    <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <span className="text-gray-900 font-mono">onex.com/</span>
                    <input
                      type="text"
                      placeholder="username"
                      className="bg-transparent text-gray-600 placeholder-gray-400 border-none outline-none flex-1 text-sm"
                      defaultValue=""
                    />
                  </div>
                  <button 
                    className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors"
                    onClick={() => console.log('Create profile clicked')}
                  >
                    Create Your Profile - Free
                  </button>
                </div>
              </div>

              <div className="text-center">
                <p className="text-white text-lg font-medium mb-2">
                  Unlock your online business growth,
                </p>
                <p className="text-blue-200 text-sm">
                  Join 2500 businesses!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-white py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Social</h3>
              <ul className="space-y-3">
                {footerData.social.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-gray-400 group-hover:text-gray-600 transition-colors mr-3">
                        {item.icon}
                      </span>
                      <span className="text-sm">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Links */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-3">
                {footerData.links.product.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                {footerData.links.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerData.links.resources.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-3">
                {footerData.links.support.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 border-t border-gray-200 py-6">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-4">
              <p className="text-sm text-gray-500">
                © 2025 Drolp. All rights reserved
              </p>
            </div>

            {/* Branding */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">A Product by</span>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-gray-900 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">T</span>
                </div>
                <span className="font-semibold text-gray-900">themeum</span>
              </div>
              <div className="ml-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                Made in Drolp
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
