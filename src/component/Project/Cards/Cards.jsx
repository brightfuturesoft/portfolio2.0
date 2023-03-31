import React, { useState } from "react";
import Card from "./Card";
import { cardsData } from "./data";

const Cards = () => {
	const stickyTopSpace = 50;

	return (
		<div className="space-y-20">
			{cardsData.map((card, index) => (
				<Card key={card.id} data={card} stickyTopSpace={stickyTopSpace * (index + 1)}></Card>
			))}
		</div>
	);
};

export default Cards;
