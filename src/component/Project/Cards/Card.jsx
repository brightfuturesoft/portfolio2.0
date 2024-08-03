import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data, stickyTopSpace }) => {

	const { _id, describtion, name, img, technology, liveLink } = data;

	const stripHtmlTags = (html) => {
		// Create a new DOM parser
		const doc = new DOMParser().parseFromString(html, 'text/html');

		// Remove unwanted elements (style, title, etc.)
		const unwantedTags = ['style', 'title'];
		unwantedTags.forEach(tag => {
			const elements = doc.getElementsByTagName(tag);
			while (elements.length) {
				elements[0].parentNode.removeChild(elements[0]);
			}
		});

		// Get plain text from the document body
		return doc.body.textContent || '';
	};

	return (

		<Link to={`/project/${data?.url}`}
			className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
			style={{
				backgroundImage:
					`url(${data?.image_url})`
			}}
		>
			<div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
				<h2 className="mt-20 text-xl font-semibold text-white capitalize">
					{data?.project_name}
				</h2>
				<div className="mt-2  tracking-wider  ">
					{stripHtmlTags(data?.description).slice(0, 100)}...{' '} <Link className="text-white" to={`/project/${data?.url}`}> More</Link>
				</div>
			</div>
		</Link>
	);
};

export default Card;
