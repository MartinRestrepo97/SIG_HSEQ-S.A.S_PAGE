import { Box, Typography, Button, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

// Imágenes de fondo y contenido
const candelaImage = 'src/logo/logo.png'; // Reemplaza con la imagen de Candela

const services = [
  {
    title: 'Consultoría HSEQ',
    description: 'Ofrecemos asesoría en seguridad, salud y medio ambiente.',
    image: 'https://media.licdn.com/dms/image/v2/D4E12AQHoQ0SbEtOH_g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1691970046745?e=2147483647&v=beta&t=peMZtZMFI6bM1Xg2U_g1SwhmMiSwLcyZN2sZzmOyfuw',
  },
  {
    title: 'Interventoría Técnica',
    description: 'Supervisión y control de proyectos de construcción.',
    image: 'https://www.urbicad.com/img/fondo_p4.jpg',
  },
  {
    title: 'Gestión Ambiental',
    description: 'Soluciones para el manejo sostenible de recursos.',
    image: 'https://www.polisura.edu.co/wp-content/uploads/2024/08/gestion-ambiental.jpg',
  },
];

const LandingPage = () => {
  return (
    <Box>
      {/* Sección Hero */}
      <Box className="hero-section">
        <Container>
          <Typography variant="h2" gutterBottom className="hero-title">
            Conoce a SIG HSEQ S.A.S
          </Typography>
          <Typography variant="h5" gutterBottom>
            SIG HSEQ SAS - Experto y en Sistemas de Gestion
          </Typography>
          <Button variant="contained" size="large" className="hero-button">
            Conoce a SIG HSEQ SAS
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
                Conoce a SIG HSEQ SAS
              </Typography>
              <Typography variant="body1" gutterBottom>
                SIG HSEQ SAS es una experto en sistemas de gestion con más de 10 años de experiencia. Su pasión por aplicar las normativas momentos únicos la ha llevado a trabajar en proyectos internacionales.
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