import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { CardActionArea } from '@mui/material';
import { Book } from '../../models/Book';
import './style.css';
import { FC } from 'react';

type propsList = {
  Books: Book[];
  title: string;
};
const ListItem: FC<propsList> = ({ Books, title }) => {
  return (
    <div>
      <div className="home-heading">{title}</div>
      <div className="home-container">
        {Books.map((book) => (
          <Card
            sx={{ maxWidth: 244, border: 'none', minWidth: 244 }}
            key={book.label}
            className={'card'}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image={book.image}
                alt="green iguana"
                sx={{ objectFit: 'cover' }}
              />
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
