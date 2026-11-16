import { useState } from "react"

export default function FormTextArea({ form , myFunc }) {
    // const [form, setForm] = useState({
    //     comment: `さまざまなフォーム要素を`,
    // });

    // const handleForm = (e) => {
    //     setForm({
    //         ...form,
    //         [e.target.name]: e.target.value,
    //     });
    // };

    // const show = () => console.log(`コメント：${form.comment}`);

    return (
        <>
            <div className="container">
                <label htmlFor="comment">コメント：</label><br />
                <textarea name="comment" id="comment" cols="30" rows="7" value={form.comment} onChange={myFunc} ></textarea><br />
            </div>
        </>
    )
}
