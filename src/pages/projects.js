import React from "react";

import {Link, useParams} from "react-router-dom";
import showdown from "showdown";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

const projectsRaw = [
	{
		title:"Project 1",
		shortdesc: "This a short description or tagline for the project",
		text: [
			"This is your project's description.",
			"",
			"You can use markdown here as well.",
			"",
			"# Things to do:",
			" - finish this website",
			" - study",
			" - sleep"
		]
	}
]


const converter = new showdown.Converter();

const projects = projectsRaw.map(blog => {
	let newblog = blog;
	newblog.html = converter.makeHtml(blog.text.join("\n"));
	newblog.url = [...blog.title.matchAll(/\b[a-z0-9]+\b/ig)].join("-").toLowerCase();
	return newblog;
});

const ProjectsList = () => {
  return (<div>
  	<h1 style={{textAlign:"center"}}>Projects</h1>
  	<div style={{
  		width:"100%",
//   		display:"flex",
//   		flexWrap:"wrap",
//   		gap:"40px"
  	}}>
			{projects.map((proj, idx) => (
			<div key={idx} style={{
				margin:"auto auto 40px auto",
				width:"80%",
				maxWidth:"800px",
				backgroundColor: "rgba(39, 27, 56, 0.7)",
				padding:"20px",
				borderRadius:"40px",
			}}>
				<Link to={`/project/${proj.url}`}>
					<h3>{proj.title}</h3>
				</Link>
				<p>{proj.shortdesc}</p>
			</div>))}
		</div>
  	</div>);
};

export {ProjectsList};

const Project = () => {
	const {url} = useParams();
	const matchedEntry = projects.filter(blog => blog.url === url);
	if (matchedEntry.length > 0) {
		let proj = matchedEntry[0];
		return (
		<div>
			<Link to="/projects" style={{
				display:"flex",
				width:"200px",
				height: "50px",
				justifyContent:"space-between",
				alignItems:"center",
				padding:"0 30px 0 10px",
				color:"white",
				backgroundColor:"rgba(59, 47, 76, 1)",
				borderRadius:"30px",
			}}>
				<ArrowBackIosNewRoundedIcon />
				Back to all projects</Link>
			<h1>{proj.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: proj.html }}></div>
  	</div>)
	} else {
		return (
		<div style={{
			width:"50%",
			height:"50vh",
			margin:"auto",
			display:"flex",
			justifyContent:"center",
			alignItems:"center"
		}}>
			<h2>Sorry, this project was not found. <Link to="/">Return to home page?</Link></h2>
		</div>);
	}
}

export {Project};


