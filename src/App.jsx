import './App.css'
import Counter from './components/Counter'
import ListCounter from './components/ListCounter'
import Question01 from './components/Question01'
import Question02 from './components/Question02'
import Question03 from './components/Question03'
import Question04 from './components/Question04'
import Question05 from './components/Question05'
import Switch from './components/Switch'

// Reactで扱うコンポーネント（関数）の名前はパスカルケース
// パスカルケースというのは頭文字が大文字で書く書き方
// ファイルの名前をつける際も、コンポーネントと同じく、
// パスカルケース、かつ、コンポーネント名と一致させておくと便利。
function App() {

  return (
    <main>
      <h1>useState練習問題</h1>

      <section>
        <h2>Q1. ON / OFF ボタン</h2>
        <Question01 />
      </section>

      <section>
        <h2>Q2. いいねボタン</h2>
        <Question02 />
      </section>

      <section>
        <h2>Q3. 色が変わるボタン</h2>
        <Question03 />
      </section>

      <section>
        <h2>Q4.モーダルウィンドウ</h2>
        <Question04 />
      </section>

      <section>
       <h2>Q5.</h2>
       <Question05 />
      </section>
    </main>
  )
}

export default App
