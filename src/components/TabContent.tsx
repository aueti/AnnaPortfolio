import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';

const MyComponent = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box style={{display:'flex', justifyContent:'space-evenly', backgroundColor: theme.palette.primary.main}} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" style={{color: value===0 ? theme.palette.common.black: theme.palette.common.white}} {...a11yProps(0)} />
          <Tab label="Icarus Protocol" style={{color: value===1 ? theme.palette.common.black: theme.palette.common.white}} {...a11yProps(1)} />
          <Tab label="Destiny Recommender" style={{color: value===2 ? theme.palette.common.black: theme.palette.common.white}} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Home
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Icarus Protocol
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Destiny Recommender
      </CustomTabPanel>
    </Box>
  );
}