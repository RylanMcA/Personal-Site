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


const Skills = () => {
  const classes = useStyles();
  return (
    <Typography>
      Skills include...
    </Typography>
  );
};

// TO DO
// 1. Import Skills and Achievements into page
// 2. Style Page
// 3. Integrate into MainBody.tsx

export default Skills;