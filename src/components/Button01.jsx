export default function Button01({ handle, count }) {
    //午後からここにセッタ関数を使った関数を作る
    function Click() {
        handle(count + 1);
    }
    return (
        <>
            <button onClick={Click}>
                +1
            </button>
        </>
    )
}