import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import Popular from './pages/Popular';
import Categories from './pages/Categories';
import NewBooks from './pages/Newbooks';
import FAQ from './pages/FAQ';
import MuiNavbar, { Page } from './Components/MuiNavbar';
import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Forgot from './pages/Forgot';
import { Container, createTheme, ThemeProvider } from '@mui/material';
import ItemDetail from './Components/ItemDetail';
import Footer from './Components/Footer';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#3e8ed0',
    },
    btnColor: {
      main: '#cf2122',
      contrastText: '#ffffff',
    },
    navbarColor: {
      main: '#06121e',
    },
  },
});

const pages: Page[] = [
  {
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
  {
    path: '/sign-in',
    component: <SignIn />,
  },
  {
    path: '/sign-up',
    component: <SignUp />,
  },
  {
    path: '/forgot',
    component: <Forgot />,
  },
  {
    path: '/item-detail/:id',
    component: <ItemDetail />,
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MuiNavbar
        pages={pages.filter((e) => {
          return e.label !== undefined;
        })}
      />
      <Container
        sx={{ marginTop: '100px', minHeight: '100vh' }}
        maxWidth={'xl'}
      >
        <Routes>
          {pages.map((e) => (
            <Route key={e.path} path={e.path} element={e.component} />
          ))}
        </Routes>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
