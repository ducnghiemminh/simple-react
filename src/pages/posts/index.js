import { useTranslation } from 'react-i18next';

/* Hooks */
import useFetchPosts from '../../hooks/useFetchPosts';

/* Material */
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Container,
} from '@mui/material';

/* Components */
import NavBar from '../../components/Navbar';

export default function Posts() {
  const posts = useFetchPosts();
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <Container>
        <Box sx={{ py: 8 }}>
          <Typography component="h1" variant="h2" textAlign="center" sx={{ mb: 5 }}>
            {t('translation.posts')}
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {posts &&
              posts.map((post) => (
                <Grid item xs={2} sm={4} md={4} key={`post_${post.id}`}>
                  <Card>
                    <CardContent>
                      <Typography
                        component="h2"
                        variant="h5"
                        color="text.primary"
                        gutterBottom
                      >
                        {post.title}
                      </Typography>
                      <Typography variant="body2">{post.body}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
