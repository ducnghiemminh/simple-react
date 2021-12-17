
import { useTranslation } from 'react-i18next';

/* Material */
import { Box, Typography } from '@mui/material';

/* Components*/
import NavBar from '../../components/Navbar';

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <NavBar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: 'calc(100vh - 64px)' }}
      >
        <Typography component="h1" variant="h2" textAlign="center">
          {t('translation.about')}
        </Typography>
      </Box>
    </>
  );
}
