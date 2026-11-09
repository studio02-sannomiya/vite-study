import { users } from "./users.js"

export default function Question01() {
    return (
        <>
            <ul>
                {users.map((v) => {
                    return (<li key={v.id}>{v.name} / {v.job}</li>)
                })}

                {/* 1行で書けば、returnや{}も省略できます */}
                {/* {users.map(v => <li key={v.id}>{v.name} / {v.job}</li>)} */}
            </ul>
        </>
    )
}