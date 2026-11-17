import { lazy, Suspense, useState } from "react"
// import ProductDetail from "./ProductDetail";

// const ProductDetail = lazy(() => import("./ProductDetail"));

const ProductDetail = lazy(async () => {
    // 講義用：読み込みに1秒かかる状況を再現
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return import("./ProductDetail");
});


export default function ProductInfo() {
    const [showDetail, setShowDetail] = useState(false);
    const handleClick = () => setShowDetail(!showDetail);

    return (
        <>
            <button type="button" onClick={handleClick}>
                {showDetail ? "閉じる" : "詳細を見る"}
            </button>
            {showDetail && (
                <Suspense fallback={<p>読み込み中...</p>}>
                    <ProductDetail />
                </Suspense>
            )}
        </>
    )
}
