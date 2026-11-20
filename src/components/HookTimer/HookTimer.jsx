import styles from "./HookTimer.module.css";
import { useEffect, useState } from "react"

export default function HookTimer({ init }) {
    const [count, setCount] = useState(init);

    useEffect(() => {
        // タイマーを準備する
        const t = setInterval(() => {
            setCount(c => c - 1);
        }, 1000);

        // タイマーを破棄する（クリーンアップ関数）
        return () => {
            clearInterval(t);
        };
    }, []);


    return (
        <div className={count < 0 ? styles.warn : ""}>
            現在のカウント： {count}
        </div>
    )
}
