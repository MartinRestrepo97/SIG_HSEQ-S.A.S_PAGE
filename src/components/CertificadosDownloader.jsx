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
import axios from 'axios';

const CertificadosDownloader = () => {
  const [clientes, setClientes] = useState([]); // Estado para almacenar los datos de clientes
  const [loading, setLoading] = useState(false); // Estado para manejar el loading
  const [error, setError] = useState(null); // Estado para manejar errores
  const [searchType, setSearchType] = useState('documento'); // Estado para el tipo de búsqueda
  const [searchValue, setSearchValue] = useState(''); // Estado para el valor de búsqueda
  const [results, setResults] = useState([]); // Estado para almacenar los resultados de la búsqueda

  // Obtener la lista de clientes al montar el componente
  useEffect(() => {
    if (loading === true && searchValue !== '') {
      const fetchClientes = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/constultar/${searchValue}`);
          console.log('response->', response);
          setClientes(response.data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchClientes();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  // Manejar la búsqueda de clientes
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim() === '') {
      setResults(clientes); // Si no hay valor de búsqueda, mostrar todos los clientes
      return;
    }

    // Filtrar clientes por documento
    const filteredClientes = clientes.filter((clientes) =>
      clientes.documento.includes(searchValue)
    );
    setResults(filteredClientes);
  };

  // Manejar la descarga de certificados
  const handleDownload = (id) => {
    alert(`Descargando certificado con ID: ${id}`);
    // Aquí puedes implementar la lógica para descargar el certificado
  };

  // Manejar la eliminación de certificados
  const handleDelete = (id) => {
    alert(`Eliminando certificado con ID: ${id}`);
    // Aquí puedes implementar la lógica para eliminar el certificado
  };

  if (loading) {
    return <CircularProgress />; // Mostrar un spinner de carga
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>; // Mostrar un mensaje de error
  }

  return (
    <Container className="certificados-downloader-container">
      {/* Formulario de Búsqueda */}
      <Paper className="search-form" sx={{ p: 3, mb: 3 }}>
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
                  <MenuItem value="documento">Documento de Identificación</MenuItem>
                </Select>
              </FormControl>
            </Grid>
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

      {/* Componente de Tabla y Descarga */}
      {results.length > 0 && (
        <Paper className="results-table" sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom className="table-title">
            Resultados de la Búsqueda
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow className="table-header">
                  <TableCell>ID</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Documento</TableCell>
                  <TableCell>Acción</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {results.map((clientes) => (
                  <TableRow key={clientes.id} className="table-row">
                    <TableCell>{clientes.id}</TableCell>
                    <TableCell>{clientes.nombre}</TableCell>
                    <TableCell>{clientes.documento}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        startIcon={<Download />}
                        className="download-button"
                        onClick={() => handleDownload(clientes.id)}
                      >
                        Descargar
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(clientes.id)}
                        sx={{ ml: 2 }}
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