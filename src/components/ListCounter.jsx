import { useState } from "react";

export default function ListCounter({ initialCount, buttonText }) {
    const [count, setCount] = useState(initialCount);

    const goals = [3, 5, 10, 20, 50, 100, 1000, 10000, 100000];

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>カウンター：{count}</h2>
            <button onClick={handleClick}>{buttonText}</button>
            {count >= 10 && <p>すべての目標を達成</p>}

            <h3>目標リスト</h3>
            <ul>
                {goals.map((goal) => {
                    return (
                        <li key={goal}>
                            目標：{goal}
                            {count >= goal && '✅達成！'}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}