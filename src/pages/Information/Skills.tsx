import React from "react";
import {
  Typography,
  createStyles,
  makeStyles,
  Theme,
  Card,
  CardContent,
  ListItem,
  List,
  Link,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
    listItems:{
      padding: theme.spacing(1),
      margin: '-15px',
    }
  })
);

const pgInfo = [
  {
    skill: "C++",
    duration: "5 years",
    link: "https://github.com/RylanMcA/Project-6",
  },
  {
    skill: "Java",
    duration: "6 years",
    link: "https://github.com/RylanMcA/Software-Engineering-Spring-2020",
  },
  {
    skill: "JavaScript",
    duration: "2 years",
    link: "https://github.com/RylanMcA/Assignment-8",
  },
  {
    skill: "HTML",
    duration: "3 years",
    link: "https://github.com/RylanMcA/Assignment-7",
  },
  {
    skill: "SQL",
    duration: "6 months",
    link: "#",
  },
  {
    skill: "Python",
    duration: "2 years",
    link: "https://github.com/RylanMcA/Fall-Networks-HW3",
  },
  {
    skill: "LaTeX",
    duration: "1 year",
    link: "#",
  },
  {
    skill: "React",
    duration: "1 year",
    link: "https://github.com/RylanMcA/Personal-Site",
  },
  {
    skill: "Material UI",
    duration: "1 year",
    link: "https://github.com/RylanMcA/Personal-Site",
  },
  {
    skill: "TypeScript",
    duration: "1 year",
    link: "https://github.com/RylanMcA/Personal-Site",
  },
];

const Skills = () => {
  const classes = useStyles();
  return (
    <Card elevation={0}>
      <CardContent>
        {pgInfo.map((info) => (
          <List key={info.skill} className={classes.listItems}>
            <ListItem alignItems='flex-start' disableGutters={true}>
              <Link display='block' variant='body1' href={info.link}>
                <Typography variant='subtitle1' component='p'>
                  {info.skill}
                </Typography>
              </Link>
              <Typography
                variant='body2'
                style={{ marginLeft: "10px", margin: "flex" }}
                color='textSecondary'
                component='p'
              >
                {info.duration}
              </Typography>
            </ListItem>
          </List>
        ))}
      </CardContent>
    </Card>
  );
};

// TO DO
// 1. Import Skills and Achievements into page
// 2. Style Page
// 3. Integrate into MainBody.tsx

export default Skills;
