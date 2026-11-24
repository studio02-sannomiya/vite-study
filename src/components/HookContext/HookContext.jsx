import MyAppContext from "../../context/MyAppContext";
import HookContextChild from "../HookContextChild/HookContextChild";

// コンテキストに渡すためのオブジェクトを準備
const config = {
    title: 'React入門',
    lang: 'ja-JP',
};

export default function HookContext() {
    // 配下の要素に対してコンテキストを適用
    return (
        <MyAppContext value={config}>
            <div id="c_main">
                HookContext
                <HookContextChild />
            </div>
        </MyAppContext>
    )
}
