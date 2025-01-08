import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0B1217] text-white flex">
      <Sidebar />
      <div className="flex-1 pl-16 flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20 px-6">
          <Home />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App; 