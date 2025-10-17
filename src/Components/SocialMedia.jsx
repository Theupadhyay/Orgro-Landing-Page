import React from 'react';

const SocialMedia = () => {
  const socialIcons = [
    { name: 'Facebook', color: 'bg-red-500', initial: 'f' },
    { name: 'Twitter', color: 'bg-yellow-500', initial: '✦' },
    { name: 'LinkedIn', color: 'bg-blue-600', initial: 'in' }
  ];

  return (
    <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
      <div className="flex flex-col space-y-4">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">
          SOCIAL<br />MEDIA
        </h3>
        
        {socialIcons.map((icon, index) => (
          <div key={index} className={`w-12 h-12 ${icon.color} rounded-lg flex items-center justify-center text-white font-bold cursor-pointer hover:scale-110 transition-transform`}>
            {icon.initial}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
