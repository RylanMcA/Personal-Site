import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Box, Grid, Tab, Tabs, Typography } from "@material-ui/core";
import Education from "./Information/Education";
import Leadership from "./Information/Leadership";
import Skills from "./Information/Skills";
import Work from "./Information/Work";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
  })
);

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={4}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `Information-Tab-${index}`,
    "aria-controls": `Information-Tab-${index}`,
  };
}

const MainBody = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid item xs={12} md={8}>
      <div className={classes.root} >
        <AppBar position='relative'>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='simple tabs example'
            centered
          >
            <Tab label='EDU' {...a11yProps(0)} />
            <Tab label='WORK' {...a11yProps(1)} />
            <Tab label='LEADING' {...a11yProps(2)} />
            <Tab label='SKILLS' {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Education />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Work />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Leadership />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Skills />
        </TabPanel>
      </div>
    </Grid>
  );
};

export default MainBody;
