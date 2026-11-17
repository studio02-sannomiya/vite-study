import './App.css'
import ProductInfo from './components/ProductInfo'

// Reactで扱うコンポーネント（関数）の名前はパスカルケース
// パスカルケースというのは頭文字が大文字で書く書き方
// ファイルの名前をつける際も、コンポーネントと同じく、
// パスカルケース、かつ、コンポーネント名と一致させておくと便利。
function App() {

  return (
    <>
      <h1>Chapter5 コンポーネント開発（応用）</h1>
      <section className="sec">
        <h2>SuspenseとProfiler</h2>
        <ProductInfo />
      </section>
    </>
  )
}

export default App
