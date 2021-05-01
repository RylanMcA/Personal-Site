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


const Leadership = () => {
  const classes = useStyles();
  return (
    <Typography>
      Leadership experience includes...
    </Typography>
  );
};

// TO DO
// 1. Import Leadership/Volunteer Experience into page
// 2. Style Page
// 3. Integrate into MainBody.tsx 

export default Leadership;