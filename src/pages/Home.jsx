import React from 'react';
import NewsGrid from '../components/NewsGrid';
import TokenList from '../components/TokenList';

const Home = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="px-4">
        <NewsGrid />
      </div>
      <div className="w-full">
        <TokenList />
      </div>
    </div>
  );
};

export default Home; 