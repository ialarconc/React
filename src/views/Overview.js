import React, { useState } from 'react';
import '../styles/BookSearch.css';
import '../styles/styles.css'
import {Libros} from "../components/Books";
import {Book} from "../components/Book";
import {LinearProgress} from "@mui/material";
import Carrito from "../components/Carrito";
import useTheme from "../hooks/useTheme";


const Overview = () => {

    const [busqueda, setBusqueda] = useState('');
    const [resultados, setResultados] = useState(Libros);

    const handleBusqueda = (e) => {
        const valorBusqueda = e.target.value;

        setBusqueda(valorBusqueda);
        setResultados(valorBusqueda);

        // Filtrar los libros basados en el valor de búsqueda
        const librosFiltrados = Libros.filter(libro =>
            libro.nombre.toLowerCase().includes(valorBusqueda.toLowerCase()) ||
            libro.autor.toLowerCase().includes(valorBusqueda.toLowerCase())
        );

        setResultados(librosFiltrados);  // Actualizamos los resultados
    };
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <table className="myTabla">
                <tbody>
                <tr>
                    <td>
                        <div align="center" className="book-search-container">
                            <input className="buscar"
                                   type="text"
                                   placeholder="Búsqueda de autor o título"
                                   value={busqueda}
                                   onChange={handleBusqueda}
                            />
                            <button className="boton_buscar" onChange={handleBusqueda}>Buscar</button>
                        </div>
                    </td>
                    <td>
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
                    </td>
                    <td height="100">
                        <div className="books">
                            <Carrito/>
                        </div>
                    </td>

                </tr>
                </tbody>
            </table>

            <div>
            <div>
                    <span className="titulo_catalogo">Catálogo de Libros</span>
                </div>
                <div className="book-container">
                    {
                        resultados.length > 0 ? (
                            resultados.map((book) => (
                                <Book
                                    id={book.id}
                                    nombre={book.nombre}
                                    autor={book.autor}
                                    image={book.image}
                                    sinopsis={book.sinopsis}
                                    valor={book.valor}
                                />
                            ))
                        ) : (
                            <LinearProgress color="secondary"/>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Overview;
