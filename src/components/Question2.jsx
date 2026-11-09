import { users } from "./users.js"

export default function Question02() {
    return (
        <>
            <ul>
                {users.map((v) => {
                    return (<li key={v.id}>
                        {v.name} / {v.job}
                        {v.Passed && '✅'}
                    </li>)
                })}
            </ul>
        </>
    )
}