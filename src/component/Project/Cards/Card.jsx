import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data, stickyTopSpace }) => {
	const { id,description,name, pic, technology, liveLink } = data;

	return (
		<div
			className={`sticky mt-[40px] border border-[#007bff] rounded-xl mx-auto md:w-[90%] w-[98%] duration-200 stc-cart`}
			style={{ top: stickyTopSpace }}>
			 <div className="bg-[#121923fa] p-4 rounded-xl grid md:grid-cols-3 grid-cols-1 gap-3 relative">
					<img  loading="lazy"src={pic} alt="" className="w-full h-[250px] rounded-lg" />
					<div className="col-span-2">
						<h2 className="font-bold text-2xl text-[#008cff]">{name}</h2>
						<span className="mt-2  text-white">
							<p>Technology used :</p>
							<ul className="flex flex-wrap gap-2 mt-2">
								{
									technology.map(techData => <li className={`text-[13px] text-white bg-[#064476] px-2 rounded-xl`} key={techData.id}>{techData.name}</li>)
								}
							</ul>
						</span>
						<p className="mt-5 text-sm pb-20 text-[#b1b1b1]">{description}</p>
					</div>

					<Link to={`/project/${id}`} className="absolute bg-[#0066ff] right-[20px] bottom-[20px] text-white px-3 py-2 rounded-md duration-200 hover:bg-[#007bff]">Details</Link>
			 </div>
		</div>
	);
};

export default Card;
