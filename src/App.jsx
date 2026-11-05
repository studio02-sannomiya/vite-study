import './App.css'
import MyHello from './components/MyHello'

// Reactで扱うコンポーネント（関数）の名前はパスカルケース
// パスカルケースというのは頭文字が大文字で書く書き方
// ファイルの名前をつける際も、コンポーネントと同じく、
// パスカルケース、かつ、コンポーネント名と一致させておくと便利。
function App() {

  return (
    <>
      <h1>React初期画面</h1>
      <p>Reactがんばります</p>

      <MyHello myName="Taro" />
      <MyHello myName="Jiro" />
      <MyHello />
    </>
  )
}

export default App
