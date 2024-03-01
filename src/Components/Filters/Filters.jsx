// import React from 'react'

// function Filters() {
//   return (
//     <div>Filters</div>
//   )
// }

// export default Filters

import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import styles from './Filters.module.css';
import section from '../Section/Section';

export default function Filters({index, setIndex}) {
  const [value, setValue] = React.useState('all');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("tttttttttttt");
    setIndex(newValue);
    // console.log(,"eeeeeeeee");
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList  onChange={handleChange} aria-label="lab API tabs example">
            <Tab style={{color:"#FFFFFF"}} label="All" value="all" />
            <Tab style={{color:"#FFFFFF"}} label="Rock" value="rock" />
            <Tab style={{color:"#FFFFFF"}} label="Pop" value="pop" />
            <Tab style={{color:"#FFFFFF"}} label="Jazz" value="jazz" />
            <Tab style={{color:"#FFFFFF"}} label="Blues" value="blues" />
          </TabList>
        </Box>
        {/* <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Three</TabPanel>
        <TabPanel value="5">Item Three</TabPanel> */}
      </TabContext>
    </Box>
  );
}

// export default Filters
