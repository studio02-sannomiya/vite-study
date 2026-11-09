import { users } from "./users.js"

export default function Question03() {
    const engineers = users.filter((v) => {
        return v.job === "エンジニア"
    });

    return (
        <>
            <ul>
                {engineers.map((v) => {
                    return (<li key={v.id}>
                        {v.name} / {v.job}
                        {v.Passed ? '🚀' : '❎'}
                    </li>)
                })}
            </ul>
        </>
    )
}