
import React from 'react';
import RecruitingIcon from './icons/RecruitingIcon';
import OnboardingIcon from './icons/OnboardingIcon';
import AnalyticsIcon from './icons/AnalyticsIcon';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-primary p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border border-neutral-800">
    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-primary mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-neutral-100 mb-2">{title}</h3>
    <p className="text-neutral-400">{description}</p>
  </div>
);


const Features: React.FC = () => {
  const features = [
    {
      icon: <RecruitingIcon />,
      title: 'Intelligent Recruiting',
      description: 'Our AI analyzes millions of data points to find the perfect candidates for your roles, faster than ever before.',
    },
    {
      icon: <OnboardingIcon />,
      title: 'Seamless Onboarding',
      description: 'Automate paperwork and create personalized onboarding experiences that make new hires feel welcome and productive from day one.',
    },
    {
      icon: <AnalyticsIcon />,
      title: 'Predictive Analytics',
      description: 'Leverage data-driven insights to understand employee turnover, predict future needs, and make strategic workforce decisions.',
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-neutral-100 sm:text-4xl">
            A Smarter Approach to HR
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Everything your business needs to build a world-class team.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;