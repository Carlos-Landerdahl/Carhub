'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Logo from '/public/img/logo.svg';
import Link from 'next/link';
import { FacebookRounded, LinkedIn, Instagram, Twitter } from '@mui/icons-material';
import { ThemeProvider } from '@emotion/react';
import theme from '@/styles/theme';

const drawerWidth = 240;
const navItems = ['Criar conta', 'Iniciar sessão'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const mobile = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', height: '100vh', background: theme.palette.background.main }}
    >
      <Image src={Logo} style={{ flexGrow: '1', width: '100%', height: '80px' }} alt="Logo" />
      <Divider sx={{ background: theme.palette.default.primary, mt: '10px' }} />
      <List>
        {navItems.map((item) => (
          <Link href={item === 'Iniciar sessão' ? '/login' : '/register'} key={item} passHref>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  textAlign: 'center',
                  color: theme.palette.default.primary,
                  borderBottom: '1px solid #595959',
                }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        component="nav"
        sx={{
          height: '80px',
          background: theme.palette.background.navbar,
          justifyContent: 'center',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            color="dark"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ color: theme.palette.default.primary }} />
          </IconButton>
          <Box
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
          >
            <Link href="/" passHref>
              <Image src={Logo} width={300} height={80} alt="Logo" priority />
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex', gap: '10px' } }}>
            {navItems.map((item, index) => (
              <Link href={item === 'Iniciar sessão' ? '/login' : '/register'} key={index}>
                <Button variant="outlined" sx={{ color: theme.palette.default.primary }}>
                  {item}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {mobile}
          <Box
            sx={{
              display: 'flex',
              gap: '17px',
              justifyContent: 'flex-end',
              padding: '0 15px 29px 0',
              background: theme.palette.background.main,
              color: theme.palette.default.primary,
            }}
          >
            <FacebookRounded fontSize="medium" />
            <LinkedIn fontSize="medium" />
            <Twitter fontSize="medium" />
            <Instagram fontSize="medium" />
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
