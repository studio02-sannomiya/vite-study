export default function Question01Props({ users }) {
    return (
        <>
            <ul>
                {users.map((v) => {
                    return (<li key={v.id}>{v.name} / {v.job}</li>)
                })}
            </ul>
        </>
    )
}