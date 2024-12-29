import { Box, Typography, Button, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

// Imágenes de fondo y contenido
const candelaImage = 'https://via.placeholder.com/300'; // Reemplaza con la imagen de Candela

const services = [
  {
    title: 'Consultoría HSEQ',
    description: 'Ofrecemos asesoría en seguridad, salud y medio ambiente.',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Interventoría Técnica',
    description: 'Supervisión y control de proyectos de construcción.',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Gestión Ambiental',
    description: 'Soluciones para el manejo sostenible de recursos.',
    image: 'https://via.placeholder.com/300',
  },
];

const LandingPage = () => {
  return (
    <Box>
      {/* Sección Hero */}
      <Box className="hero-section">
        <Container>
          <Typography variant="h2" gutterBottom className="hero-title">
            Candela conoce el mundo
          </Typography>
          <Typography variant="h5" gutterBottom>
            Candela Barroso - Experta y directora de fotografía de viajes
          </Typography>
          <Button variant="contained" size="large" className="hero-button">
            Conoce a Candela
          </Button>
        </Container>
      </Box>

      {/* Sección de Servicios */}
      <Container className="services-section">
        <Typography variant="h4" align="center" gutterBottom className="services-title">
          Qué esperar de nosotros
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom className="services-subtitle">
          Los más destacado en consultoría y gestión.
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className="service-card">
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom className="service-card-title">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                  <Button variant="contained" className="service-card-button">
                    Más información
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Sección de Candela */}
      <Box className="candela-section">
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                image={candelaImage}
                alt="Candela Barroso"
                className="candela-image"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom className="candela-title">
                Conoce a Candela
              </Typography>
              <Typography variant="body1" gutterBottom>
                Candela Barroso es una experta en fotografía de viajes con más de 10 años de experiencia. Su pasión por explorar nuevos lugares y capturar momentos únicos la ha llevado a trabajar en proyectos internacionales.
              </Typography>
              <Button variant="contained" className="candela-button">
                Ver más
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;