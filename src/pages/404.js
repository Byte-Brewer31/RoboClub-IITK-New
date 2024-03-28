import React from "react";
import {Link} from "react-router-dom";

export default function NotFound() {
	return (
	<div style={{
		width:"50%",
		height:"50vh",
		margin:"auto",
		display:"flex",
		justifyContent:"center",
		alignItems:"center"
	}}>
		<h2>Sorry, this page was not found. <Link to="/">Return to home page?</Link></h2>
	</div>
);
}