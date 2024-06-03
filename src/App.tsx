import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import './App.css';
import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import TabContent from './components/TabContent';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
}));

function Content() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar style={{boxShadow:'none'}} position='static'>
        <StyledToolbar>
          <Typography variant='h6' color='inherit' component='div'>Anna's Portfolio Site</Typography>
          <IconButton edge='end' onClick={colorMode.toggleColorMode} color='inherit'>
            {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </StyledToolbar>
      </AppBar>
      <TabContent />
    </Box>
  );
}

export default function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Content />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
