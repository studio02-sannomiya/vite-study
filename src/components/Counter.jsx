import { useState } from "react";

export default function Counter({ initialCount, buttonText }) {
    const [count, setCount] = useState(initialCount);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>カウンター：{count}</h2>
            <button onClick={handleClick}>{buttonText}</button>
            {count >= 10 ? <p>目標達成！</p> : <p>まだだよ</p>}
        </div>
    )
}
