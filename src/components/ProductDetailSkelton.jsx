import { Fragment } from "react";

// ProductDetail を読み込んでいる間に表示する「仮の形」（スケルトン）
// 本物と同じレイアウトにしておくと、表示が切り替わったときに画面がガタつかない
export default function ProductDetailSkeleton() {
    return (
        <section className="sec">
            <div className="skeleton skeleton_title"></div>
            <dl>
                {/* 本物と同じく3行ぶん用意する（key を付けるため <></> ではなく Fragment を使う） */}
                {[1, 2, 3].map((n) => (
                    <Fragment key={n}>
                        <dt className="skeleton"></dt>
                        <dd className="skeleton"></dd>
                    </Fragment>
                ))}
            </dl>
        </section>
    );
}