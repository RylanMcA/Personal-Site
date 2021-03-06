import React from "react";
import { Container, Grid } from "@material-ui/core/";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MainBody from "./MainBody";
import SiderBar from "../shared/sidebar";
import Header from "../shared/header";

//------------------
//       CSS
//------------------
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		lightRoot: {
			padding: theme.spacing(3),
			backgroundColor: "#FFFFFF",
		},
		darkRoot: {
			padding: theme.spacing(3),
			backgroundColor: "#333333",
		},
	})
);

//------------------
// HTML + TypeScript
//------------------
const DefaultPage = () => {
	const [themeMode, setThemeMode] = React.useState<boolean>(true);

	const classes = useStyles();
	return (
		<div className={classes.darkRoot}>
			<Container maxWidth="lg">
				<Header currentTheme={themeMode} themeChange={setThemeMode} />
				<Grid
					container
					direction="row"
					justify="flex-start"
					alignItems="flex-start"
					spacing={5}
				>
					<MainBody />
					<SiderBar />
				</Grid>
			</Container>
		</div>
	);
};

export default DefaultPage;
