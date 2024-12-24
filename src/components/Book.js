import React, {useState, useContext} from "react";
import Popup from "./Popup";
import "../styles/Popup.css";
import {BooksContext} from "../context/BooksContext";
import {Libros} from './Books';

export const Book = ({ id, nombre, autor, image, sinopsis, valor }) => {
    const [showPopup, setShowPopup] = useState(false);
    const {setCart} = useContext(BooksContext);

    // Función para abrir el popup
    const openPopup = () => {
        setShowPopup(true);
    };

    // Función para cerrar el popup
    const closePopup = () => {
        setShowPopup(false);
    };

    const addToCart = (id) => {
        const book = Libros.find(libro => libro.id === id );

        // Evitar duplicados
        setCart((prevCart) => {
            if (prevCart.some((item) => item.id === book.id)) {
                alert("El libro ya está en el carrito");
                return prevCart;
            }
            alert("El libro fue agragado al carrito de compras");
            closePopup()
            return [...prevCart, book];
        });
    };

    return (
        <div className="about">
            <div className="book-card">
                <h1 className="book-name">{nombre}</h1>
                <img src={image} alt={autor}/>
                <h2 className="book-autor">Autor: {autor}</h2>
                <table align={"center"}>
                    <thead>
                    <td>
                        <button className="cart-button" onClick={openPopup}>Detalle del Libro</button>
                    </td>
                    </thead>
                </table>
            </div>

            {/* Componente Popup con contenido */}
            <Popup show={showPopup} onClose={closePopup}>
                <h2 className="book-name">{nombre}</h2>
                <img src={image} alt={nombre} width={250} height={350}/>
                <p className="book-autor">Autor: {autor}</p>
                <p className="book-sinopsis"><strong>Resumen: </strong>{sinopsis}</p>
                <p className="book-valor">Valor: {valor}</p>
               <table align={"center"}>
                   <tr>
                   <td>
                       <button className="cart-button" onClick={() => addToCart(id)}>Agregar a Carrito</button>
                   </td>
                   <td width={20}></td>
                   <td>
                           <button className="cart-button" onClick={closePopup}>Cerrar</button>
                       </td>
                   </tr>
               </table>
            </Popup>
        </div>
    );
}