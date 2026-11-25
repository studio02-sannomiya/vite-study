import useTheme from "../../hooks/useTheme"
import ThemeStatus from "../ThemeStatus/ThemeStatus";

export default function ThemeDemo() {
    // contextを使う
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`theme-demo ${theme}`}>

            <p>どっちのテーマが好き？🤭</p>

            <ThemeStatus />

            <button type="button" onClick={toggleTheme}>
                {theme === "light" ? "ダークにする" : "ライトにする"}
            </button>

        </div>
    )
}
