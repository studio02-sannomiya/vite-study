// ③ モジュールCSSをインポートする
import styles from "./ProductList.module.css";
// ④ productsをインポートする
import { products } from "../../data/products";

export default function ProductList() {
    return (
        <div>
            <h2>カフェグッズ</h2>

            <ul className={styles.list}>
                {/* ⑤ map()で商品ごとのli要素を作成する */}
                {/* ⑥ li要素にkeyを指定する */}
                {/* ⑦ 画像(imgタグ)・商品名(pタグ)・価格(pタグ)を表示し、クラスを適用する */}
                {products.map((product) => (
                    <li key={product.id} className={styles.item}>
                        <img src={product.image} alt={product.name} className={styles.image} />
                        <p className={styles.name}>{product.name}</p>
                        <p className={styles.price}>{product.price}円</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}