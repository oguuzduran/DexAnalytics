import React from 'react';
import { FaRocket } from 'react-icons/fa';

const TokenCreator = () => {
  return (
    <div className="bg-[#1E2329] rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center">
          <FaRocket className="mr-2 text-blue-500" />
          Token Creator
        </h2>
        <span className="text-blue-500 text-sm cursor-pointer hover:text-blue-400">
          Daha Fazla
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Token Adı</label>
          <input
            type="text"
            className="w-full bg-[#2B3139] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
            placeholder="Token adını girin"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1">Sembol</label>
          <input
            type="text"
            className="w-full bg-[#2B3139] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
            placeholder="Token sembolünü girin"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1">
            Başlangıç Arzı
          </label>
          <input
            type="number"
            className="w-full bg-[#2B3139] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
            placeholder="1,000,000"
          />
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Token Oluştur
        </button>
      </div>
    </div>
  );
};

export default TokenCreator; 