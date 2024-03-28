import React from "react";
import {Link, useParams} from "react-router-dom";
import showdown from "showdown";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import blogEntriesRaw from "../blog-entries.json";

const converter = new showdown.Converter();

const blogEntries = blogEntriesRaw.map(blog => {
	let newblog = blog;
	newblog.html = converter.makeHtml(blog.text.join("\n"));
	newblog.url = [...blog.title.matchAll(/\b[a-z0-9]+\b/ig)].join("-").toLowerCase();
	return newblog;
}).toSorted((a, b) => (b.date - a.date));

const BlogsList = () => {
  return (<div>
  	<h1 style={{textAlign:"center"}}>Blogs</h1>
  	<div style={{
  		width:"100%",
//   		display:"flex",
//   		flexWrap:"wrap",
//   		gap:"40px"
  	}}>
			{blogEntries.map((blog, idx) => (
			<div key={idx} style={{
				margin:"auto auto 40px auto",
				width:"80%",
				maxWidth:"800px",
				backgroundColor: "rgba(39, 27, 56, 0.7)",
				padding:"20px",
				borderRadius:"40px",
			}}>
				<Link to={`/blog/${blog.url}`}>
					<h3>{blog.title}</h3>
				</Link>
				<h4>By {blog.author}</h4>
				<p style={{fontStyle:"italic"}}>Posted on {`${new Date(blog.date*1000).getDate()}-${(new Date(blog.date*1000).getMonth() + 1).toString().padStart(2, "0")}-${new Date(blog.date*1000).getFullYear()}`}</p>
			</div>))}
		</div>
  	</div>);
};

export {BlogsList};

const Blog = () => {
	const {url} = useParams();
	const matchedEntry = blogEntries.filter(blog => blog.url === url);
	if (matchedEntry.length > 0) {
		let blog = matchedEntry[0];
		return (
		<div>
			<Link to="/blog" style={{
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
				Back to all blogs</Link>
			<h1>{blog.title}</h1>
			<h4>By {blog.author}</h4>
			<p style={{fontStyle:"italic"}}>Posted on {`${new Date(blog.date*1000).getDate()}-${(new Date(blog.date*1000).getMonth() + 1).toString().padStart(2, "0")}-${new Date(blog.date*1000).getFullYear()}`}</p>
			<div dangerouslySetInnerHTML={{ __html: blog.html }}></div>
  	</div>)
	} else {
		return (<div>Sorry, this blog was not found. Return to home page?</div>);
	}
}

export {Blog};

