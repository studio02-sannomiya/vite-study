import { use } from "react";
import { ThemeModeContext } from "../context/ThemeProvider/ThemeProvider";

export default function useTheme() {
    // コンテキストの利用
    const context = use(ThemeModeContext);

    return context;
}
