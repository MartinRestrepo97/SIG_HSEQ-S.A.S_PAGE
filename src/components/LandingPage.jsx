import { Box, Typography, Button, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

// Imágenes de fondo y contenido
const backgroundImage = 'https://via.placeholder.com/1500'; // Reemplaza con tu imagen de fondo
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

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const LandingPage = () => {
  return (
    <Box>
      {/* Sección Hero */}
      <HeroSection>
        <Container>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
            Candela conoce el mundo
          </Typography>
          <Typography variant="h5" gutterBottom>
            Candela Barroso - Experta y directora de fotografía de viajes
          </Typography>
          <Button variant="contained" size="large" sx={{ mt: 3, backgroundColor: '#005cc5' }}>
            Conoce a Candela
          </Button>
        </Container>
      </HeroSection>

      {/* Sección de Servicios */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#005cc5' }}>
          Qué esperar de nosotros
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom sx={{ mb: 6 }}>
          Los más destacado en consultoría y gestión.
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                  <Button variant="contained" sx={{ mt: 2, backgroundColor: '#005cc5' }}>
                    Más información
                  </Button>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Sección de Candela */}
      <Box sx={{ backgroundColor: '#f4f4f4', py: 8 }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                image={candelaImage}
                alt="Candela Barroso"
                sx={{ borderRadius: '8px' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#005cc5' }}>
                Conoce a Candela
              </Typography>
              <Typography variant="body1" gutterBottom>
                Candela Barroso es una experta en fotografía de viajes con más de 10 años de experiencia. Su pasión por explorar nuevos lugares y capturar momentos únicos la ha llevado a trabajar en proyectos internacionales.
              </Typography>
              <Button variant="contained" sx={{ mt: 2, backgroundColor: '#005cc5' }}>
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