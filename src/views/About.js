import Popup from "../components/Popup";
import React, {useState} from "react";
import '../styles/Popup.css';


export const About = ()=> {
    const [showPopup, setShowPopup] = useState(false);

    const image = require('../styles/banner.jpg');
    // Función para abrir el popup
    const openPopup = () => {
        setShowPopup(true);
    };

    // Función para cerrar el popup
    const closePopup = () => {
        setShowPopup(false);
    };

    return(
    <div className="about">
        {/* Botón para abrir el popup */}
        <div className="conoceme-boton">
            <button className="cart-button" onClick={openPopup}>Acerca de Nosotros</button>
        </div>

        {/* Componente Popup con contenido */}
        <Popup show={showPopup} onClose={closePopup}>
            <h2 className="titulo_catalogo">Relatos de Papel</h2>
            <img src={image} alt="banner" />
            <br/>
            <p className="acerca_de">Relatos de papel es un proyecto de la Maestría de Ingeniería de Software y Sistemas Informáticos
                que busca ofrecer a los usuarios una experiencia de lectura interactiva y divertida.</p>
            <br/>
            <p className="acerca_de">
                El presente trabajo está desarrollado en React con JavaScript y estilos personalizados creador por el
                CPFG-IG Israel Alarcón Cevallos
            </p>
            <br/>
            <button  className="cart-button" onClick={closePopup}>Cerrar</button>
        </Popup>
    </div>
);
}