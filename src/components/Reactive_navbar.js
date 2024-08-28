import * as React from "react";
import { AppBar, Box, Button, Container, Stack, Toolbar, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const pages = [
  { title: 'Home', path: '/' },
  { title: 'Funding', path: '/funding' },
  { title: 'Get in touch', path: '/contact-us' },
  { title: 'Softwares', path: '/software' }

];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '0.5em 0',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo Section */}
          <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' }, flexGrow: 1 }}>
            <img
              src="https://www.hhu.de/typo3conf/ext/wiminno/Resources/Public/img/hhu_logo.png"
              alt="Logo"
              width="150px"
              style={{ marginRight: '1em' }}
            />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
            <img
              src="https://www.hhu.de/typo3conf/ext/wiminno/Resources/Public/img/hhu_logo.png"
              alt="Logo"
              width="250px"
              style={{ marginRight: '1em' }}
            />
          </Box>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: '#333333',
              textDecoration: 'none',
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            LigniFind: A Computational Toolkit for Lignin Simulation 
          </Typography>
          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="menu"
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
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" component={Link} to={page.path}>
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Desktop Navigation Buttons */}
          <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
            {pages.map((page) => (
              <Button
                key={page.path}
                component={Link}
                to={page.path}
                variant="outlined"
                color="primary"
                sx={{
                  color: '#333333',
                  borderColor: '#8adeba',
                  '&:hover': {
                    backgroundColor: '#8adeba',
                    borderColor: '#8adeba',
                    color: '#ffffff',
                  },
                }}
              >
                {page.title}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
