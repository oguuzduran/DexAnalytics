import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const TransactionHistory = () => {
  const transactions = [
    {
      id: 1,
      type: 'Alış',
      price: '2245.32',
      amount: '0.5',
      total: '1122.66',
      time: '2 dakika önce',
      hash: '0x1234...5678',
    },
    {
      id: 2,
      type: 'Satış',
      price: '2243.15',
      amount: '1.2',
      total: '2691.78',
      time: '5 dakika önce',
      hash: '0x8765...4321',
    },
    // Daha fazla işlem eklenebilir
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Son İşlemler</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="text-left py-2">Tip</th>
              <th className="text-right py-2">Fiyat (USDT)</th>
              <th className="text-right py-2">Miktar (ETH)</th>
              <th className="text-right py-2">Toplam (USDT)</th>
              <th className="text-right py-2">Zaman</th>
              <th className="text-right py-2">İşlem</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {transactions.map((tx) => (
              <tr key={tx.id} className="text-sm">
                <td className="py-3">
                  <span
                    className={`${
                      tx.type === 'Alış' ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {tx.type}
                  </span>
                </td>
                <td className="text-right">{tx.price}</td>
                <td className="text-right">{tx.amount}</td>
                <td className="text-right">{tx.total}</td>
                <td className="text-right text-gray-400">{tx.time}</td>
                <td className="text-right">
                  <a
                    href={`https://etherscan.io/tx/${tx.hash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 inline-flex items-center space-x-1"
                  >
                    <span>{tx.hash}</span>
                    <FaExternalLinkAlt size={12} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory; 