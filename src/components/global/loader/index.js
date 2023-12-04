import { Box } from '@mui/material';
import './styles.css';

const GlobalLoader = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <div className="spinner"></div>
    </Box>
  );
};

export default GlobalLoader;
