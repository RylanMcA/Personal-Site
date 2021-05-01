import React from "react";
import { Typography, createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      wdith: "100%",
      padding: theme.spacing(2),
    },
  })
);


const Work = () => {
  const classes = useStyles();
  return (
    <Typography>
      Work experience includes...
    </Typography>
  );
};


// TO DO
// 1. Import Work Experience into page
// 2. Style Page
// 3. Integrate into MainBody.tsx

export default Work;