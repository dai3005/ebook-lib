import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from 'react-router-dom';
import { CardActionArea } from '@mui/material';
import { Book } from '../../models/Book';
import './style.css';
import { FC } from 'react';

type propsList = {
  Books: Book[];
  title: string;
};

const ListItem: FC<propsList> = ({ Books, title }) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    const page = id;
    const title = 'Hello';
    navigate('/item-detail', {
      state: {
        page,
        title,
      },
    });
  };
  return (
    <div className="home-container 2xl:w-max xl:w-4/5 md:w-11/12 sm:w-10/12">
      <div className="home-heading ">{title}</div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-7">
        {Books.map((book) => (
          <Card
            sx={{
              maxWidth: 244,
              border: 'none',
              backgroundColor: '#06121e',
            }}
            className={'card'}
            key={book.label}
            onClick={() => handleClick(book.label)}
          >
            <CardActionArea>
              <CardMedia component="img" image={book.image} alt="poster" />
              <CardContent sx={{ backgroundColor: '#06121e' }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="white"
                >
                  {book.label}
                </Typography>
                <Typography variant="body2" color="white">
                  {book.author}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ListItem;
