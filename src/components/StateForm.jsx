import { useId } from "react"

export default function StateForm({ form, myFunc }) {

    const id = useId();

    // const [form, setForm] = useState({
    //     name: '山田太郎',
    //     age: 18,
    // });

    // const handleChage = (e) => {
    //     setForm({
    //         ...form,
    //         [e.target.name]: e.target.value,
    //     });
    //     // console.log(e);
    // };

    // const show = () => console.log(`こんにちは、${form.name}（${form.age}歳）さん！`);

    return (
        <>
            <div className="container">
                <label htmlFor={`${id}-name`}>名前：</label>
                <input type="text" name="name" id={`${id}-name`} onChange={myFunc} value={form.name} />
            </div>
            <div className="container">
                <label htmlFor={`${id}-age`}>年齢：</label>
                <input type="number" name="age" id={`${id}-age`} onChange={myFunc} value={form.age} />
            </div>

            <p>こんにちは、{form.name}（{form.age}歳）さん！</p>
        </>
    )
}
