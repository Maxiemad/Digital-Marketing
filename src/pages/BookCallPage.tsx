import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';

const WIDGET_SCRIPT_URL = 'https://services.leadconnectorhq.com/prospecting/client/widget-embed.js';
const WIDGET_ID = '694dfb6ef47f31cbe7604e7a';

const BookCallPage: React.FC = () => {
  useEffect(() => {
    // Avoid loading the script multiple times
    if (document.querySelector(`script[data-widget-id="${WIDGET_ID}"]`)) return;

    const script = document.createElement('script');
    script.src = WIDGET_SCRIPT_URL;
    script.setAttribute('data-widget-id', WIDGET_ID);
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existing = document.querySelector(`script[data-widget-id="${WIDGET_ID}"]`);
      if (existing?.parentNode) existing.parentNode.removeChild(existing);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <Header />
      <main className="pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book Your Free Strategy Call
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Get a custom roadmap for your practice. Pick a time that works for you below.
          </p>
          <div id="leadconnector-widget" className="min-h-[400px]" />
          <Link
            to="/"
            className="inline-block mt-8 text-teal-600 font-semibold hover:text-teal-700 hover:underline cursor-hover"
          >
            ← Back to home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default BookCallPage;
