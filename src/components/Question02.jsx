import { useState } from "react";

function LikeButton({ title, initialLikes }) {
    const [count, setCount] = useState(initialLikes);
    function handleClick() {
        setCount(count + 1);
    }

    //TODO: initialLikesを初期値にするuseStateを作る

    return (
        <div className="like-item">
            <span className="like-title">{title}</span>

            {/*TODO: クリックしたらいいね数を1増やす */}
            <button type="button" className="like-button" onClick={handleClick}>
                <span aria-hidden="true">♥</span>
                {/*TODO: 初期値ではなくstateの数値を表示する */}
                <span>{count}</span>
                <span>いいね</span>
            </button>
        </div>
    );
}

export default function Question02() {
    return (
        <div className="like-list">
            <LikeButton title="記事A" initialLikes={12} />
            <LikeButton title="記事B" initialLikes={35} />
            <LikeButton title="記事C" initialLikes={108} />
        </div>
    );
}