// import { useState } from "react"

export default function FormSelect({ form, myFunc }) {
    // const [form, setForm] = useState({
    //     animalSelect: 'dog',
    // });

    // const handleForm = (e) => {
    //     setForm({
    //         ...form,
    //         [e.target.name]: e.target.value,
    //     });
    // };

    // const show = () => console.log(`好きな動物：${form.animal}`);

    return (
        <>
            <div className="container">
                <label htmlFor="animalSelect">好きな動物：</label>
                <select name="animalSelect" id="animalSelect" value={form.animalSelect} onChange={myFunc}>
                    <option value="dog">イヌ</option>
                    <option value="cat">ネコ</option>
                    <option value="hamster">ハムスター</option>
                    <option value="rabbit">ウサギ</option>
                </select>
            </div>
        </>
    )
}
