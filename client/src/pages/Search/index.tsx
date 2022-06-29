import { TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListItem from '../../Components/ListItems';
import { Book } from '../../models/Book';
import './style.css';

const Books: Book[] = [
  {
    label: 'Đắc Nhân Tâm',
    author: 'Dale Carnegie',
    image:
      'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/10990.jpg?v=2&w=340&h=497',
    about: 'Film of Marvel',
    properties: 'New Books',
    category: 'Nghệ Thuật Sống',
    bookDescription:
      'Đắc Nhân Tâm là cuốn sách đưa ra các lời khuyên về cách thức cư xử, ứng xử và giao tiếp với mọi người để đạt được thành công trong cuộc sống. ' +
      'Gần 80 năm kể từ khi ra đời, Đắc Nhân Tâm là cuốn sách gối đầu giường của nhiều thế hệ luôn muốn hoàn thiện chính mình để vươn tới một cuộc sống tốt đẹp và thành công.' +
      'Đắc Nhân Tâm cụ thể và chi tiết với những chỉ dẫn để dẫn đạo người, để gây thiện cảm và dẫn dắt người khác,... những hướng dẫn ấy, qua thời gian, có thể không còn thích' +
      'hợp trong cuộc sống hiện đại nhưng nếu người đọc có thể cảm và hiểu được những thông điệp tác giả muốn truyền đạt thì việc áp dụng nó vào cuộc sống trở nên dễ dàng và hiệu quả.',
    publishingCompany: 'NXB Trẻ',
  },
  {
    label: 'Ms. Marvel',
    author: 'Marvel',
    image: 'https://image.tmdb.org/t/p/w342/hJx9aFc8g32KjrW7mpv53cEvEDS.jpg',
    about: 'Film of Marvel',
    properties: 'New Books',
    category: '',
    bookDescription: '',
    publishingCompany: '',
  },
  {
    label: 'The Boys',
    author: 'Seven',
    image: 'https://image.tmdb.org/t/p/w342/stTEycfG9928HYGEISBFaG1ngjM.jpg',
    about: 'Film of Seven',
    properties: 'Hot Books',
    category: '',
    bookDescription: '',
    publishingCompany: '',
  },
  {
    label: 'Stranger Things',
    author: 'Stranger Things',
    image: 'https://image.tmdb.org/t/p/w342/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
    about: 'Film of Netflix',
    properties: 'New Books',
    category: '',
    bookDescription: '',
    publishingCompany: '',
  },
  {
    label: 'Fantastic Beasts',
    author: 'J K Rolling',
    image: 'https://image.tmdb.org/t/p/w342/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg',
    about: 'Film of Warner Bros',
    properties: 'New Books',
    category: '',
    bookDescription: '',
    publishingCompany: '',
  },
  {
    label: 'SPY X FAMILY',
    author: 'SPY X FAMILY',
    image: 'https://image.tmdb.org/t/p/w342/nShEY0JnMOsvdhEnmYvL9mowIKz.jpg',
    about: 'Animu',
    properties: 'New Books',
    category: '',
    bookDescription: '',
    publishingCompany: '',
  },
];

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

  const searchResult = Books?.filter((book) => {
    return book.label.toLowerCase().includes(keywords.toLowerCase());
  });

  if (keywords !== '') {
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
        <div className="">
          <ListItem books={searchResult} title="" />
        </div>
      </div>
    );
  } else {
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
  }
};

export default Search;
