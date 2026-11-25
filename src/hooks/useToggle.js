import { useState } from "react";

export default function useToggle(initial = false) {
    const [value, setValue] = useState(initial);
    const toggle = () => setValue(prev => !prev);

    return [value, toggle]; // 配列を返す
}
