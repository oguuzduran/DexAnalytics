import React from 'react';
import { FaExternalLinkAlt, FaCopy } from 'react-icons/fa';

const TokenDetails = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // Burada bir bildirim gösterilebilir
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Token Bilgileri</h2>
      
      <div className="space-y-4">
        {/* Kontrat Adresi */}
        <div>
          <div className="text-sm text-gray-400 mb-1">Kontrat Adresi</div>
          <div className="flex items-center justify-between bg-gray-700 p-2 rounded">
            <span className="text-sm truncate">0x2170Ed0880ac9A755fd29B2688956BD959F933F8</span>
            <div className="flex space-x-2">
              <button
                onClick={() => copyToClipboard('0x2170Ed0880ac9A755fd29B2688956BD959F933F8')}
                className="text-gray-400 hover:text-white"
              >
                <FaCopy size={14} />
              </button>
              <a
                href="https://etherscan.io/token/0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaExternalLinkAlt size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Token Metrikleri */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-400 mb-1">Toplam Arz</div>
            <div className="text-sm">120,000,000</div>
          </div>
          <div>
            <div className="text-sm text-gray-400 mb-1">Dolaşımdaki Arz</div>
            <div className="text-sm">80,000,000</div>
          </div>
          <div>
            <div className="text-sm text-gray-400 mb-1">Maksimum Arz</div>
            <div className="text-sm">120,000,000</div>
          </div>
          <div>
            <div className="text-sm text-gray-400 mb-1">Token Tipi</div>
            <div className="text-sm">ERC-20</div>
          </div>
        </div>

        {/* Alım/Satım Butonları */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
            Satın Al
          </button>
          <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
            Sat
          </button>
        </div>
      </div>
    </div>
  );
};

export default TokenDetails; 