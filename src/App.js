import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import Popular from './pages/Popular';
import Categories from './pages/Categories';
import NewBooks from './pages/Newbooks';
import FAQ from './pages/FAQ';
import MuiNavbar from './Components/MuiNavbar';
import './App.css';

const pages = [
  {
    label: 'Home',
    path: '/',
    component: <HomePage />,
  },
  {
    label: 'Search',
    path: '/search',
    component: <Search />,
  },
  {
    label: 'Popular Books',
    path: '/popular',
    component: <Popular />,
  },
  {
    label: 'Categories',
    path: '/categories',
    component: <Categories />,
  },
  {
    label: 'New Books',
    path: '/new-books',
    component: <NewBooks />,
  },
  {
    label: 'FAQ',
    path: '/faq',
    component: <FAQ />,
  },
];

function App() {
  return (
    <div>
      <MuiNavbar pages={pages.slice(1)} />
      <Routes>
        {pages.map((e) => (
          <Route key={e.label} path={e.path} element={e.component} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
