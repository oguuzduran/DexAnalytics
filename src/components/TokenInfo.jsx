import React from 'react';
import { FaRegStar, FaExternalLinkAlt, FaChartLine } from 'react-icons/fa';

const TokenInfo = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Token Başlık ve Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="https://placeholder.com/40"
            alt="Token Logo"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold">ETH/USDT</h1>
              <button className="text-gray-400 hover:text-yellow-500">
                <FaRegStar size={20} />
              </button>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Ethereum</span>
              <a href="#" className="hover:text-blue-400">
                <FaExternalLinkAlt size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Fiyat Bilgileri */}
        <div className="mt-4 md:mt-0">
          <div className="flex flex-col items-end">
            <div className="text-2xl font-bold">$2,245.32</div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">+2.45%</span>
              <FaChartLine className="text-green-500" />
            </div>
          </div>
        </div>
      </div>

      {/* İstatistikler */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="text-sm text-gray-400">24s Hacim</div>
          <div className="text-lg font-semibold">$1.2B</div>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="text-sm text-gray-400">Market Değeri</div>
          <div className="text-lg font-semibold">$267.8B</div>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="text-sm text-gray-400">Likidite</div>
          <div className="text-lg font-semibold">$890.5M</div>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="text-sm text-gray-400">FDV</div>
          <div className="text-lg font-semibold">$267.8B</div>
        </div>
      </div>
    </div>
  );
};

export default TokenInfo; 