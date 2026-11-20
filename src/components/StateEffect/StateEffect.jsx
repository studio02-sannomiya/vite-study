import { useEffect, useState } from "react"

export default function StateEffect() {
    const [count, setCount] = useState(0);
    const [hoge, setHoge] = useState('hoge');


    const handleClick = () => setCount(c => c + 1);

    useEffect(() => {
        console.log(`count is ${count}`);
    }, [count]);

    return (
        <>
            <button type="button" onClick={() => setHoge(Date.now())}>
                hoge({hoge})
            </button>
            <button type="button" onClick={handleClick}>クリック</button>
            <p>{count}回、クリックされました</p>
        </>
    )
}
