import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
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
        <Box sx={{ p: 3, background: "red" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const tabName = [
  {
    name: "Points",
    id: "1",
  },
  {
    name: "rebounds",
    id: "2",
  },
  {
    name: "Asssits",
    id: "3",
  },
];
export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log("new", newValue);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabName.map((item, index) => {
            // let id = item.id;

            return (
              <Tab
                data="Points"
                label={item.name}
                key={item.id}
                {...a11yProps(item.index)}
                //style={{ color: "whitesmoke!important" }}
              />
            );
          })}
        </Tabs>
      </Box>
      {tabName.map((item, index) => {
        // let id = item.id;

        return (
          <TabPanel value={value} index={index}>
            <p>{item.name}</p>
          </TabPanel>
        );
      })}
    </Box>
  );
}
