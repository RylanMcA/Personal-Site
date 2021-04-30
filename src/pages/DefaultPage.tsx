import React from "react";
import { Grid, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import GitHubIcon from '@material-ui/icons/GitHub';

//------------------
//       CSS
//------------------
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
  })
);


//------------------
// HTML + TypeScript
//------------------
const DefaultPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        className={classes.root}
        direction='row'
        justify='space-evenly'
        alignItems='center'
      >
        {[1,2,3,4].map((value) => (
          <Grid item key={value}>
            <Button variant='contained' color='primary'>
              {value}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DefaultPage;
