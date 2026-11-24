import { use } from "react"
import MyAppContext from "../../context/MyAppContext";

export default function HookContextChildGrand() {

    // コンテキストを利用する
    const { title, lang } = use(MyAppContext);

    return (
        <div id="c_child_grand">
            HookContextChildGrand
            <p>{title} {lang}</p>
        </div>
    )
}
