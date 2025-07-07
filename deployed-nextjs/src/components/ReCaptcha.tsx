'use client';

import { useEffect, useRef, useState } from 'react';

interface ReCaptchaProps {
  siteKey: string;
}

export default function ReCaptcha({ siteKey }: ReCaptchaProps) {
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !recaptchaRef.current) return;

    // Load reCAPTCHA script if not already loaded
    if (!(window as any).grecaptcha) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    // Render reCAPTCHA when script is loaded
    const renderRecaptcha = () => {
      if ((window as any).grecaptcha && recaptchaRef.current) {
        (window as any).grecaptcha.render(recaptchaRef.current, {
          sitekey: siteKey,
        });
      }
    };

    // Check if grecaptcha is already available
    if ((window as any).grecaptcha) {
      renderRecaptcha();
    } else {
      // Wait for script to load
      const checkGrecaptcha = setInterval(() => {
        if ((window as any).grecaptcha) {
          clearInterval(checkGrecaptcha);
          renderRecaptcha();
        }
      }, 100);
    }
  }, [isClient, siteKey]);

  if (!isClient) {
    return (
      <div className="recaptcha-container">
        <div style={{ width: '304px', height: '78px', backgroundColor: '#f9f9f9', border: '1px solid #d3d3d3', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#666' }}>Loading reCAPTCHA...</span>
        </div>
        <small style={{ color: '#6b7280', marginTop: '0.5rem', display: 'block' }}>Protected by reCAPTCHA</small>
      </div>
    );
  }

  return (
    <div className="recaptcha-container">
      <div ref={recaptchaRef}></div>
      <small style={{ color: '#6b7280', marginTop: '0.5rem', display: 'block' }}>Protected by reCAPTCHA</small>
    </div>
  );
} 