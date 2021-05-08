import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Toolbar, Typography, Switch } from "@material-ui/core";

//------------------
//       CSS
//------------------
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: "space-between",
      overflowX: "auto",
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
  })
);

//------------------
// HTML + TypeScript
//------------------

const title: String = "Rylan McAlister's Portfolio Website";

const DefaultPage = (props: any) => {
  const classes = useStyles();

  const handleThemeChange = () => {
    props.themeChange(!props.currentTheme);
  };

  return (
      <Toolbar className={classes.toolbar}>
        <Typography
          component='h2'
          variant='h5'
          color='inherit'
          align='center'
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        WIP
        <Switch disabled onChange={() => handleThemeChange()} />
      </Toolbar>
  );
};

export default DefaultPage;
