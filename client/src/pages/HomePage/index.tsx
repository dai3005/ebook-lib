import * as React from 'react';
import { Book } from '../../models/Book';
import ListItem from '../../Components/ListItems';

const Books: Book[] = [
  {
    label: 'Ms. Marvel',
    author: 'Marvel',
    image: 'https://image.tmdb.org/t/p/w342/hJx9aFc8g32KjrW7mpv53cEvEDS.jpg',
    about: 'Film of Marvel',
    properties: 'New Books',
  },
  {
    label: 'Ms. Marvel 123',
    author: 'Marvel',
    image: 'https://image.tmdb.org/t/p/w342/hJx9aFc8g32KjrW7mpv53cEvEDS.jpg',
    about: 'Film of Marvel',
    properties: 'New Books',
  },
  {
    label: 'The Boys',
    author: 'Seven',
    image: 'https://image.tmdb.org/t/p/w342/stTEycfG9928HYGEISBFaG1ngjM.jpg',
    about: 'Film of Seven',
    properties: 'Hot Books',
  },
  {
    label: 'Stranger Things',
    author: 'Stranger Things',
    image: 'https://image.tmdb.org/t/p/w342/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
    about: 'Film of Netflix',
    properties: 'New Books',
  },
  {
    label: 'Fantastic Beasts',
    author: 'J K Rolling',
    image: 'https://image.tmdb.org/t/p/w342/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg',
    about: 'Film of Warner Bros',
    properties: 'New Books',
  },
  {
    label: 'SPY X FAMILY',
    author: 'SPY X FAMILY',
    image: 'https://image.tmdb.org/t/p/w342/nShEY0JnMOsvdhEnmYvL9mowIKz.jpg',
    about: 'Animu',
    properties: 'New Books',
  },
];

const HomePage = () => {
  return (
    <div>
      <ListItem
        Books={Books.filter((e) => {
          return e.properties === 'New Books';
        })}
        title="New Books"
      />
      <ListItem
        Books={Books.filter((e) => {
          return e.properties === 'Hot Books';
        })}
        title="Hot Books"
      />
    </div>
  );
};

export default HomePage;
