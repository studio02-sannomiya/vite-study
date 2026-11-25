import { createContext, useState } from "react";

// コンテキストの作成
export const ThemeContext = createContext(null);

export default function ThemeContextArea({ children }) {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    };

    return (
        // コンテキストの提供
        <ThemeContext value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext>
    )
}
