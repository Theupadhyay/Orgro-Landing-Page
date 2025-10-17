import React from 'react';

const BusinessFlow = () => {
  return (
    <div className="absolute right-8 top-1/4 transform -translate-y-1/2 hidden lg:block">
      <div className="flex flex-col items-end space-y-6">
        {/* Lead Management */}
        <div className="flex items-center space-x-3">
          <div className="bg-blue-100 text-blue-600 px-3 py-2 rounded-lg text-sm font-semibold">
            🔍 Lead Management
          </div>
        </div>

        {/* Website Badge */}
        <div className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm font-semibold">
          Website 🌐
        </div>

        {/* Customer Enquiries */}
        <div className="flex items-center space-x-3 mt-32">
          <div className="bg-blue-100 text-blue-600 px-3 py-2 rounded-lg text-sm font-semibold">
            🔍 Customer Enquries
          </div>
        </div>

        {/* CRM */}
        <div className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm font-semibold">
          CRM 📊
        </div>

        {/* Social Media Manager */}
        <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold">
          Social Media Manager 📱
        </div>

        {/* Online Directories Section */}
        <div className="mt-16">
          <h4 className="text-sm font-semibold text-gray-600 mb-4 text-center">
            ONLINE DIRECTORIES
          </h4>
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs font-bold">
              M
            </div>
            <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center text-white text-xs">
              ✦
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
              □
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessFlow;
