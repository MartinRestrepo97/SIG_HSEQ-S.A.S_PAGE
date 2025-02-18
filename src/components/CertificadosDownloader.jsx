import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
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
// import axios from 'axios';

const CertificadosDownloader = () => {
  // eslint-disable-next-line no-unused-vars
  const [cliente, setCliente] = useState(null); // Estado para almacenar los datos del cliente
  const [loading, setLoading] = useState(false); // Estado para manejar el loading
  const [error, setError] = useState(null); // Estado para manejar errores
  const [searchValue, setSearchValue] = useState(''); // Estado para el valor de búsqueda

  // Obtener la lista de clientes al montar el componente
  useEffect(() => {
    if (loading && searchValue !== '') {
      const fetchClientes = async () => {
        try {
          const response = await fetch(`https://sig-hseq-sas.site/api/constultar/${searchValue}`);
          console.log('response2->', response);
          
          setCliente(response.data);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        } finally {
          setLoading(false);
        }
      };

      fetchClientes();
    }
  }, [loading, searchValue]);
  useEffect(() => {
    console.log('cambio cliente', cliente);
  }, [cliente])
  return (
    <Container className="certificados-downloader-container">
      {/* Formulario de Búsqueda */}
      <Paper className="search-form" sx={{ p: 5, mb: 2 }}>
        <Typography variant="h4" align="center" gutterBottom className="form-title">
          Consulta y Descarga de Certificados
        </Typography>
        <Box component="form">
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Documento de Identificación"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                required
                className="text-field"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                onClick={() => setLoading(true)}
                type="submit"
                variant="contained"
                fullWidth
                className="search-button"
                disabled={loading || searchValue === ''}
              >
                {loading ? <CircularProgress size={24} /> : 'Consultar'}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      {/* Mostrar el estado de carga o errores */}
      {loading && <CircularProgress />}
      {error && <Typography color="error">Error: {error}</Typography>}

      {/* Mostrar los resultados de la búsqueda */}
      {!loading && !error && cliente && (
        <Paper className="results-table" sx={{ p: 3 }}>
          <Box>
            <Typography variant="h5" gutterBottom className="table-title">
              Resultados de la Búsqueda
            </Typography>
            <Box display="flex">
              <Box display="inline-flex" width="50%">
                <Typography mr={1} variant="subtitle1" gutterBottom>
                  Nombre:
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {cliente.nombre}
                </Typography>
              </Box>
              <Box display="inline-flex" width="50%">
                <Typography mr={1} variant="subtitle1" gutterBottom>
                  Apellido:
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {cliente.apellido}
                </Typography>
              </Box>
            </Box>
            <Box display="flex">
              <Box display="inline-flex" width="50%">
                <Typography mr={1} variant="subtitle1" gutterBottom>
                  Cedula:
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {cliente.cedula}
                </Typography>
              </Box>
              <Box display="inline-flex" width="50%">
                <Typography mr={1} variant="subtitle1" gutterBottom>
                  Correo:
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {cliente.correo}
                </Typography>
              </Box>
            </Box>
          </Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow className="table-header">
                  <TableCell>Curso</TableCell>
                  <TableCell>Estado</TableCell>
                  <TableCell>Fecha Inicio</TableCell>
                  <TableCell>Fecha Fin</TableCell>
                  <TableCell>Documento PDF</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cliente.certificados && cliente.certificados.length > 0 &&
                  cliente.certificados.map((certificado) => (
                    <TableRow key={certificado.id} className="table-row">
                      <TableCell>{certificado.certificados_id}</TableCell>
                      <TableCell>{certificado.estado_validez}</TableCell>
                      <TableCell>{certificado.fecha_inicio_validez}</TableCell>
                      <TableCell>{certificado.fecha_fin_validez}</TableCell>
                      <TableCell>
                        <Button
                          component="a"
                          href={`https://sig-hseq-sas.site/api/descargar-certificado-cliente/${certificado.id}`}
                          target="_blank"
                          variant="contained"
                          startIcon={<Download />}
                          className="download-button"
                        >
                          Descargar
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