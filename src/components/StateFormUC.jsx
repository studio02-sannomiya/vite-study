import { useRef } from "react"

export default function StateFormUC() {
    // React要素への参照を準備
    const name = useRef(null);
    const age = useRef(null);

    // 要素(参照)経由で入力値を準備
    const show = () => console.log(`こんにちは、${name.current.value}(${age.current.value}歳)さん！`);

    return (
        <form>
            <div className="container">
                <label htmlFor="name">名前：</label>
                <input type="text" name="name" id="name" ref={name} />
            </div>
            <div className="container">
                <label htmlFor="age">年齢：</label>
                <input type="number" name="age" id="age" ref={age} />
            </div>
            <div className="container">
                <button type="button">送信</button>
            </div>
        </form>
    )
}
