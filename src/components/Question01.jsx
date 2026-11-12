import { useState } from "react";
import "../study.css";

export default function Question01({ title, children }) {
    //TODO: 数字を管理するuseStateを書く（初期値は0）
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div className="study-card">
            <h2 className="study-title">{title}</h2>
            <p className="study-description">{children}</p>

            <p className="study-value">現在の数字：{count}</p>

            <div className="study-actions">
                <button type="button" className="study-button" onClick={handleClick}>
                    +1
                </button>
                <button type="button" className="study-button study-button--secondary" onClick={reset}>
                    リセット
                </button>
            </div>
        </div>
    );
}