
import React from 'react';
import InstagramIcon from './icons/InstagramIcon';
import GithubIcon from './icons/GithubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import MailIcon from './icons/MailIcon';

const socialLinks = [
  { href: 'https://github.com/hrranger5/', icon: <GithubIcon />, name: 'GitHub' },
  { href: 'https://www.linkedin.com/in/hafsa-raja-5224a8365/', icon: <LinkedInIcon />, name: 'LinkedIn' },
  { href: 'https://www.instagram.com/hafsaraja_official5/', icon: <InstagramIcon />, name: 'Instagram' },
  { href: 'mailto:hrranger555@gmail.com', icon: <MailIcon />, name: 'Gmail' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          {socialLinks.map((item) => (
            <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-accent transition-colors duration-300">
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-base text-neutral-400">&copy; 2024 HR.AIverse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;