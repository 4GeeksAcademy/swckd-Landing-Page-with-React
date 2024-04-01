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
			"image_path": "https://www.istockphoto.com/photo/female-detective-looking-attentively-at-investigation-board-back-view-gm1457378613-492181037?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fes%2Fimages%2Fsearch%2Fprueba%2F&utm_term=prueba",
			"button_text": "Ver más"
		},
		{
			"id": 2,
			"title": "Imagen 2",
			"description": "Esta es la descripción de la imagen 2.",
			"image_path": "https://www.istockphoto.com/photo/female-detective-looking-attentively-at-investigation-board-back-view-gm1457378613-492181037?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fes%2Fimages%2Fsearch%2Fprueba%2F&utm_term=prueba",
			"button_text": "Detalles"
		},
		{
			"id": 3,
			"title": "Imagen 3",
			"description": "Esta es la descripción de la imagen 3.",
			"image_path": "https://live.staticflickr.com/65535/50950143706_b7a31e0a54_b.jpg",
			"button_text": "Explorar"
		},
		{
			"id": 4,
			"title": "Imagen 4",
			"description": "Esta es la descripción de la imagen 4.",
			"image_path": "https://www.istockphoto.com/photo/female-detective-looking-attentively-at-investigation-board-back-view-gm1457378613-492181037?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fes%2Fimages%2Fsearch%2Fprueba%2F&utm_term=prueba",
			"button_text": "Leer más"
		},
		{
			"id": 5,
			"title": "Imagen 5",
			"description": "Esta es la descripción de la imagen 5.",
			"image_path": "https://www.istockphoto.com/photo/female-detective-looking-attentively-at-investigation-board-back-view-gm1457378613-492181037?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fes%2Fimages%2Fsearch%2Fprueba%2F&utm_term=prueba",
			"button_text": "Descargar"
		}
	];


	return (
		<>
			<Navbar />

			<div className="container">
				<Jumbotron />

				<div className="row justify-content-center gy-1">

					<Card data={datosCartas} />

				</div>
			</div >
		</>
	);
};

export default Home;
