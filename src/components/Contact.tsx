
import React, { useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const Contact: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fullName || !email || !message) {
      setStatus('error');
      setFeedbackMessage('Please fill out all fields.');
      return;
    }

    setStatus('submitting');
    setFeedbackMessage('');

    // Simulate an API call
    setTimeout(() => {
      console.log({ fullName, email, message });
      setStatus('success');
      setFeedbackMessage("Thank you for your message! We'll be in touch soon.");
      // Reset form
      setFullName('');
      setEmail('');
      setMessage('');
      // Reset status after a few seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section 
      ref={ref}
      className={`py-20 bg-secondary w-full transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-neutral-100 sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="full-name" className="sr-only">Full name</label>
              <input 
                type="text" 
                name="full-name" 
                id="full-name" 
                autoComplete="name" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="block w-full shadow-sm py-3 px-4 placeholder-neutral-500 bg-neutral-800 text-neutral-200 border-neutral-700 rounded-md focus:ring-accent focus:border-accent" 
                placeholder="Full name" 
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                autoComplete="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full shadow-sm py-3 px-4 placeholder-neutral-500 bg-neutral-800 text-neutral-200 border-neutral-700 rounded-md focus:ring-accent focus:border-accent" 
                placeholder="Email" 
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block w-full shadow-sm py-3 px-4 placeholder-neutral-500 bg-neutral-800 text-neutral-200 border-neutral-700 rounded-md focus:ring-accent focus:border-accent" 
                placeholder="Message"
              ></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-primary bg-accent hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
          {feedbackMessage && (
            <p className={`mt-4 text-center text-sm ${status === 'error' ? 'text-red-500' : 'text-green-500'}`}>
              {feedbackMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;