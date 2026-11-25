import { useState } from "react";
import { createContext } from "react"

// コンテキストの作成
export const ThemeModeContext = createContext(null);

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    };

    return (
        // コンテキストの提供
        <ThemeModeContext value={{ theme, toggleTheme }}>
            {children}
        </ThemeModeContext>
    )
}