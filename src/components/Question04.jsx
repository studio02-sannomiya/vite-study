import { useState } from "react";

export default function Question04() {
    const [isOn, setIson] = useState(false);
    //TODO: モーダルの表示状態をuseStateで管理する
    function handleClick() {
        setIson(!isOn);
    }

    return (
        <div className="practice-card">
            {/*TODO: クリックしたらモーダルを開く */}
            <button onClick={handleClick} type="button" className="primary-button">
                モーダルを開く
            </button>

            {/*TODO: falseをstateに置き換え、条件付きレンダーにする */}
            {isOn && (
                <div className="modal-overlay">
                    <div
                        className="modal-content"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-heading"
                    >
                        <div className="modal-header">
                            <h3 id="modal-heading">モーダルウィンドウ</h3>
                            {/*TODO: クリックしたら閉じる */}
                            <button onClick={handleClick} type="button" className="modal-x" aria-label="閉じる">
                                ×
                            </button>
                        </div>

                        <p>useStateで表示と非表示を切り替えます。</p>

                        {/*TODO: クリックしたら閉じる */}
                        <button onClick={handleClick} type="button" className="primary-button">
                            閉じる
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}