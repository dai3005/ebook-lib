import React, { useEffect } from 'react';

const Categories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div style={{ color: 'white' }}>Categories</div>;
};

export default Categories;
