import { TextField } from '@mui/material';
import './style.css';

const Search = () => {
  const inputStyle = {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: '5px',
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
        />
      </div>
    </div>
  );
};

export default Search;
