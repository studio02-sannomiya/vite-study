import { useState } from "react"
import FormTextArea from "./FormTextArea";
import StateForm from "./StateForm";
import FormSelect from "./FormSelect";
import FormRadio from "./FormRadio";
import FormCheckMulti from "./FormCheckMulti";

export default function FormTop() {
    const [form, setForm] = useState({
        comment: `さまざまなフォーム要素を`,
        name: '創造太郎',
        age: 86,
        animalSelect: 'cat',
        os: 'windows',
        animal: ['dog', 'hamster'],
    });

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleFormMulti = (e) => {

        // 元の配列（State）複製
        const fa = [...form.animal];

        // チェック時に配列に値を追加、チェック解除時は削除
        if (e.target.checked) {
            fa.push(e.target.value);
        } else {
            fa.splice(fa.indexOf(e.target.value), 1);
        }

        setForm({
            ...form,
            [e.target.name]: fa,
        });
    };

    const show = () => console.log(`コメント：${form.comment}
        名前:${form.name}
        年齢:${form.age}
        好きな動物:${form.animalSelect}
        使用OS：${form.os}
        好きな動物：${form.animal}
        `);

    return (
        <form>
            {/* ここに、フォームの各部品のコンポーネントを呼び出す */}
            {/* 各部品にpropsでstate変数、セッタ関数を使った関数を渡す */}
            <StateForm form={form} myFunc={handleForm} />
            <FormTextArea form={form} myFunc={handleForm} />
            <FormSelect form={form} myFunc={handleForm} />
            <FormRadio form={form} myFunc={handleForm} />
            <FormCheckMulti form={form} myFunc={handleFormMulti} />
            <button type="button" onClick={show}>送信</button>
        </form>
    )
}
