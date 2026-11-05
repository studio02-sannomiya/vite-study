import './App.css'
import Card from './components/Card'
import Greeting from './components/Greeting'
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

      {/* 問題1 */}
      <Greeting name="一郎" age={25} />
      <Greeting />

      {/* 問題2 */}
      {/* <Card>
        <p>React2日目</p>
        <p>propsやchildrenを学びました</p>
      </Card>
      <Card>
        <p>3ヶ月本当によく頑張っています</p>
      </Card> */}

      {/* 問題3 */}
      <Card day={1}>
        <p>環境構築をしました</p>
      </Card>

      <Card day={2}>
        <p>propsやchildrenを学びました。</p>
        <p>練習問題にもチャレンジしました</p>
      </Card>

    </>
  )
}

export default App
