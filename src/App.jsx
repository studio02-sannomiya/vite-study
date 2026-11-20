import './App.css'
import HookTimer from './components/HookTimer/HookTimer'
import StateEffect from './components/StateEffect/StateEffect'

// Reactで扱うコンポーネント（関数）の名前はパスカルケース
// パスカルケースというのは頭文字が大文字で書く書き方
// ファイルの名前をつける際も、コンポーネントと同じく、
// パスカルケース、かつ、コンポーネント名と一致させておくと便利。
function App() {

  return (
    <>
      <h1>Chapter7 フック </h1>
      <StateEffect />
      {/* <HookTimer init={10} /> */}
    </>
  )
}

export default App
