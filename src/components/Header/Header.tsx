import { FC, useContext, useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, useMediaQuery, Drawer, List, ListItemText, ListItemButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import './Header.scss';

import navLinks from '../../constantsPages/constantsPages';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../Context/themeContext';
import ThemeSwitch from '../Atoms/ThemeSwitch/ThemeSwitch';

interface NavLink {
  linkTo: string;
  name: string;
}

const Header: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const location = useLocation();
  const { toggleTheme } = useContext(ThemeContext); 
  const { theme } = useContext(ThemeContext);
  const logo = require('../../assets/logo-main.svg').default;

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user') || '{}');
    const todosLink = navLinks.find((link: NavLink) => link.name === 'Todos');
    if (todosLink) {
      todosLink.linkTo = savedUser && savedUser.id ? '/todos' : '/start';
    }
  }, []);

  useEffect(() => {
    const path = location.pathname;
    const activeLink = navLinks.find((link: NavLink) => link.linkTo === path);
    const index = activeLink ? navLinks.indexOf(activeLink) : -1;
    setActiveIndex(index);
  }, [location]);

  const isMobile = useMediaQuery('(max-width: 768px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const renderDesktopHeader = () => (
    <AppBar position="fixed">
    <Toolbar>
      <Typography style={{ fontWeight: '700', fontSize: '30px', color:'#d368b1' }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <img src={logo} alt="Logo" width={'50px'} />
        To
        <span style={{ color: '#8685e7', fontWeight: '700', fontSize: '30px' }}>
          Do
        </span>
      </Typography>
      {navLinks.map((link: NavLink, index: number) => (
        <Link
          key={index}
          to={link.linkTo}
          className={activeIndex === index ? "active nav-link" : "nav-link"}
          style={activeIndex === index ? { borderBottom: "2px solid white"} : undefined}
        >
          <ListItemText primary={link.name} />
        </Link>
      ))}
      <div className='switch'>
        <ThemeSwitch onClick={toggleTheme}/>
      </div>
      </Toolbar>
      </AppBar>
  );

  
const renderMobileHeader = () => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography style={{ fontWeight: '700', fontSize: '30px', color:'#d368b1' }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <img src={logo} alt="Logo" width={'50px'} />
        To
        <span style={{ color: '#8685e7', fontWeight: '700', fontSize: '30px' }}>
          Do
        </span>
      </Typography>
      <MenuIcon onClick={handleDrawerToggle} />
      <Drawer 
        anchor="right" 
        open={drawerOpen} 
        onClose={handleDrawerToggle}
        PaperProps={{ 
          style: { backgroundColor: theme.palette.background.default, paddingTop:'40px' }, 
        }}
      >
        <List>
          {navLinks.map((link: NavLink, index: number) => (
            <ListItemButton
              key={index}
              component="a"
              href={link.linkTo}
              className={activeIndex === index ? "active nav-link" : "nav-link"}
              style={activeIndex === index ? { borderBottom: "2px solid white"} : undefined}
            >
              <ListItemText primary={link.name} />
            </ListItemButton>
          ))}
          <div className='box-mob-switch'>
          <ThemeSwitch onClick={toggleTheme}/>
        </div>
        </List>
      </Drawer>
    </Toolbar>
  </AppBar>
  );
  

  return (
    <header className='header'>
        {isMobile ? renderMobileHeader() : renderDesktopHeader()}
    </header>
  );
}

export default Header;
