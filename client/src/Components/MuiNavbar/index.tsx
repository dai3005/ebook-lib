import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import { FC, useState, useEffect } from 'react';
import './style.css';

export type Page = {
  label?: string;
  path: string;
  component: any;
};

type propsPage = {
  pages: Page[];
};

const MuiNavbar: FC<propsPage> = ({ pages }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const Logo = () => (
    <Link to="/">
      <img
        alt="logo"
        src={'https://xemphim.club/static/skin/logo-full.png'}
        className={'logo'}
      />
    </Link>
  );
  let navigate = useNavigate();

  const [scrollY, setScrollY] = useState(0);

  const handleScrollY = () => {
    const scrollY = window.scrollY;
    setScrollY(scrollY);
  };

  useEffect(() => {
    handleScrollY();
    window.addEventListener('scroll', handleScrollY);
    return () => {
      window.removeEventListener('scroll', handleScrollY);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={
        scrollY < 50
          ? { backgroundColor: 'transparent' }
          : { backgroundColor: '#495371' }
      }
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <Logo />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size={'large'}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label}>
                  <Link to={page.path}>
                    <Typography textAlign="center">{page.label}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <Logo />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
          ></Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            className="button-nav"
          >
            {pages.map((page) => (
              <Button
                key={page.path}
                onClick={() => navigate(page.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.label === 'Search' ? (
                  <div>
                    <SearchIcon /> {page.label}
                  </div>
                ) : (
                  page.label
                )}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              onClick={() => navigate('/sign-in')}
              color="btnColor"
            >
              Log In
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MuiNavbar;
