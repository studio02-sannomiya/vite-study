export default function Greeting({ name = "権兵衛", age = 30 }) {
    return (
        <p>こんにちは、{name}さん！年齢：{age}歳</p>
    );
}