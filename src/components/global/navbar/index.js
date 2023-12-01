'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  CircularProgress,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Image from 'next/image';
import Logo from '/public/img/logo.svg';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '@/styles/theme';
import { useAuth } from '@/context/AuthContext';
import Swal from 'sweetalert2';
import { FacebookRounded, LinkedIn, Instagram, Twitter } from '@mui/icons-material';

const drawerWidth = 240;
const navItems = ['Criar conta', 'Iniciar sessão'];

export default function Navbar(props) {
  const { user, logout, loading } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: 'Tem certeza?',
      text: 'Você deseja sair da sua conta?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, sair!',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      logout();
    }
  };

  const mobile = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        height: '100vh',
        background: theme.palette.background.main,
      }}
    >
      <Image
        priority
        src={Logo}
        style={{ flexGrow: '1', width: '100%', height: '80px' }}
        alt="Logo"
      />
      <Divider sx={{ background: theme.palette.default.primary, mt: '10px' }} />
      <List>
        {user ? (
          <>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  textAlign: 'center',
                  color: theme.palette.default.primary,
                }}
              >
                <ListItemText primary={`Olá, ${user.fullName}`} />
              </ListItemButton>
            </ListItem>
            <Divider sx={{ background: 'white', opacity: '0.5' }} />
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleLogout}
                sx={{
                  textAlign: 'center',
                  color: theme.palette.default.primary,
                  borderBottom: '1px solid #595959',
                }}
              >
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </>
        ) : (
          navItems.map((item) => (
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
          ))
        )}
      </List>
    </Box>
  );

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
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: isMobile ? 'space-between' : 'flex-end',
          }}
        >
          {isMobile && (
            <IconButton
              color="dark"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon sx={{ color: theme.palette.default.primary }} />
            </IconButton>
          )}
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: isMobile ? 'center' : 'space-between',
              alignItems: 'center',
              gap: isMobile ? '0' : '10px',
            }}
          >
            <Link href="/" passHref>
              <Image src={Logo} width={300} height={80} alt="Logo" priority />
            </Link>
            <Box
              sx={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}
            >
              {!isMobile && !loading && user && (
                <>
                  <span>Olá, {user.fullName}</span>
                  <Button
                    onClick={handleLogout}
                    variant="outlined"
                    sx={{ color: theme.palette.default.primary }}
                  >
                    Logout
                  </Button>
                </>
              )}
              {!isMobile && !loading && !user && (
                <>
                  {navItems.map((item, index) => (
                    <Link href={item === 'Iniciar sessão' ? '/login' : '/register'} key={index}>
                      <Button variant="outlined" sx={{ color: theme.palette.default.primary }}>
                        {item}
                      </Button>
                    </Link>
                  ))}
                </>
              )}
              {isMobile && (
                <Drawer
                  container={window}
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
                      padding: '10px',
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
              )}
            </Box>
          </Box>
          {isMobile && loading && <CircularProgress />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};
