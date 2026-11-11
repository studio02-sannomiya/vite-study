import { useState } from "react";

export default function Switch() {
    const [isOn, setIsOn] = useState(false);

    function handleClick() {
        setIsOn(!isOn);
    }

    return (
        <div>
            <h2>スイッチ</h2>
            <p>現在の状態:{isOn ? "ON" : "OFF"}</p>
            {/* ボタンを押して、"ON"の時は下のdivタグが表示され、"OFF"の時は、 */}
            {/* なにも表示されないものを作ってください */}
            {isOn && (
                <div>
                    <h3>ドロワーメニュー</h3>
                    <ul>
                        <li>メニュー</li>
                        <li>メニュー</li>
                        <li>メニュー</li>
                    </ul>
                </div>
            )
            }

            <button onClick={handleClick}>切り替える</button>
        </div>
    )
}