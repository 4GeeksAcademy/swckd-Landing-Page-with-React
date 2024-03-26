import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (


		<div className="container">
			<Navbar />
			<div className="row justify-content-center">
				<Jumbotron />
			</div>
			<div className="row justify-content-center">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>

	);
};

export default Home;
