import useToggle from "../../hooks/useToggle";

export default function ToggleDemo() {
    const [isOpen, toggleOpen] = useToggle();

    return (
        <div className="container">
            <button type="button" onClick={toggleOpen}>
                {isOpen ? "閉じる" : "開く"}
            </button>
            {isOpen && <p className="box">内容が表示されました👋</p>}
        </div>
    )
}
