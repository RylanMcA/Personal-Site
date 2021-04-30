import React from "react";
import { Container, Grid } from "@material-ui/core/";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MainBody from "./MainBody";
import SiderBar from "../shared/sidebar";
import Header from "../shared/header";

//------------------
//       CSS
//------------------
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    lightRoot: {
      padding: theme.spacing(3),
      backgroundColor: "#FFFFFF",
      width: "100%",
      height: "100%",
    },
    darkRoot: {
      padding: theme.spacing(3),
      backgroundColor: "#333333",
      width: "100%",
      height: "100%",
    },
  })
);

//------------------
// HTML + TypeScript
//------------------
const DefaultPage = () => {
  const [themeMode, setThemeMode] = React.useState<boolean>(true);

  const classes = useStyles();
  return (
    <div className={themeMode ? classes.lightRoot : classes.darkRoot}>
      <Container maxWidth='lg'>
        <Header currentTheme={themeMode} themeChange={setThemeMode} />
        <Grid
          container
          direction='row'
          justify='flex-start'
          alignItems='center'
          xs={9}
        >
          <Grid item>
            <MainBody />
          </Grid>
          <Grid item>
            <SiderBar />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DefaultPage;
