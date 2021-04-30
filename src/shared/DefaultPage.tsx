import React from "react";
import { Grid, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
  })
);

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
        {[0, 1, 2, 3].map((value) => (
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
