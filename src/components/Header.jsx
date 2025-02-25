import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink, Link } from 'react-router-dom';
import AvatarImg from './AvatarImg';

const pages = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Settings', path: '/settings' },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
      <AppBar position="static" sx={{ width: '100%', flexShrink: 0 }}>
        <Container sx={{ width: '100%' }}>
          <Toolbar disableGutters>
            <Link to="/">
              <AvatarImg sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: 'center' }}>
                      <NavLink
                        to={page.path}
                        style={({ isActive }) => ({
                          textDecoration: 'none',
                          color: 'inherit',
                          fontWeight: isActive ? 'bold' : 'normal',
                          borderBottom: isActive ? '2px solid white' : 'none',
                          padding: '5px',
                        })}
                      >
                        {page.label}
                      </NavLink>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <Link to="/">
                <AvatarImg />
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.path}
                  sx={{
                    my: 1,
                    color: 'white',
                    display: 'block',
                  }}
                >
                  <NavLink
                    to={page.path}
                    style={({ isActive }) => ({
                      textDecoration: 'none',
                      color: 'inherit',
                      fontWeight: isActive ? 'bold' : 'normal',
                      borderBottom: isActive ? '2px solid white' : 'none',
                      padding: '5px',
                    })}
                  >
                    {page.label}
                  </NavLink>
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Change theme">
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Tooltip title="On / Off sound">
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
}

export default Header;
