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
	Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			padding: "1px",
			background: "#595959",
		},
		textHeader: {
			color: "#DCCD79",
		},
		textSubOne: {
			color: "#1890ff",
		},
	})
);

const pgInfo = [
	{
		place: "Project Lead for Software Engineering Class (Team Brogrammers)",
		type:
			"Lead a group of fellow undergraduate peers in a software project in which we created a mobile cashier website for a faux company. This project lasted a whole semester.",
		duration: "January 2020 - May 2020",
	},
	{
		place: "Community Organizer",
		type:
			"Set up group events for a group of 8 people involving teamwork and coordination in a semi-competitive environment. I would schedule times and oversee to make sure everything went smoothly.",
		duration: "January 2020 - Current",
	},
];

const Leadership = () => {
	const classes = useStyles();
	return (
		<div>
			<Card elevation={4} className={classes.root}>
				{pgInfo.map((info) => (
					<CardContent>
						<Typography
							key={info.place}
							variant="h5"
							component="h2"
							className={classes.textHeader}
						>
							{info.place}
						</Typography>
						<List>
							<ListItem divider={true}>
								<Grid
									container
									direction="column"
									justify="flex-start"
									alignItems="stretch"
								>
									<Typography
										gutterBottom
										variant="subtitle1"
										className={classes.textSubOne}
										component="p"
									>
										{info.type}
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
										className={classes.textSubOne}
									>
										{info.duration}
									</Typography>
								</Grid>
							</ListItem>
						</List>
					</CardContent>
				))}
			</Card>
		</div>
	);
};

// TO DO
// 1. Import Leadership/Volunteer Experience into page
// 2. Style Page
// 3. Integrate into MainBody.tsx

export default Leadership;
