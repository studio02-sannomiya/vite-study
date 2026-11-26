import React, { useState, useRef } from 'react';

export default function Refstudy() {
    //useStateでボタンの状態を管理するための状態変数を作成。
    const [showButton, setShowButton] = useState(false);
    //useRefでY軸のスクロール量を保持するための参照変数を作成。
    const scrollY = useRef(0);

    // イベントリスナーを追加
    const handleScroll = () => {
        //参照変数scrollYのcurrentにブラウザのY軸移動量を格納。
        scrollY.current = window.scrollY;

        //scrollYのcurrentの値で条件分岐を作成し、状態変数showButtonの真偽値を変更。
        if (scrollY.current > 200) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    // コンポーネントがレンダリングされる度にイベントが追加されないように最初の呼び出しで設定
    if (!window._scrollEventSet) {
        window.addEventListener("scroll", handleScroll);
        window._scrollEventSet = true;
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            {showButton && (
                <button onClick={scrollToTop} style={styles.button}>
                    TOPに戻る
                </button>
            )}
        </div>
    );
}

const styles = {
    button: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 20px',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

//注意。
//スクロール検知は本来はuseEffectを使うのが一般的です。
//今回はuseStateとuseRefの学習用にuseEffectを意図的に外しています。