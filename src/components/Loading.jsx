export default function Loading({ text = "読み込み中..." }) {
    return (
        <p className="loading">{text}</p>
    )
}
