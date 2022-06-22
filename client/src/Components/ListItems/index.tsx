import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { CardActionArea, Grid } from '@mui/material';
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
      <div className="home-container flex columns-5 row-3">
        <Grid container columnGap={5} columns={17}>
          {Books.map((book) => (
            <Grid item xs={7} md={5} xl={3} key={book.label}>
              <Card
                sx={{
                  maxWidth: 244,
                  border: 'none',
                  backgroundColor: '#06121e',
                }}
                className={'card'}
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
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default ListItem;
