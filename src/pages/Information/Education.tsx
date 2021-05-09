import React from "react";
import {
  Typography,
  createStyles,
  makeStyles,
  Theme,
  List,
  ListItem,
  Card,
  CardMedia,
  CardContent,
  Grid,
  createMuiTheme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '1px',
      background: '#595959'
    },
    textHeader: {
      color: "#1890ff"
    },
    textSubOne: {
      color: "#1890ff"
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

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Segoe UI"',
    ].join(','),
  },
});

const Education = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={4}>
      <CardContent>
        <div style={{ marginBottom:'20px', display: "flex", justifyContent: "center" }}>
          <CardMedia
            image='https://i.imgur.com/ZV0O56H.jpg?1'
            style={{ height: "300px", width: "298px" }}
          />
        </div>
        <Typography gutterBottom className={classes.textHeader} variant='h5' component='h2'>
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
                <Typography gutterBottom className={classes.textSubOne} variant='subtitle1' component='p'>
                  {info.type}
                </Typography>
                <Typography className={classes.textSubOne} variant='body2' component='p'>
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
// 2. Style Page
// 3. Integrate into MainBody.tsx

export default Education;
