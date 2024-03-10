import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { SmallScreenHeader } from './SmallScreenHeader';


const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
};

export const HeaderControl: React.FC = () => {
  const [width] = useWindowSize();

  

  return (
    <div>
      {width < 768 ? (
        <SmallScreenHeader />
      ) : (
        <Header />
      )}
    </div>
  );
};
