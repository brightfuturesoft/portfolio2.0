import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data, stickyTopSpace }) => {
	
	const { _id, describtion, name, img, technology, liveLink } = data;

	return (

		<Link to={`/project/${data?._id}`}
			className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
			style={{
				backgroundImage:
					`url(${data?.image_url})`
			}}
		>
			<div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
				<h2 className="mt-20 text-xl font-semibold text-white capitalize">
					{data?.product_name}
				</h2>
				<div className="mt-2  tracking-wider  ">
					{data?.description?.slice(0, 100)}...{' '} <Link className="text-white" to={`/project/${data?._id}`}> More</Link>
				</div>
			</div>
		</Link>
	);
};

export default Card;
