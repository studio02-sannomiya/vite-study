import { use } from "react"
import { ThemeContext } from "../../context/ThemeContextArea/ThemeContextArea";

export default function ThemeButton() {
    // コンテキストの利用①
    const { theme, toggleTheme } = use(ThemeContext);

    return (
        <button type="button" onClick={toggleTheme}>
            {theme === "light"
                ? "ダークモードにする"
                : "ライトモードにする"}
        </button>
    )
}
