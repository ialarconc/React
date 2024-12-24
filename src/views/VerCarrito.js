import React, {useContext} from 'react';
import '../styles/carrito.css';
import {useNavigate} from "react-router-dom";
import {BooksContext} from "../context/BooksContext";
import useTheme from "../hooks/useTheme";

export const VerCarrito = () => {

    const navigate = useNavigate();
    const {cart, setCart} = useContext(BooksContext);
    const total = cart.reduce((accumulator, item) => accumulator + item.valor, 0);

    const removeFromCart = (bookId) => {
        setCart((prevCart) => prevCart.filter((book) => book.id !== bookId));
    };

    const goToBooks = () => {
        navigate("/libros"); // Navegar a la página del carrito
    };

    const goToPay = () => {
        setCart([]);
        alert("Se procedió a pagar los libros y a vaciar el carrito de compras")
        navigate("/libros"); // Navegar a la página del carrito
    };

    const { theme, toggleTheme } = useTheme();
    return (
        <>
        <div>
            <table>
                <tbody>
                <tr>
                    <td>
                        <titulo_tema>El tema actual es: {theme}  </titulo_tema>
                    </td>
                    <td>
                        <button className="boton_buscar" onClick={toggleTheme}>
                            Cambiar a {theme === "light" ? "Oscuro" : "Claro"}
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    <div className="contenedor">
        <div>
            <span className="titulo_catalogo">Carrito de Compras</span>
        </div>
        <div className="linea"></div>
        <p></p>
        {
            cart.length === 0 ?
                <div>
                    <table className="myTabla">
                        <tbody>
                        <tr>
                            <td>
                                <p>El Carrito esta vacío, favor compre del catálogo de libros</p>
                            </td>
                        </tr>
                            <tr>
                                <td>
                                    <button className="cart-button" onClick={goToBooks}>Seguir comprando</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    : (
                        cart.map((book) => (
                                <div>
                                    <table className="myTabla">
                                        <tbody>
                                        <tr>
                                            <th className="td_portada"><img className="resized-image" src={book.image}
                                                                            alt={book.nombre}/>
                                            </th>
                                            <td>
                                                <div className="book-autor">{book.nombre} de {book.autor}</div>
                                            </td>
                                            <td className="">
                                                <div className="book-valor">${book.valor}</div>
                                            </td>
                                            <td>
                                                <div className="boton_remove"
                                                     onClick={() => removeFromCart(book.id)}> Eliminar
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )
                        )
                    )
            }
            {
                cart.length !== 0 ?
                    <div>
                        <div className="book-total"> TOTAL A PAGAR:
                            ${Number(total.toFixed(2))} </div>
                        <table className="myTabla">
                            <tbody>
                            <tr>
                                <td>
                                    <button className="cart-button" onClick={goToPay}>Pagar Pedido</button>
                                </td>
                                <td>
                                    <button className="cart-button" onClick={goToBooks}>Seguir comprando</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    : ("")

            }
        </div>
        </>
    );
}


