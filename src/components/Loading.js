import { Box, CircularProgress } from "@mui/material";

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
};

export default function Loading() {
  return (
    <Box style={styles.root}>
      <CircularProgress />
    </Box>
  );
}