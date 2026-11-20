import { useRef } from "react"

export default function FocusDemo() {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <input type="text" name="name" id="name" ref={inputRef} />
            <button type="button" onClick={handleClick}>フォーカス</button>
        </>
    )
}
