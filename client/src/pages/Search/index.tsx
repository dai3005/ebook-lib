import { TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Search = () => {
  const inputStyle = {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: '5px',
  };
  const navigate = useNavigate();

  const [keywords, setKeywords] = useState('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let keywords = e.target.value;
    setKeywords(keywords);
    keywords.length > 0
      ? navigate(`/search?keyword=${keywords}`)
      : navigate('/search');
  };

  return (
    <div className="container-search">
      <div className="form-search">
        <TextField
          id="search"
          placeholder="Enter book title"
          sx={inputStyle}
          margin="normal"
          size="small"
          onChange={handleChangeInput}
          value={keywords}
        />
      </div>
    </div>
  );
};

export default Search;
