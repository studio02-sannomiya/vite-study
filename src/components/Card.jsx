export default function Card({ day, children }) {
    return (
        <div
            style={{
                border: "1px solid black",
                backgroundColor: "lightgreen",
                padding: "8px",
                margin: "16px"
            }}
            className="card"
        >
            <p>{day}日目</p>
            {children}
        </div >
    );
}