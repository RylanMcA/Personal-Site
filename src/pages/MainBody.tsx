import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 500,
    },
  })
);

const MainBody = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label='Education' icon={<RestoreIcon />} />
      <BottomNavigationAction label='Work Exp.' icon={<FavoriteIcon />} />
      <BottomNavigationAction label='Leadership' icon={<LocationOnIcon />} />
      <BottomNavigationAction label='Skills' icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
};

export default MainBody;
