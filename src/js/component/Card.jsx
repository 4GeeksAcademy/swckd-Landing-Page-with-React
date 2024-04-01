import React from "react";



const Card = ({ datosCartas }) => {
    return (

        datosCartas.map(() => {
            <div className="col">
                <div className="card px-0" style={{ width: "100%" }}>
                    <img src="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        })

    );
};

export default Card;
