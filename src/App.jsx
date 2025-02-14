import React from 'react';
import ProfileCard from './components/ProfileCard';
import ResumeSection from './components/ResumeSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <ProfileCard />
        </div>
        <div className="lg:col-span-2">
          <ResumeSection />
        </div>
      </div>
    </div>
  )
}

export default App

