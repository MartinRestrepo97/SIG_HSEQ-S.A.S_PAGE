import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../logo/logo.png'; // Asegúrate de tener un logo en la carpeta src

const Navbar = ({ setCurrentPage }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Cambia a 'md' para tablets
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    handleMenuClose();
  };

  return (
    <AppBar position="static" className="navbar">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo y nombre de la empresa */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" className="navbar-logo" />
          <Typography variant="h6" className="navbar-title">
            SIG-HSEQ SAS
          </Typography>
        </Box>

        {/* Menú de navegación */}
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              className="mobile-menu"
            >
              <MenuItem onClick={() => handleNavigation('landing')} className="mobile-menu-item">
                Inicio
              </MenuItem>
              <MenuItem onClick={() => handleNavigation('certificados')} className="mobile-menu-item">
                Consultar Certificados
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              color="inherit"
              onClick={() => handleNavigation('landing')}
              className="navbar-button"
            >
              Inicio
            </Button>
            <Button
              color="inherit"
              onClick={() => handleNavigation('certificados')}
              className="navbar-button"
            >
              Consultar Certificados
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};

export default Navbar;