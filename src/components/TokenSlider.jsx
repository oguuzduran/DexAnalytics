import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const TokenSlider = () => {
  const tokens = [
    {
      id: 1,
      name: 'ETH/USDT',
      price: '2245.32',
      change: '+2.45',
      volume: '1.2B',
      isPositive: true,
    },
    {
      id: 2,
      name: 'BTC/USDT',
      price: '42245.15',
      change: '-1.23',
      volume: '2.5B',
      isPositive: false,
    },
    {
      id: 3,
      name: 'BNB/USDT',
      price: '315.45',
      change: '+0.89',
      volume: '458M',
      isPositive: true,
    },
    {
      id: 4,
      name: 'SOL/USDT',
      price: '98.32',
      change: '+5.67',
      volume: '890M',
      isPositive: true,
    },
    {
      id: 5,
      name: 'XRP/USDT',
      price: '0.6234',
      change: '-0.45',
      volume: '234M',
      isPositive: false,
    },
  ];

  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-4 min-w-max">
        {tokens.map((token) => (
          <div
            key={token.id}
            className="bg-[#1E2329] p-4 rounded-lg min-w-[200px] hover:bg-[#2B3139] transition-colors cursor-pointer"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{token.name}</span>
              <span
                className={`flex items-center ${
                  token.isPositive ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {token.isPositive ? (
                  <FaArrowUp className="mr-1" size={12} />
                ) : (
                  <FaArrowDown className="mr-1" size={12} />
                )}
                {token.change}%
              </span>
            </div>
            <div className="text-lg font-bold">${token.price}</div>
            <div className="text-sm text-gray-400">
              Hacim: ${token.volume}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenSlider; 