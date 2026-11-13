import { useState } from "react"

export default function FormCheckMulti() {
    const [form, setForm] = useState({
        animal: ['dog', 'hamster'],
    });

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

    const show = () => console.log(`好きな動物：${form.animal}`);

    return (
        <form>
            <fieldset>
                <legend>好きな動物：</legend>

                <label htmlFor="animal_dog">イヌ</label>
                <input
                    type="checkbox"
                    name="animal"
                    id="animal_dog"
                    value="dog"
                    onChange={handleFormMulti}
                    checked={form.animal.includes('dog')} /><br />

                <label htmlFor="animal_cat">ネコ</label>
                <input
                    type="checkbox"
                    name="animal"
                    id="animal_cat"
                    value="cat"
                    onChange={handleFormMulti}
                    checked={form.animal.includes('cat')} /><br />

                <label htmlFor="animal_hamster">ハムスター</label>
                <input
                    type="checkbox"
                    name="animal"
                    id="animal_hamster"
                    value="hamster"
                    onChange={handleFormMulti}
                    checked={form.animal.includes('hamster')} /><br />

                <label htmlFor="animal_rabbit">ウサギ</label>
                <input
                    type="checkbox"
                    name="animal"
                    id="animal_rabbit"
                    value="rabbit"
                    onChange={handleFormMulti}
                    checked={form.animal.includes('rabbit')} /><br />

            </fieldset>
            <button type="button" onClick={show}>送信</button>
        </form>

    )
}
