import React, { useState } from 'react';
import { FaRegStar, FaSearchPlus, FaChartBar, FaCaretUp, FaCaretDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BiDiamond } from 'react-icons/bi';
import { IoShieldCheckmark, IoShieldOutline } from 'react-icons/io5';
import TokenFilters from './TokenFilters';

const TokenList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const allTokens = [
    {
      id: 1,
      name: 'SOL',
      pair: 'USDC',
      address: 'BsLN...Lwq',
      price: '$197.73',
      change: '-8.75',
      dextscore: 96,
      audit: false,
      created: '1 year',
      volume: '$572.45M',
      swaps: '361.6k',
      volatility: '78.98',
      liquidity: '7.24M',
      marketCap: '$113.25B',
      dex: 'Raydium',
    },
    {
      id: 2,
      name: 'TRUM',
      pair: 'SOL',
      address: 'E6ut...7rq',
      price: '$0.01601',
      change: '-92.54',
      dextscore: 85,
      audit: true,
      created: '13 hours',
      volume: '$956.90K',
      swaps: '65.5K',
      volatility: '126.80',
      liquidity: '7.54K',
      marketCap: '$16.01K',
      dex: 'Raydium',
    },
    {
      id: 3,
      name: 'CORT',
      pair: 'SOL',
      address: '42m2...whGW',
      price: '$0.00315',
      change: '+31752.47',
      dextscore: 90,
      audit: true,
      created: '22 hours',
      volume: '$8.36M',
      swaps: '65.1K',
      volatility: '79.69',
      liquidity: '104.91K',
      marketCap: '$1.7M',
      dex: 'Raydium',
    },
    {
      id: 4,
      name: 'BONK',
      pair: 'SOL',
      address: 'Kj8n...Pq2',
      price: '$0.00001234',
      change: '+15.32',
      dextscore: 88,
      audit: true,
      created: '2 months',
      volume: '$2.1M',
      swaps: '89.3K',
      volatility: '92.45',
      liquidity: '456.78K',
      marketCap: '$12.3M',
      dex: 'Orca',
    },
    {
      id: 5,
      name: 'RAY',
      pair: 'USDC',
      address: 'Xt5m...Yw9',
      price: '$0.89',
      change: '-3.21',
      dextscore: 94,
      audit: true,
      created: '2 years',
      volume: '$12.5M',
      swaps: '156.7K',
      volatility: '45.67',
      liquidity: '2.34M',
      marketCap: '$156.7M',
      dex: 'Raydium',
    },
    {
      id: 6,
      name: 'ORCA',
      pair: 'SOL',
      address: 'Hp4k...Vn7',
      price: '$1.23',
      change: '+5.67',
      dextscore: 92,
      audit: true,
      created: '1.5 years',
      volume: '$8.9M',
      swaps: '123.4K',
      volatility: '56.78',
      liquidity: '1.89M',
      marketCap: '$89.1M',
      dex: 'Orca',
    },
    {
      id: 7,
      name: 'SAMO',
      pair: 'USDC',
      address: 'Jt2p...Xq5',
      price: '$0.0089',
      change: '+12.45',
      dextscore: 87,
      audit: false,
      created: '6 months',
      volume: '$567.8K',
      swaps: '45.6K',
      volatility: '89.12',
      liquidity: '234.5K',
      marketCap: '$4.5M',
      dex: 'Raydium',
    },
    {
      id: 8,
      name: 'DUST',
      pair: 'SOL',
      address: 'Nm5r...Zw4',
      price: '$0.567',
      change: '-1.23',
      dextscore: 89,
      audit: true,
      created: '3 months',
      volume: '$345.6K',
      swaps: '34.5K',
      volatility: '67.89',
      liquidity: '123.4K',
      marketCap: '$2.3M',
      dex: 'Jupiter',
    },
    {
      id: 9,
      name: 'MNGO',
      pair: 'USDC',
      address: 'Bt7m...Kq8',
      price: '$0.0234',
      change: '-8.90',
      dextscore: 91,
      audit: true,
      created: '1.8 years',
      volume: '$789.1K',
      swaps: '67.8K',
      volatility: '78.90',
      liquidity: '345.6K',
      marketCap: '$5.6M',
      dex: 'Raydium',
    },
    {
      id: 10,
      name: 'GENE',
      pair: 'SOL',
      address: 'Rt4k...Pn3',
      price: '$0.00789',
      change: '+23.45',
      dextscore: 86,
      audit: false,
      created: '4 months',
      volume: '$234.5K',
      swaps: '23.4K',
      volatility: '91.23',
      liquidity: '89.1K',
      marketCap: '$1.2M',
      dex: 'Orca',
    },
    {
      id: 11,
      name: 'ATLAS',
      pair: 'USDC',
      address: 'Wq9p...Ln5',
      price: '$0.00456',
      change: '+7.89',
      dextscore: 93,
      audit: true,
      created: '1.2 years',
      volume: '$456.7K',
      swaps: '45.6K',
      volatility: '67.89',
      liquidity: '234.5K',
      marketCap: '$3.4M',
      dex: 'Raydium',
    },
    {
      id: 12,
      name: 'POLIS',
      pair: 'SOL',
      address: 'Yt6m...Xn4',
      price: '$0.123',
      change: '-5.67',
      dextscore: 88,
      audit: true,
      created: '1.1 years',
      volume: '$345.6K',
      swaps: '34.5K',
      volatility: '78.90',
      liquidity: '123.4K',
      marketCap: '$2.3M',
      dex: 'Jupiter',
    },
    {
      id: 13,
      name: 'COPE',
      pair: 'USDC',
      address: 'Ht8k...Vq7',
      price: '$0.0567',
      change: '+12.34',
      dextscore: 87,
      audit: false,
      created: '9 months',
      volume: '$234.5K',
      swaps: '23.4K',
      volatility: '89.12',
      liquidity: '89.1K',
      marketCap: '$1.2M',
      dex: 'Raydium',
    }
  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const tokens = allTokens.slice(startIndex, endIndex);

  return (
    <div className="bg-[#0B1217] flex flex-col">
      <div className="px-6">
        <TokenFilters />
        <div className="overflow-x-auto -mx-6">
          <div className="min-w-full px-6">
            <table className="w-full">
              <thead>
                <tr className="text-gray-400 text-xs border-b border-gray-800">
                  <th className="text-left py-3 pr-4 font-medium">Pair</th>
                  <th className="text-right py-3 px-4 font-medium">Price</th>
                  <th className="text-right py-3 px-4 font-medium">% 24h</th>
                  <th className="text-center py-3 px-4 font-medium">DexTscore</th>
                  <th className="text-center py-3 px-4 font-medium">Audit</th>
                  <th className="text-left py-3 px-4 font-medium">Created</th>
                  <th className="text-right py-3 px-4 font-medium">Volume</th>
                  <th className="text-right py-3 px-4 font-medium">Swaps</th>
                  <th className="text-right py-3 px-4 font-medium">Volatility</th>
                  <th className="text-right py-3 px-4 font-medium">Liquidity</th>
                  <th className="text-right py-3 px-4 font-medium">T.MCap</th>
                  <th className="text-center py-3 px-4 font-medium">DEX</th>
                  <th className="text-right py-3 pl-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/50">
                {tokens.map((token) => (
                  <tr key={token.id} className="hover:bg-[#1E2329]/50 transition-colors cursor-pointer">
                    <td className="py-2.5 pr-4">
                      <div className="flex items-center space-x-3">
                        <FaRegStar className="text-gray-600 hover:text-yellow-500 transition-colors cursor-pointer" />
                        <div className="flex items-center space-x-2">
                          <div className="w-7 h-7 rounded-full bg-[#1E2329] flex items-center justify-center">
                            <span className="text-white text-sm font-medium">{token.name[0]}</span>
                          </div>
                          <div>
                            <div className="text-white text-sm">{token.name}/{token.pair}</div>
                            <div className="text-gray-500 text-xs">{token.address}</div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right px-4 text-sm text-white">{token.price}</td>
                    <td className="text-right px-4">
                      <div className={`inline-flex items-center text-sm ${
                        token.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {token.change.startsWith('+') ? <FaCaretUp className="mr-1" /> : <FaCaretDown className="mr-1" />}
                        {token.change}%
                      </div>
                    </td>
                    <td className="text-center px-4">
                      <div className="flex items-center justify-center">
                        <div className={`flex items-center space-x-1 ${
                          token.dextscore > 90 ? 'text-blue-400' :
                          token.dextscore > 80 ? 'text-green-400' :
                          'text-yellow-400'
                        }`}>
                          <BiDiamond />
                          <span className="text-sm">{token.dextscore}</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-center px-4">
                      {token.audit ? (
                        <IoShieldCheckmark className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <IoShieldOutline className="w-5 h-5 text-gray-600 mx-auto" />
                      )}
                    </td>
                    <td className="text-left px-4 text-sm text-gray-400">{token.created}</td>
                    <td className="text-right px-4 text-sm text-gray-400">{token.volume}</td>
                    <td className="text-right px-4 text-sm text-gray-400">{token.swaps}</td>
                    <td className="text-right px-4 text-sm text-gray-400">{token.volatility}</td>
                    <td className="text-right px-4 text-sm text-gray-400">{token.liquidity}</td>
                    <td className="text-right px-4 text-sm text-gray-400">{token.marketCap}</td>
                    <td className="text-center px-4">
                      <span className="text-blue-400 text-sm">{token.dex}</span>
                    </td>
                    <td className="text-right pl-4">
                      <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 hover:bg-[#2B3139] rounded transition-colors">
                          <FaSearchPlus className="w-3.5 h-3.5 text-gray-400" />
                        </button>
                        <button className="p-1.5 hover:bg-[#2B3139] rounded transition-colors">
                          <FaChartBar className="w-3.5 h-3.5 text-gray-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end mt-4 px-6">
        <div className="flex items-center space-x-1">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            className="flex items-center justify-center px-2 py-1 bg-[#0F1722] border border-gray-800 rounded-lg text-gray-400 hover:bg-[#1E2329] transition-colors disabled:opacity-50"
            disabled={currentPage === 1}
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>
          {[1, 2].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`flex items-center justify-center w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'bg-[#0F1722] border border-gray-800 text-gray-400 hover:bg-[#1E2329]'
              }`}
            >
              {page}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage(prev => Math.min(2, prev + 1))}
            className="flex items-center justify-center px-2 py-1 bg-[#0F1722] border border-gray-800 rounded-lg text-gray-400 hover:bg-[#1E2329] transition-colors disabled:opacity-50"
            disabled={currentPage === 2}
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TokenList; 