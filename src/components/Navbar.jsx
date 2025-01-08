import React, { useState } from 'react';
import { 
  FaSearch, 
  FaWallet, 
  FaBell, 
  FaUserCircle, 
  FaSun, 
  FaChevronDown,
  FaEthereum
} from 'react-icons/fa';

const SolanaIcon = () => (
  <svg 
    viewBox="0 0 397 311" 
    className="w-4 h-4"
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z" 
      fill="#9945FF"
    />
    <path 
      d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z" 
      fill="#9945FF"
    />
    <path 
      d="M328.4 120.9c-2.4-2.4-5.7-3.8-9.2-3.8H1.9c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.8-62.7z" 
      fill="#9945FF"
    />
  </svg>
);

const chains = [
  { id: 'solana', name: 'Solana', icon: SolanaIcon },
  { id: 'ethereum', name: 'Ethereum', icon: FaEthereum }
];

const Navbar = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [selectedChain, setSelectedChain] = useState('solana');
  const [isChainDropdownOpen, setIsChainDropdownOpen] = useState(false);

  const handleChainSelect = (chainId) => {
    setSelectedChain(chainId);
    setIsChainDropdownOpen(false);
  };

  const selectedChainData = chains.find(chain => chain.id === selectedChain);

  return (
    <nav className="bg-[#0B1217] border-b border-gray-800">
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Sol Taraf - Chain Select */}
          <div className="relative">
            <button
              onClick={() => setIsChainDropdownOpen(!isChainDropdownOpen)}
              className="flex items-center space-x-3 bg-[#0B1217] px-4 py-2.5 rounded-xl text-gray-300 hover:bg-[#2B3139] transition-all duration-200 border border-gray-800 min-w-[160px] group"
            >
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-7 h-7 rounded-lg bg-[#2B3139] flex items-center justify-center">
                  {selectedChainData.id === 'solana' ? (
                    <selectedChainData.icon />
                  ) : (
                    <selectedChainData.icon className="w-4 h-4 text-blue-500" />
                  )}
                </div>
                <span className="font-medium">{selectedChainData.name}</span>
              </div>
              <FaChevronDown className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${isChainDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Chain Dropdown */}
            {isChainDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-[160px] bg-[#0B1217] border border-gray-800 rounded-xl shadow-2xl z-50 py-1.5 overflow-hidden">
                {chains.map((chain) => (
                  <button
                    key={chain.id}
                    onClick={() => handleChainSelect(chain.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-2.5 text-gray-300 hover:bg-[#2B3139] transition-all duration-200 ${
                      selectedChain === chain.id ? 'bg-[#2B3139]' : ''
                    }`}
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#2B3139] flex items-center justify-center">
                      {chain.id === 'solana' ? (
                        <chain.icon />
                      ) : (
                        <chain.icon className="w-4 h-4 text-blue-500" />
                      )}
                    </div>
                    <span className="font-medium">{chain.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Orta - Search Bar */}
          <div className="flex-1 max-w-2xl mx-auto px-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by token name, symbol, or address..."
                className="w-full bg-[#0B1217] border border-gray-800 rounded-lg py-2 pl-10 pr-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Sağ Taraf - Buttons */}
          <div className="flex items-center space-x-4">
            {/* Connect Wallet Button */}
            <button className="flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition-colors">
              <FaWallet className="w-4 h-4" />
              <span>Connect Wallet</span>
            </button>

            {/* Notifications */}
            <button 
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="relative p-2 hover:bg-[#2B3139] rounded-lg transition-colors bg-[#0B1217] border border-gray-800"
            >
              <FaBell className="w-5 h-5 text-gray-400" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
            </button>

            {/* Theme Toggle */}
            <button className="p-2 hover:bg-[#2B3139] rounded-lg transition-colors bg-[#0B1217] border border-gray-800">
              <FaSun className="w-5 h-5 text-gray-400" />
            </button>

            {/* Profile */}
            <button className="flex items-center space-x-2 hover:bg-[#2B3139] px-3 py-2 rounded-lg transition-colors bg-[#0B1217] border border-gray-800">
              <FaUserCircle className="w-5 h-5 text-gray-400" />
              <FaChevronDown className="w-3 h-3 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 