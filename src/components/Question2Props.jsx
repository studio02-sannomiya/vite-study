export default function Question02Props({ users }) {
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