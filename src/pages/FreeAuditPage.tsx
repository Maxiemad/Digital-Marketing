import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const FREE_AUDIT_PAGE_CLASS = 'free-audit-page';

const FreeAuditPage: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(800);

  useEffect(() => {
    document.body.classList.add(FREE_AUDIT_PAGE_CLASS);
    return () => document.body.classList.remove(FREE_AUDIT_PAGE_CLASS);
  }, []);

  // Always open from top: menu bar → Back to home → form (no matter where user was on main site)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.data?.type === 'audit-widget-height' && typeof e.data.height === 'number') {
        setIframeHeight(Math.max(400, e.data.height));
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto w-full flex flex-col items-center">
          <Link
            to="/"
            className="inline-block mb-6 text-teal-600 font-semibold hover:text-teal-700 hover:underline cursor-hover text-sm"
          >
            ← Back to home
          </Link>
          <iframe
            ref={iframeRef}
            title="Free Marketing Audit"
            src="/audit-widget.html"
            className="w-full block overflow-hidden border-0 outline-none shadow-none"
            style={{
              height: iframeHeight,
              minHeight: 400,
              overflow: 'hidden',
              border: 'none',
              outline: 'none',
              background: 'transparent',
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default FreeAuditPage;
