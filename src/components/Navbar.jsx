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
    <AppBar position="static" sx={{ backgroundColor: '#005cc5', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo y nombre de la empresa */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
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
              sx={{ mt: 5 }}
            >
              <MenuItem onClick={() => handleNavigation('landing')} sx={{ fontWeight: 'bold' }}>
                Inicio
              </MenuItem>
              <MenuItem onClick={() => handleNavigation('certificados')} sx={{ fontWeight: 'bold' }}>
                Consultar Certificados
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              color="inherit"
              onClick={() => handleNavigation('landing')}
              sx={{ fontWeight: 'bold', textTransform: 'none', fontSize: '1rem' }}
            >
              Inicio
            </Button>
            <Button
              color="inherit"
              onClick={() => handleNavigation('certificados')}
              sx={{ fontWeight: 'bold', textTransform: 'none', fontSize: '1rem' }}
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