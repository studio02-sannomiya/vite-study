import { useState } from "react";

export default function Question01() {
    const [isOn, setIsOn] = useState(false);
    function handleClick() {
        setIsOn(!isOn);
    }
    //TODO: useStateでON / OFFの状態を管理する
    // クラス属性も条件付きレンダーが使えます。
    // className={この中に条件付きレンダーで、付与するクラス属性を切り替えれます}
    // ONの時は、"toggle-button is-on" 、offの時は"toggle-button"が出るようにしてください

    return (
        <div className="practice-card">
            <p className="practice-label">現在の状態</p>

            {/*TODO: onClick、表示文字、is-onクラスを切り替える */}
            <button type="button" className={isOn ? "toggle-button is-on" : "toggle-button"} onClick={handleClick}>
                {isOn ? "ON" : "OFF"}
            </button>
        </div>
    );
}