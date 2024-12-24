import GlobalRouter from "./routes/GlobalRouter";
import {BooksContext} from "./context/BooksContext";
import React, {useState} from "react";
import {Header} from "./components/Header";
import {About} from "./views/About";
import {Footer} from "./components/Footer";


function App() {
    const [cart, setCart] = useState([]);
    return (
    <>
        <Header />
        <BooksContext.Provider value={{ cart, setCart }}>
            <GlobalRouter>
            </GlobalRouter>
        </BooksContext.Provider>
        <About />
        <Footer />
    </>

    );
}

export default App;