import { useState } from "react";
import "../study.css";

export default function Question03({ title, children }) {
    const [count, setCount] = useState(0);
    const [isOn, setIson] = useState(true);

    function countClick() {
        setCount(count + 1);
    }

    function isOnClick() {
        setIson(!isOn);
    }
    //TODO: 数字を管理するuseStateを書く（初期値は0）
    //TODO: 表示を管理するuseStateを書く（初期値はtrue）

    return (
        <div className="study-card">
            <h2 className="study-title">{title}</h2>
            <p className="study-description">{children}</p>

            {isOn ? <p className="study-value">現在の数字：{count}</p> : <p>数字は非表示です</p>}

            <div className="study-actions">
                <button type="button" className="study-button" onClick={countClick}>
                    +1
                </button>
                <button type="button" className="study-button study-button--secondary" onClick={isOnClick}>
                    隠す / 表示する
                </button>
            </div>
        </div>
    );
}