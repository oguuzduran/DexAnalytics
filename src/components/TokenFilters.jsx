import React, { useState } from 'react';
import { 
  FaExchangeAlt, 
  FaFire, 
  FaGamepad, 
  FaRocket, 
  FaFootballBall,
  FaUserAstronaut,
  FaLaughBeam,
  FaCrown,
  FaFilter,
  FaChevronDown
} from 'react-icons/fa';

const TokenFilters = () => {
  const [selectedMenu, setSelectedMenu] = useState('hot-pairs');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const menuItems = [
    { id: 'hot-pairs', label: 'Hot Pairs', isNew: true },
    { id: 'tokens-race', label: "Token's Race" },
    { id: 'pairs', label: 'Pairs' },
    { id: 'token-creator', label: 'Token Creator' },
    { id: 'new-socials', label: 'New Socials' },
    { id: 'exchanges', label: 'Exchanges' },
    { id: 'liquidity-unlocks', label: 'Liquidity Unlocks' },
    { id: 'token-unlocks', label: 'Token Unlocks' }
  ];

  const categories = [
    { id: 'exchange', icon: FaExchangeAlt, label: 'Exchange', color: 'text-blue-500' },
    { id: 'defi', icon: FaFire, label: 'DeFi', color: 'text-orange-500' },
    { id: 'meme', icon: FaLaughBeam, label: 'MEME', color: 'text-yellow-500' },
    { id: 'ai', icon: FaUserAstronaut, label: 'AI', color: 'text-purple-500' },
    { id: 'nfts', icon: FaCrown, label: 'NFTs', color: 'text-pink-500' },
    { id: 'gaming', icon: FaGamepad, label: 'Gaming', color: 'text-green-500' },
    { id: 'sports', icon: FaFootballBall, label: 'Sports', color: 'text-red-500' },
    { id: 'celebrity', icon: FaUserAstronaut, label: 'Celebrity', color: 'text-indigo-500' },
    { id: 'fun', icon: FaLaughBeam, label: 'Fun Token', color: 'text-cyan-500' },
    { id: 'cto', icon: FaRocket, label: 'CTO', color: 'text-teal-500' }
  ];

  return (
    <div>
      {/* Üst Menü */}
      <div className="flex items-center justify-between mb-3">
        <div className="inline-flex items-center bg-[#0F1722] rounded-lg overflow-hidden border border-gray-800">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedMenu(item.id)}
              className={`flex items-center justify-center space-x-1.5 px-4 py-1.5 min-w-fit text-sm font-medium transition-colors ${
                selectedMenu === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-[#1E2329]'
              }`}
            >
              <div className="flex items-center">
                {item.label}
                {item.isNew && (
                  <span className="ml-1.5 px-1.5 py-0.5 bg-blue-500/10 text-blue-400 text-xs rounded-sm uppercase tracking-wide">
                    New
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-1.5">
          <button className="flex items-center space-x-1 bg-[#0F1722] border border-gray-800 px-3 py-1.5 rounded-lg text-sm text-gray-400 hover:bg-[#1E2329] transition-colors">
            <span>All</span>
            <FaChevronDown className="w-3 h-3" />
          </button>
          <button className="flex items-center space-x-1 bg-[#0F1722] border border-gray-800 px-3 py-1.5 rounded-lg text-sm text-gray-400 hover:bg-[#1E2329] transition-colors">
            <span>24h</span>
            <FaChevronDown className="w-3 h-3" />
          </button>
          <button className="flex items-center space-x-1 bg-[#0F1722] border border-gray-800 px-3 py-1.5 rounded-lg text-sm text-gray-400 hover:bg-[#1E2329] transition-colors">
            <FaFilter className="w-3 h-3" />
            <span>Custom filters</span>
          </button>
        </div>
      </div>

      {/* Kategori Menüsü */}
      <div className="inline-flex items-center bg-[#0F1722] rounded-lg overflow-hidden border border-gray-800 mb-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center justify-center space-x-1.5 px-4 py-1.5 min-w-fit text-xs font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'hover:text-white hover:bg-[#1E2329]'
            }`}
          >
            <category.icon className={`w-3.5 h-3.5 ${selectedCategory === category.id ? 'text-white' : category.color}`} />
            <span className={selectedCategory === category.id ? 'text-white' : 'text-gray-400'}>{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TokenFilters; 