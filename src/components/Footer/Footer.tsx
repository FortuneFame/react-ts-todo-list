import { FC } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.scss';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

const logo = require('../../assets/logo-main.svg').default;

const Footer: FC = () => {
  return (
    <footer className='footer'>
      <AppBar position='fixed' color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <Typography style={{ fontWeight: '700', fontSize: '30px', color: '#d368b1' }} variant="h6" component="div" sx={{ flexGrow: 3 }}>
            <img src={logo} alt="Logo" width={'50px'} />
            To
            <span style={{ color: '#8685e7', fontWeight: '700', fontSize: '30px' }}>
              Do
            </span>
          </Typography>
          <div>
            <IconButton className="icon-button" color="inherit" href="https://github.com/FortuneFame" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </IconButton>
            <IconButton className="icon-button" color="inherit" href="mailto:fortunefame1710@gmail.com">
              <MailOutlineIcon />
            </IconButton>
            <IconButton className="icon-button" color="inherit" href="tel:+48735635597">
              <PhoneIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </footer>
  );
};

export default Footer;
