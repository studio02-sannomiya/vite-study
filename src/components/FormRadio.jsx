import { useState } from "react"

export default function FormRadio() {
    const [form, setForm] = useState({
        os: 'windows',
    });

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const show = () => console.log(`使用OS：${form.os}`);

    return (
        <form>
            <fieldset>
                <legend>使用OS：</legend>

                <label htmlFor="os_win">Windows</label>
                <input
                    type="radio"
                    name="os"
                    id="os_win"
                    value="windows"
                    onChange={handleForm}
                    checked={form.os === "windows"} /><br />

                <label htmlFor="os_mac">macOS</label>
                <input
                    type="radio"
                    name="os"
                    id="os_mac"
                    value="mac"
                    onChange={handleForm}
                    checked={form.os === "mac"} /><br />

                <label htmlFor="os_lin">Linux</label>
                <input
                    type="radio"
                    name="os"
                    id="os_lin"
                    value="linux"
                    onChange={handleForm}
                    checked={form.os === "linux"} /><br />
            </fieldset>
            <button type="button" onClick={show}>送信</button>
        </form>
    )
}
