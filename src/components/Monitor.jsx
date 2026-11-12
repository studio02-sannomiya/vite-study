import Button01 from "./Button01";
import { useState } from "react"
import Button02 from "./Button02";

export default function Monitor() {
    const [count, setCount] = useState(0);
    // function handleClick() {
    //     setCount(count + 1);
    // }

    // function threeClick() {
    //     setCount(count + 3);
    // }
    return (
        <>
            <section>
                <p>{count}</p>
                <Button01 handle={setCount} count={count} />
            </section>
        </>
    )
}