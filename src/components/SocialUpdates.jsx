import React from 'react';
import { FaTwitter, FaTelegram, FaDiscord, FaGlobe } from 'react-icons/fa';

const SocialUpdates = () => {
  const updates = [
    {
      id: 1,
      name: 'ETH',
      platform: 'twitter',
      icon: <FaTwitter className="text-blue-400" />,
      time: '2m',
      hasWebsite: true,
      hasTelegram: true,
      hasDiscord: true,
    },
    {
      id: 2,
      name: 'BTC',
      platform: 'telegram',
      icon: <FaTelegram className="text-blue-500" />,
      time: '5m',
      hasWebsite: true,
      hasTelegram: true,
      hasDiscord: false,
    },
    {
      id: 3,
      name: 'SOL',
      platform: 'discord',
      icon: <FaDiscord className="text-indigo-500" />,
      time: '10m',
      hasWebsite: true,
      hasTelegram: false,
      hasDiscord: true,
    },
  ];

  return (
    <div className="bg-[#1E2329] rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Son Güncellemeler</h2>
        <span className="text-blue-500 text-sm cursor-pointer hover:text-blue-400">
          Tümü
        </span>
      </div>

      <div className="space-y-4">
        {updates.map((update) => (
          <div
            key={update.id}
            className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#2B3139] rounded-full flex items-center justify-center">
                {update.icon}
              </div>
              <div>
                <div className="font-medium">{update.name}</div>
                <div className="text-sm text-gray-400">{update.time} önce</div>
              </div>
            </div>
            <div className="flex space-x-2">
              {update.hasWebsite && (
                <FaGlobe className="text-gray-400 hover:text-white cursor-pointer" />
              )}
              {update.hasTelegram && (
                <FaTelegram className="text-gray-400 hover:text-white cursor-pointer" />
              )}
              {update.hasDiscord && (
                <FaDiscord className="text-gray-400 hover:text-white cursor-pointer" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialUpdates; 