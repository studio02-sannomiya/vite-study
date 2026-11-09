export default function Question03Props({ users }) {
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