import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const PriceChart = () => {
  const chartContainerRef = useRef();
  const chartRef = useRef();

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: 400,
        layout: {
          background: { color: '#1a1d1f' },
          textColor: '#d1d4dc',
        },
        grid: {
          vertLines: { color: '#2b2b43' },
          horzLines: { color: '#2b2b43' },
        },
        crosshair: {
          mode: 'normal',
        },
        rightPriceScale: {
          borderColor: '#2b2b43',
        },
        timeScale: {
          borderColor: '#2b2b43',
        },
      });

      const candleSeries = chart.addCandlestickSeries({
        upColor: '#26a69a',
        downColor: '#ef5350',
        borderVisible: false,
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350',
      });

      // Örnek veri
      const data = [
        { time: '2023-01-01', open: 2200, high: 2300, low: 2100, close: 2250 },
        { time: '2023-01-02', open: 2250, high: 2400, low: 2200, close: 2300 },
        // Daha fazla veri eklenebilir
      ];

      candleSeries.setData(data);
      chartRef.current = chart;

      const handleResize = () => {
        chart.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chart.remove();
      };
    }
  }, []);

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Fiyat Grafiği</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600">1s</button>
          <button className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600">1g</button>
          <button className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600">1h</button>
          <button className="px-3 py-1 bg-blue-600 rounded">4s</button>
          <button className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600">1y</button>
        </div>
      </div>
      <div ref={chartContainerRef} className="w-full" />
    </div>
  );
};

export default PriceChart; 