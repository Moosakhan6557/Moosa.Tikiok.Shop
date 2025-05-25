import React, { useEffect, useRef } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
        'loading-anim'?: boolean;
        'events-target'?: string;
      };
    }
  }
}

interface ThreeSceneProps {
  height?: string;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ height = '500px' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.0.17/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height, width: '100%', position: 'relative'}}>
      <spline-viewer 
        url="https://prod.spline.design/QLFEUUfJbl0Xc4cr/scene.splinecode"
        loading-anim
        events-target="global"
      ></spline-viewer>
      <div 
        className="error-message"
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.8)',
          visibility: 'hidden'
        }}
      >
        <p>Error loading 3D scene. Please try refreshing the page.</p>
      </div>
    </div>
  );
}

export default ThreeScene;