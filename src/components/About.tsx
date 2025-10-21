
import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const [leftRef, isLeftVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [rightRef, isRightVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section className="py-20 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div
            ref={leftRef}
            className={`transition-all duration-700 ease-out ${
              isLeftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-3xl font-extrabold text-neutral-100 sm:text-4xl">
              Empowering the Future of Work
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              At HR.AIverse, our mission is to empower organizations by integrating artificial intelligence into the core of their human resources. We believe in building tools that not only streamline processes but also foster a more connected and data-driven workplace culture.
            </p>
            <p className="mt-4 text-lg text-neutral-400">
              Our platform is designed to handle everything from recruitment to analytics, allowing you to focus on your most important asset: your people.
            </p>
          </div>
          <div
            ref={rightRef}
            className={`mt-10 lg:mt-0 transition-all duration-700 ease-out delay-200 ${
              isRightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <img 
              className="rounded-lg shadow-xl" 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&auto=format&fit=crop" 
              alt="Team collaborating on a project" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;