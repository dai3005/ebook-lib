import React, { useEffect } from 'react';

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div style={{ color: 'white' }}>FAQ</div>;
};

export default FAQ;
