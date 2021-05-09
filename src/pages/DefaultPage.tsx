import React from "react";
import { Container, Grid, CssBaseline, ThemeProvider } from "@material-ui/core/";
import { createMuiTheme, createStyles, makeStyles, Theme } from "@material-ui/core/styles";
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
    },
    darkRoot: {
      padding: theme.spacing(3),
      backgroundColor: "#333333",
    },
  })
);

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'BlinkMacSystemFont',
    ].join(','),
  },
});

//------------------
// HTML + TypeScript
//------------------
const DefaultPage = () => {
  const [themeMode, setThemeMode] = React.useState<boolean>(true);

  const classes = useStyles();
  return (
    <div className={classes.darkRoot}>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container maxWidth='lg'>
        <Header currentTheme={themeMode} themeChange={setThemeMode} />
        <Grid
          container
          direction='row'
          justify='flex-start'
          alignItems='flex-start'
          spacing={5}
        >
          <MainBody />
          <SiderBar />
        </Grid>
      </Container>
      </ThemeProvider>
    </div>
  );
};

export default DefaultPage;
