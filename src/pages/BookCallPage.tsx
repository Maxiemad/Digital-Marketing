import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';

const WIDGET_SCRIPT_URL = 'https://services.leadconnectorhq.com/prospecting/client/widget-embed.js';
const WIDGET_ID = '694dfb6ef47f31cbe7604e7a';

const BookCallPage: React.FC = () => {
  useEffect(() => {
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
      <main className="pt-20 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div id="leadconnector-widget" className="min-h-[480px]" />
          <Link
            to="/"
            className="inline-block mt-6 text-teal-600 font-semibold hover:text-teal-700 hover:underline cursor-hover text-sm"
          >
            ← Back to home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default BookCallPage;
