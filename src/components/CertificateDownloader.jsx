import { useState } from 'react';
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

// Datos de ejemplo para la tabla
const certificates = [
  { id: 1, name: 'Certificado de Seguridad', date: '2023-10-01', status: 'Disponible' },
  { id: 2, name: 'Certificado de Calidad', date: '2023-10-05', status: 'Disponible' },
  { id: 3, name: 'Certificado Ambiental', date: '2023-10-10', status: 'Pendiente' },
];

const CertificateDownloader = () => {
  const [searchType, setSearchType] = useState('registro');
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulación de una búsqueda con un retraso de 1 segundo
    setTimeout(() => {
      setResults(certificates); // Muestra todos los certificados de ejemplo
      setLoading(false);
    }, 1000);
  };

  const handleDownload = (id) => {
    alert(`Descargando certificado con ID: ${id}`);
    // Aquí iría la lógica para descargar el PDF
  };

  return (
    <Container className="certificate-downloader-container">
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
                {results.map((certificate) => (
                  <TableRow key={certificate.id} className="table-row">
                    <TableCell>{certificate.id}</TableCell>
                    <TableCell>{certificate.name}</TableCell>
                    <TableCell>{certificate.date}</TableCell>
                    <TableCell>
                      <Typography
                        variant="body2"
                        className={`status ${certificate.status === 'Disponible' ? 'available' : 'pending'}`}
                      >
                        {certificate.status}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {certificate.status === 'Disponible' ? (
                        <Button
                          variant="contained"
                          startIcon={<Download />}
                          className="download-button"
                          onClick={() => handleDownload(certificate.id)}
                        >
                          Descargar
                        </Button>
                      ) : (
                        <Typography variant="body2" className="not-available">
                          No disponible
                        </Typography>
                      )}
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

export default CertificateDownloader;