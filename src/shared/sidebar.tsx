import React from "react";
import { Grid, Link, Paper, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

//------------------
//       CSS
//------------------
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
    sidebarAboutBox: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
      marginTop: theme.spacing(3),
    },
  })
);

//------------------
// HTML + TypeScript
//------------------
const socials = [
  {
    name: "GitHub",
    iconType: <GitHubIcon />,
    link: "https://github.com/RylanMcA",
  },
  {
    name: "Twitter",
    iconType: <TwitterIcon />,
    link: "https://twitter.com/SpiderDiclonii",
  },
];

const title: String = "About me";
const description: String = "College student attending University of Arkansas. Candidate for a Bacholer of Science in Computer Science. Currently unemployed but seeking internships or full time employment";

const Sidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid item xs={12} md={4}>
        <Paper elevation={0} className={classes.sidebarAboutBox}>
          <Typography variant='h6' gutterBottom>
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </Paper>
        <div>
          <Typography
            variant='h6'
            gutterBottom
            className={classes.sidebarSection}
          >
            Social
          </Typography>
          {socials.map((network) => (
            <Link display='block' variant='body1' href={network.link}>
              <Grid container direction='row' spacing={1} alignItems='center'>
                <Grid item>{network.iconType}</Grid>
                <Grid item>{network.name}</Grid>
              </Grid>
            </Link>
          ))}
        </div>
      </Grid>
    </div>
  );
};

export default Sidebar;
