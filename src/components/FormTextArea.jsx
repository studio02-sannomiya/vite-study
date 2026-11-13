import { useState } from "react"

export default function FormTextArea() {
    const [form, setForm] = useState({
        comment: `さまざまなフォーム要素を`,
    });

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const show = () => console.log(`コメント：${form.comment}`);

    return (
        <form>
            <div className="container">
                <label htmlFor="comment">コメント：</label><br />
                <textarea name="comment" id="comment" cols="30" rows="7" value={form.comment} onChange={handleForm} ></textarea><br />
            </div>
            <div className="container">
                <button type="button" onClick={show}>送信</button>
            </div>
        </form>
    )
}
