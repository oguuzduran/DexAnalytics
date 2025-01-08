import React, { useState } from 'react';
import { 
  FaHome, 
  FaChartArea, 
  FaRocket, 
  FaExchangeAlt,
  FaChartPie,
  FaSync,
  FaChartBar,
  FaWallet,
  FaUser,
  FaGamepad,
  FaCubes,
  FaGlobe,
  FaStore,
  FaInfoCircle,
  FaCube
} from 'react-icons/fa';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { id: 'dashboard', icon: FaHome, label: 'DEXTboard' },
    { id: 'explorer', icon: FaChartArea, label: 'Pair Explorer' },
    { id: 'newpairs', icon: FaRocket, label: 'Live New Pairs' },
    { id: 'bigswap', icon: FaExchangeAlt, label: 'Big Swap Explorer' },
    { id: 'creator', icon: FaRocket, label: 'Token Creator' },
    { id: 'multichart', icon: FaChartPie, label: 'Multichart' },
    { id: 'multiswap', icon: FaSync, label: 'Multiswap' },
    { id: 'stats', icon: FaChartBar, label: 'Stats' },
    { id: 'wallet', icon: FaWallet, label: 'Wallet Info' },
    { id: 'user', icon: FaUser, label: 'User Area' },
    { id: 'fun', icon: FaGamepad, label: 'DX Fun' },
    { id: 'products', icon: FaCubes, label: 'Products' },
    { 
      id: 'extra',
      label: 'EXTRA',
      isSection: true,
      items: [
        { id: 'simulator', icon: FaChartPie, label: 'Simulator' },
        { id: 'dexswap', icon: FaExchangeAlt, label: 'DEXTswap' },
        { id: 'web', icon: FaGlobe, label: 'Web' },
        { id: 'marketplace', icon: FaStore, label: 'Marketplace', isNew: true },
        { id: 'tokeninfo', icon: FaInfoCircle, label: 'Update token info', isNew: true }
      ]
    }
  ];

  return (
    <div 
      className={`fixed top-0 left-0 bg-[#0B1217] h-screen shadow-2xl transition-all duration-300 ease-in-out z-50 ${
        isExpanded ? 'w-64' : 'w-16'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Logo */}
      <div className="h-16 flex items-center px-4 relative">
        <FaCube className="text-blue-500 w-6 h-6 shrink-0" />
        <div className={`ml-3 font-bold text-lg whitespace-nowrap absolute left-[40px] transition-all duration-300 origin-left ${
          isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          <span className="text-blue-500">Dex</span>
          <span className="text-white">Analytics</span>
        </div>
      </div>

      {/* Menu Items */}
      <div className="h-[calc(100vh-4rem)] overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.id}>
            {item.isSection ? (
              <div>
                {isExpanded && (
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 mt-4">
                    {item.label}
                  </div>
                )}
                {item.items.map((subItem) => (
                  <button
                    key={subItem.id}
                    className={`w-full flex items-center h-10 px-4 text-gray-400 hover:text-white hover:bg-[#2B3139] transition-colors ${
                      !isExpanded ? 'justify-center' : ''
                    }`}
                  >
                    <subItem.icon className="w-5 h-5 min-w-[1.25rem]" />
                    {isExpanded && (
                      <span className="ml-3 whitespace-nowrap overflow-hidden text-sm">
                        {subItem.label}
                        {subItem.isNew && (
                          <span className="ml-2 inline-block text-xs bg-blue-500 text-white px-1.5 py-0.5 rounded">
                            NEW
                          </span>
                        )}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            ) : (
              <button
                className={`w-full flex items-center h-10 px-4 text-gray-400 hover:text-white hover:bg-[#2B3139] transition-colors ${
                  !isExpanded ? 'justify-center' : ''
                }`}
              >
                <item.icon className="w-5 h-5 min-w-[1.25rem]" />
                {isExpanded && (
                  <span className="ml-3 whitespace-nowrap overflow-hidden text-sm">
                    {item.label}
                  </span>
                )}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar; 