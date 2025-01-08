import React from 'react';

const NewsGrid = () => {
  const cards = [
    {
      id: 1,
      title: 'MetaWin Millionaire Season 2',
      subtitle: 'MetaWin Millionaire Season 2 is LIVE! 10x Your Investment',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80',
      tag: 'Markets',
      smallText: 'Metawin'
    },
    {
      id: 2,
      title: 'Trade SONIC Tokens Here!',
      subtitle: 'Sonic Chain Is Now On DEXTools. Start Trading!',
      image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=800&q=80',
      tag: 'Trade',
      smallText: 'Trade'
    },
    {
      id: 3,
      title: "Token's Race By DEXTools",
      subtitle: "Boost Your Token's Reach With NITROS",
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
      tag: "Token's Race",
      smallText: "Token's Race"
    },
    {
      id: 4,
      title: 'New DEX Listing Alert',
      subtitle: 'Major Token Just Listed on Leading DEX',
      image: 'https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=800&q=80',
      tag: 'Trading Event',
      smallText: 'DEX Update'
    },
    {
      id: 5,
      title: 'Crypto Trading Competition',
      subtitle: '$100,000 Prize Pool for Top Traders',
      image: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?auto=format&fit=crop&w=800&q=80',
      tag: 'New Feature',
      smallText: 'Trading Event'
    },
    {
      id: 6,
      title: 'NFT Integration Launch',
      subtitle: 'Trade NFTs Directly Through DEXTools',
      image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=800&q=80',
      tag: 'Platform Update',
      smallText: 'New Feature'
    },
    {
      id: 7,
      title: 'Security Update Released',
      subtitle: 'Enhanced Protection for Your Trades',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80',
      tag: 'Community',
      smallText: 'Platform Update'
    },
    {
      id: 8,
      title: 'Community Governance Live',
      subtitle: 'Vote on Platform Updates & Features',
      image: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?auto=format&fit=crop&w=800&q=80',
      tag: 'Latest Release',
      smallText: 'Community'
    }
  ];

  return (
    <div className="w-full px-4">
      <div className="flex justify-between items-stretch gap-2">
        {cards.map((card) => (
          <div 
            key={card.id} 
            className="flex-1 bg-[#1E2329] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            <div className="relative">
              <img 
                src={card.image} 
                alt={card.title}
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 p-3">
                  <div className="flex flex-col">
                    <span className="text-blue-400 text-xs mb-0.5 font-medium">{card.tag}</span>
                    <h3 className="text-white font-bold text-sm leading-tight mb-0.5 line-clamp-2">{card.title}</h3>
                    <p className="text-gray-300 text-xs line-clamp-2">{card.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsGrid; 