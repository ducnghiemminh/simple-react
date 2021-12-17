import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { PATHS } from '../routes/paths';

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Simple React
        </Typography>
        <Button component={Link} to={PATHS.home} color="inherit">Home</Button>
        <Button component={Link} to={PATHS.about} color="inherit">About</Button>
        <Button component={Link} to={PATHS.posts} color="inherit">Posts</Button>
      </Toolbar>
    </AppBar>
  );
}
