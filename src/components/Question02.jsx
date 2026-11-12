import { useState } from "react";
import "../study.css";

export default function Question02({ title, children }) {
    const [isOn, setIsOn] = useState(false);

    function handleClick() {
        setIsOn(!isOn);
    }
    //TODO: 真偽値を管理するuseStateを書く（初期値はfalse）

    return (
        <div className="study-card">
            <h2 className="study-title">{title}</h2>
            <p className="study-description">{children}</p>

            <p className="study-value">現在の状態：{isOn ? "ON" : "OFF"}</p>
            {isOn && <p>trueだよ</p>}
            <div className="study-actions">
                <button type="button" className="study-button" onClick={handleClick}>
                    切り替える
                </button>
            </div>
        </div>
    );
}