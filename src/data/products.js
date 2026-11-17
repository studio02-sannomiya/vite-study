// ① 画像をインポートする（インポート名は、products配列を参考にしてください）
import mugImage from "../assets/images/01_mug.webp";
import tumblerImage from "../assets/images/02_tumbler.webp";
import dripperImage from "../assets/images/03_dripper.webp";


export const products = [
    {
        id: 1,
        name: 'マグカップ',
        price: 1500,
        image: mugImage,
    },
    {
        id: 2,
        name: 'タンブラー',
        price: 2500,
        image: tumblerImage,
    },
    {
        id: 3,
        name: 'コーヒードリッパー',
        price: 1800,
        image: dripperImage,
    },
];