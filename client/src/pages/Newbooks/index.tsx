import React, { useEffect } from 'react';

const NewBooks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div style={{ color: 'white' }}>NewBooks</div>;
};

export default NewBooks;
