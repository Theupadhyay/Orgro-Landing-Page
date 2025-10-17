import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import SocialMedia from './components/SocialMedia';
import BusinessFlow from './components/BusinessFlow';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
      <Header />
      <Hero />
      <div className="relative">
        {/* <SocialMedia />
        <BusinessFlow /> */}
      </div>
    </div>
  );
}

export default App;
