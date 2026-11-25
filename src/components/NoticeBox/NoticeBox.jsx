import useToggle from "../../hooks/useToggle"

export default function NoticeBox() {
    const [isVisible, toggleNotice] = useToggle(true);

    return (
        <div className="container">
            <button type="button" onClick={toggleNotice}>
                {isVisible ? "お知らせを隠す" : "お知らせを表示する"}
            </button>
            {isVisible && <p className="box">今週はキャリコンがあります📄</p>}
        </div>
    )
}
