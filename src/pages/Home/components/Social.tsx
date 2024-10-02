import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Card, TextField } from "@mui/material";
import FrientList from "./FriendsList";
import SearchPlayers from "./SearchPlayers";

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
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Social() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="px-7 py-4" style={{ width: "100%", height: "100%" }}>
      <Box sx={{ width: "100%" }}>
        <Card sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Social" {...a11yProps(0)} />
            <Tab label="Friends" {...a11yProps(1)} />
          </Tabs>
        </Card>
        <div className="py-2">
          <TextField fullWidth label="Search" />
        </div>
        <CustomTabPanel value={value} index={0}>
          <SearchPlayers />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="max-h-[70dvh] overflow-y-auto">
            <FrientList />
          </div>
        </CustomTabPanel>
      </Box>
    </div>
  );
}

export default Social;
