import { useState } from "react";
import styles from "./HintBox.module.css";

export default function HintBox() {
    // ① ヒントの表示状態を管理するstateを定義する
    const [showHint, setShowHint] = useState(false);

    // ② クリックで状態を切り替える関数を定義する
    const handleClick = () => setShowHint(!showHint);

    return (
        <div className={styles.container}>
            <h2>Reactで状態を管理するフックは？</h2>

            {/* ③ ボタンにイベントと文字の切り替えを設定する */}
            <button onClick={handleClick}>
                {showHint ? "ヒントを隠す" : "ヒントを見る"}
            </button>

            {/* ④ 条件付きレンダー使って、表示中のときだけヒントを表示する */}
            {showHint && (
                <p className={styles.hint}>
                    「use」で始まり、「State」で終わります。
                </p>
            )}
        </div>
    );
}