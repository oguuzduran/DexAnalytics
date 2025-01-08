import React from 'react';
import { FaTwitter, FaTelegram, FaGlobe, FaDiscord, FaGithub } from 'react-icons/fa';

const SocialLinks = () => {
  const socialLinks = [
    {
      id: 1,
      name: 'Website',
      icon: <FaGlobe size={20} />,
      url: 'https://ethereum.org',
      color: 'text-blue-400',
    },
    {
      id: 2,
      name: 'Twitter',
      icon: <FaTwitter size={20} />,
      url: 'https://twitter.com/ethereum',
      color: 'text-blue-400',
    },
    {
      id: 3,
      name: 'Telegram',
      icon: <FaTelegram size={20} />,
      url: 'https://t.me/ethereum',
      color: 'text-blue-400',
    },
    {
      id: 4,
      name: 'Discord',
      icon: <FaDiscord size={20} />,
      url: 'https://discord.gg/ethereum',
      color: 'text-indigo-400',
    },
    {
      id: 5,
      name: 'Github',
      icon: <FaGithub size={20} />,
      url: 'https://github.com/ethereum',
      color: 'text-gray-400',
    },
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Sosyal Medya</h2>
      <div className="grid grid-cols-2 gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors ${link.color}`}
          >
            {link.icon}
            <span className="text-sm">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks; 