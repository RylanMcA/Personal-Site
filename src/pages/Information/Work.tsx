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
		place: "Big Orange (Yellow Rocket Inc.)",
		location: "Rogers, Arkansas",
		type:
			"Customer service restaurant team member with multi-tasking responsibilities including guest host and server",
		duration: "May 2020 - August 2020",
	},
	{
		place: "Fayetteville Public School District",
		location: "Fayetteville, Arkansas",
		type:
			"Facilities engineer team member responsible for completing multiple work projects in and around Fayetteville schools and district facilities.",
		duration: "May 2018 - August 2019",
	},
	{
		place: "Feltner Brothers",
		location: "Fayetteville, Arkansas",
		type:
			"Customer host, server and employee trainer to provide quick service food service. Critical thinking and multi-tasking",
		duration: "June 2017 - November 2019",
	},
	{
		place: "Arkansas Interfaith (Choir) Camp",
		location: "Subiaco Abbey in Subiaco, Arkansas",
		type:
			"Summer Counselor with responsibilities to guide and lead young men ages 4 to 17 at camp focused on music, performing arts in an interfaith community. Lead contact for Music and Clergy staff members",
		duration: "Summer 2016 - Current",
	},
];

const Work = () => {
	const classes = useStyles();
	return (
		<div>
			<Card elevation={4} className={classes.root}>
				{pgInfo.map((info) => (
					<CardContent key={info.place}>
						<Typography
							className={classes.textHeader}
							variant="h5"
							component="h2"
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
// 1. Import Work Experience into page
// 2. Style Page
// 3. Integrate into MainBody.tsx

export default Work;
