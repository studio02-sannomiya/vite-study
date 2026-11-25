import useTheme from "../../hooks/useTheme"

export default function ThemeStatus() {

    // コンテキストの利用
    const { theme } = useTheme();

    return (
        <p>現在のテーマ：{theme}</p>
    )
}
