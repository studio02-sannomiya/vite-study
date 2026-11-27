import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.counter}>
            <p className={styles.count}>Count: {count}</p>
            <button
                type="button"
                className={styles.button}
                onClick={() => setCount(prev => prev + 1)}>
                増やす
            </button>
        </div>
    )
}
