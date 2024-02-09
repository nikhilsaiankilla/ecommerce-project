// LoadingScreen.js
import React, { useEffect, useState } from 'react';
import './style.css'; // Import the CSS file

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // Listen to the load event
    window.addEventListener('load', handleLoad);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return loading ? (
    <div className="loading-screen">
      <h1 className="loading-text text-xl">Nik Store</h1>
    </div>
  ) : null;
};

export default LoadingScreen;
