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
			padding: "1px",
			background: "#595959",
		},
		textHeader: {
			color: "#DCCD79",
		},
		textSubOne: {
			color: "#1890ff",
		},
		skillsMessage: {
			color: "#1890ff",
			marginBottom: "16px",
		},
		listItems: {
			padding: theme.spacing(1),
			margin: "-15px",
		},
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
		<Card elevation={4} className={classes.root}>
			<CardContent>
				<Typography
					align="center"
					variant="h5"
					className={classes.skillsMessage}
				>
					Each skill links to a GitHub repository featuring that
					skill!
				</Typography>
				{pgInfo.map((info) => (
					<List key={info.skill} className={classes.listItems}>
						<ListItem alignItems="flex-start" disableGutters={true}>
							<Link
								display="block"
								variant="body1"
								href={info.link}
							>
								<Typography
									className={classes.textHeader}
									variant="subtitle1"
									component="p"
								>
									{info.skill}
								</Typography>
							</Link>
							<Typography
								variant="body2"
								style={{
									marginLeft: "10px",
									marginTop: "4px",
									margin: "flex",
								}}
								className={classes.textSubOne}
								color="textSecondary"
								component="p"
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
// 2. Style Page
// 3. Integrate into MainBody.tsx

export default Skills;
