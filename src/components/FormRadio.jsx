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

    return (
        <div>FormRadio</div>
    )
}
