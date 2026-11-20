import { useRef } from "react"

export default function RefTimer() {
    const timeRef = useRef(null);

    const startTimer = () => {
        timeRef.current = setInterval(() => {
            console.log("実行中");
        }, 1000)
    };

    const stopTimer = () => {
        clearInterval(timeRef.current);
    };

    return (
        <div>
            <button type="button" onClick={startTimer}>
                開始
            </button>
            <button type="button" onClick={stopTimer}>
                終了
            </button>
        </div>
    )
}
