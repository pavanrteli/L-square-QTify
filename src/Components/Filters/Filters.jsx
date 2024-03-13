import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { useState } from "react";
import styles from "./Filters.module.css";

export default function Filters({ index, setIndex, Genres }) {
  const [value, setValue] = useState("all");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setIndex(newValue);
  };

  // console.log(Genres.data);
  // if(Genres.data){
  //   Genres.data.map((item)=>{
  //     console.log(item,"iiiiiii");
  //   })
  // }

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 8, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            style={{ indicatorColor: "#34C94B" }}
          >
            <Tab style={{ color: "#FFFFFF" }} label="All" value="all" />
            {
              Genres.data &&
              Genres.data.map((item,index)=>(
                <Tab key={index} style={{ color: "#FFFFFF" }} label={item.label} value={item.key} />
              ))
            }
            {/* <Tab style={{ color: "#FFFFFF" }} label="Rock" value="rock" />
            <Tab style={{ color: "#FFFFFF" }} label="Pop" value="pop" />
            <Tab style={{ color: "#FFFFFF" }} label="Jazz" value="jazz" />
            <Tab style={{ color: "#FFFFFF" }} label="Blues" value="blues" /> */}
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
