import { useState, useEffect } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState("dark"); // Estado inicial: tema claro

    // Cambiar la clase del cuerpo según el tema
    useEffect(() => {
        document.body.className = theme; // Aplica una clase al body: "light" o "dark"
    }, [theme]);

    // Alternar entre temas
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return { theme, toggleTheme };
};

export default useTheme;
