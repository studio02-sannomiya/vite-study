import { useEffect, useRef } from "react"

export default function FocusDemo() {
    const inputRef = useRef(null);

    // レンダー中
    console.log("render", inputRef.current);

    // マウント後
    useEffect(() => {
        console.log("effect", inputRef.current);
    }, []);

    const handleClick = () => {
        inputRef.current?.focus();
    };

    return (
        <>
            <input type="text" name="name" id="name" ref={inputRef} />
            <button type="button" onClick={handleClick}>フォーカス</button>
        </>
    )
}
