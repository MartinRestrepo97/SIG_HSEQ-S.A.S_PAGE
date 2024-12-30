import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  CircularProgress,
} from '@mui/material';
import { Download } from '@mui/icons-material'; // Ícono de descarga
import { getCertificados, deleteCertificado } from '../api/api'; // Importa las funciones de la API

const CertificadosDownloader = () => {
  const [searchType, setSearchType] = useState('registro');
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Obtener certificados al cargar el componente
  useEffect(() => {
    fetchCertificados();
  }, []);

  // Función para obtener los certificados desde el backend
  const fetchCertificados = async () => {
    setLoading(true);
    try {
      const response = await getCertificados();
      setResults(response.data); // Actualiza los resultados con los datos de la API
    } catch (error) {
      console.error('Error al obtener los certificados:', error);
    } finally {
      setLoading(false);
    }
  };

  // Función para manejar la búsqueda
  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulación de una búsqueda con un retraso de 1 segundo
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  // Función para manejar la descarga
  const handleDownload = (id) => {
    alert(`Descargando certificado con ID: ${id}`);
    // Aquí iría la lógica para descargar el PDF
  };
  

  // Función para eliminar un certificado
  const handleDelete = async (id) => {
    try {
      await deleteCertificado(id);
      fetchCertificados(); // Actualiza la lista después de eliminar
    } catch (error) {
      console.error('Error al eliminar el certificado:', error);
    }
  };

  return (
    <Container className="certificados-downloader-container">
      {/* Formulario de Búsqueda */}
      <Paper className="search-form">
        <Typography variant="h4" align="center" gutterBottom className="form-title">
          Consulta y Descarga de Certificados
        </Typography>
        <Box component="form" onSubmit={handleSearch}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Opción de búsqueda</InputLabel>
                <Select
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                  label="Opción de búsqueda"
                  className="select-field"
                >
                  <MenuItem value="registro">Número de Registro</MenuItem>
                  <MenuItem value="documento">Documento de Identificación</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label={searchType === 'registro' ? 'Número de Registro' : 'Documento de Identificación'}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                required
                className="text-field"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                className="search-button"
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} className="loading-spinner" /> : 'Consultar'}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      {/* Componente de Tabla y Descarga */}
      {results.length > 0 && (
        <Paper className="results-table">
          <Typography variant="h5" gutterBottom className="table-title">
            Resultados de la Búsqueda
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow className="table-header">
                  <TableCell>ID</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Estado</TableCell>
                  <TableCell>Acción</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {results.map((certificados) => (
                  <TableRow key={certificados.id} className="table-row">
                    <TableCell>{certificados.id}</TableCell>
                    <TableCell>{certificados.nombre}</TableCell>
                    <TableCell>{certificados.fecha}</TableCell>
                    <TableCell>
                      <Typography
                        variant="body2"
                        className={`status ${certificados.estado === 'Disponible' ? 'available' : 'pending'}`}
                      >
                        {certificados.estado}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {certificados.estado === 'Disponible' ? (
                        <Button
                          variant="contained"
                          startIcon={<Download />}
                          className="download-button"
                          onClick={() => handleDownload(certificados.id)}
                        >
                          Descargar
                        </Button>
                      ) : (
                        <Typography variant="body2" className="not-available">
                          No disponible
                        </Typography>
                      )}
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(certificados.id)}
                        style={{ marginLeft: '10px' }}
                      >
                        Eliminar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </Container>
  );
};

export default CertificadosDownloader;