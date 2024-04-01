import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";


//include images into your bundle


//create your first component
const Home = () => {

	const datosCartas = [
		{
			"id": 1,
			"title": "Imagen 1",
			"description": "Esta es la descripción de la imagen 1.",
			"image_path": "https://media.es.wired.com/photos/6501e7429fa9000811a95fe8/16:9/w_2560%2Cc_limit/Adobe%2520Firefly.jpeg",
			"button_text": "Ver más"
		},
		{
			"id": 2,
			"title": "Imagen 2",
			"description": "Esta es la descripción de la imagen 2.",
			"image_path": "https://media.es.wired.com/photos/650b2a2e72d73ca3bd5ef0cc/16:9/w_2560%2Cc_limit/Business-OpenAI-Dall-E-3-heart.jpg",
			"button_text": "Detalles"
		},
		{
			"id": 3,
			"title": "Imagen 3",
			"description": "Esta es la descripción de la imagen 3.",
			"image_path": "https://static6.depositphotos.com/1100968/645/i/950/depositphotos_6455974-stock-photo-pathway-in-the-autumn-forest.jpg",
			"button_text": "Explorar"
		},
		{
			"id": 4,
			"title": "Imagen 4",
			"description": "Esta es la descripción de la imagen 4.",
			"image_path": "https://media.istockphoto.com/id/1193198754/es/foto/atardecer.webp?s=2048x2048&w=is&k=20&c=U0odjL_RKFjMlxWnZ92b85-zuLPh7a0NC8TUqIws4uw=",
			"button_text": "Leer más"
		},
		{
			"id": 5,
			"title": "Imagen 5",
			"description": "Esta es la descripción de la imagen 5.",
			"image_path": "https://media.istockphoto.com/id/817147678/es/foto/libro-de-papel-de-forma-de-coraz%C3%B3n-en-la-playa.jpg?s=612x612&w=0&k=20&c=SzK0a9UagX2E78ej0FNKbVZfWgY4SEVeVv_l6STyv9k=",
			"button_text": "Descargar"
		}
	];


	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row justify-content-center gy-1">
					<Card props={datosCartas} />
				</div>
			</div >
		</>
	);
};

export default Home;
