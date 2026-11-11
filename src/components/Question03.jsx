import { useState } from "react";

function ColorButton({ label, color }) {
    const [isOn, setIsOn] = useState(false);

    function handleClick() {
        setIsOn(!isOn);
    }

    return (
        <div className="color-item">
            <p>{label}</p>

            {/* colorはpropsからCSS変数へ渡してある */}
            {/*TODO: onClick、表示文字、is-onクラスを切り替える */}
            <button
                type="button"
                className={isOn ? "color-button is-on" : "color-button"}
                onClick={handleClick}
                style={{ "--active-color": color }}
            >
                {isOn ? "ON" : "OFF"}
            </button>
        </div>
    );
}

export default function Question03() {
    return (
        <div className="color-group">
            <ColorButton label="レッド" color="#d96068" />
            <ColorButton label="ブルー" color="#4d80c9" />
            <ColorButton label="グリーン" color="#299b83" />
        </div>
    );
}