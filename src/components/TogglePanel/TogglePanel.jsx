import styles from "./TogglePanel.module.css";
import { useState } from "react";

export default function TogglePanel() {
    // ① ON・OFFを管理するstateを定義する
    const [isOn, setIsOn] = useState(false);
    const handleClick = () => setIsOn(!isOn);

    return (
        <div>
            {/* ② 状態に応じてクラス名と表示を切り替える */}
            <div className={`${styles.panel} ${isOn ? styles.active : ""}`}>
                {isOn ? "ON" : "OFF"}
            </div>

            {/* ③ クリックで状態を切り替える */}
            <button onClick={handleClick}>
                {`${isOn ? "OFF" : "ON"}にする`}
            </button>
        </div>
    );
}