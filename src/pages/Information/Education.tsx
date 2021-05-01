import React from "react";
import {
  Typography,
  createStyles,
  makeStyles,
  Theme,
  List,
  ListItem,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Grid,
} from "@material-ui/core";

import uarkLogo from "../public/uark_logo.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
  })
);

const pgInfo = [
  {
    type: "Bachelor of Science Degree in Computer Science",
    grad: "Expected Graduation: December 2021",
  },
  {
    type: "Candidate for Minor in Mathematics Degree",
    grad: "Expected Graduation: December 2021",
  },
];

const Education = () => {
  const classes = useStyles();
  return (
    <Card elevation={0}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          University of Arkansas
        </Typography>
        {pgInfo.map((info) => (
          <List key={info.type}>
            <ListItem divider={true}>
              <Grid
                container
                direction='column'
                justify='flex-start'
                alignItems='stretch'
              >
                <Typography gutterBottom variant='subtitle1' component='p'>
                  {info.type}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {info.grad}
                </Typography>
              </Grid>
            </ListItem>
          </List>
        ))}
      </CardContent>
    </Card>
  );
};

// TO DO
// 1. Import Education into page
// 2. Style Page
// 3. Integrate into MainBody.tsx

export default Education;
