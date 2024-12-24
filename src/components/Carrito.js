import React, {useContext} from "react";
import '../styles/carrito.css'
import {useNavigate} from "react-router-dom";
import {BooksContext} from "../context/BooksContext";

const Carrito = () => {
    const navigate = useNavigate();
    const {cart} = useContext(BooksContext);

    return (
        <div className="cart-button">
            <header>
                <span className="cart-count" onClick={()=>navigate("/vercarrito/")}>
                    Ver Carrito: {cart.length}
                </span>
            </header>
        </div>
    );
};
export default Carrito;