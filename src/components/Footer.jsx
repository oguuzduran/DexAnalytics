import React from 'react';
import { 
  FaTwitter, 
  FaTelegram, 
  FaYoutube, 
  FaTiktok, 
  FaMedium, 
  FaInstagram, 
  FaApple, 
  FaGooglePlay,
  FaStar
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-800 w-full">
      <div className="px-6 py-12">
        {/* Üst Kısım */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Get news about cryptocurrencies every day!</h2>
          <p className="text-gray-400 max-w-2xl">Be part of DEXT Force community! The premium community of DEXTools</p>
          <p className="text-gray-400 max-w-3xl mt-2">A group of elite traders and investors focused on DeFi. You can join now our exclusive Telegram and get all community benefits including contests, investing tips and advanced market info. There are 3 tiers:</p>
        </div>

        {/* Tier Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Free Tier */}
          <div className="bg-[#0F1722] p-6 rounded-lg border border-gray-800">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <FaStar className="text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Free</h3>
            </div>
            <p className="text-gray-400 text-sm">Get a taste of our community, get support and join the discussions.</p>
          </div>

          {/* DEXT Force */}
          <div className="bg-[#0F1722] p-6 rounded-lg border border-gray-800">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <FaStar className="text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">DEXT Force</h3>
            </div>
            <p className="text-gray-400 text-sm">You can access holding 1,000 DEXT and verifying your wallet.</p>
          </div>

          {/* DEXT Force Ventures */}
          <div className="bg-[#0F1722] p-6 rounded-lg border border-gray-800">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <FaStar className="text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">DEXT Force Ventures</h3>
            </div>
            <p className="text-gray-400 text-sm">You can access holding 100k DEXT. It includes exclusive access to our ventures and all the community deals.</p>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaTelegram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaYoutube className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaTiktok className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaMedium className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-[#1E2329] px-4 py-2 rounded-lg text-white hover:bg-[#2B3139] transition-colors">
              <FaApple className="w-5 h-5" />
              <span>App Store</span>
            </button>
            <button className="flex items-center space-x-2 bg-[#1E2329] px-4 py-2 rounded-lg text-white hover:bg-[#2B3139] transition-colors">
              <FaGooglePlay className="w-5 h-5" />
              <span>Google Play</span>
            </button>
          </div>
        </div>

        {/* Yasal Metin */}
        <p className="text-gray-500 text-xs mt-8 text-center md:text-left">
          All content available on our website, on hyperlinked websites, and on applications, forums, blogs, social media accounts and other platforms associated with DEXTools is intended solely to provide you with general information. We make no warranties of any kind with respect to our content, including but not limited to the accuracy and currency of the information. None of the content we provide should be construed as financial, legal or any other type of advice on which you should rely specifically for any purpose. Any use or reliance you place on our content is solely at your own risk. What you should do is conduct your own research, review and analysis, and verify our content before relying on it. Trading is a high-risk activity that can result in significant losses, so you should consult with your financial advisor before making any decisions. Nothing on our site should be construed as an offer or solicitation to buy or sell any financial instruments.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 