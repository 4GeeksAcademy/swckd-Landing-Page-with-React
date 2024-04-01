import React from "react";

const Card = ({ props }) => {
    return (

        props.map((prop, index) => {

            return (
                <div className="col" key={index}>
                    <div className="card px-0" style={{ width: "100%" }}>
                        <img src={prop.image_path} className="card-img-top" style={{ height: "100px" }} />
                        <div className="card-body">
                            <h5 className="card-title">{prop.title}</h5>
                            <p className="card-text">{prop.description}</p>
                            <a href="#" className="btn btn-primary">{prop.button_text}</a>
                        </div>
                    </div>
                </div>
            )
        })

    );
};

export default Card;
