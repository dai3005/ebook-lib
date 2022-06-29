import React, { useEffect } from 'react';

const Popular = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div style={{ color: 'white' }}>Popular</div>;
};

export default Popular;
