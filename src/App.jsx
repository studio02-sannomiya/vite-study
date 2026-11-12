import './App.css'
import EventError from './components/EventError'
import EventKey from './components/EventKey'
import EventMouse from './components/EventMouse'
import EventObj from './components/EventObj'
import EventPoint from './components/EventPoint'
import Monitor from './components/Monitor'
import Question01 from './components/Question01'
import Question02 from './components/Question02'
import Question03 from './components/Question03'

// Reactで扱うコンポーネント（関数）の名前はパスカルケース
// パスカルケースというのは頭文字が大文字で書く書き方
// ファイルの名前をつける際も、コンポーネントと同じく、
// パスカルケース、かつ、コンポーネント名と一致させておくと便利。
function App() {

  return (
    <>
      <EventKey />
      {/* <EventPoint /> */}
      <EventObj />
      {/* <EventError src="/favicon.svg" alt="サンプル画像" />
      <EventMouse alt="ロゴ画像" defaultSrc="https://www.web-deli.com/image/linkbanner_l.gif" afterSrc="https://www.web-deli.com/image/home_chara.gif" /> */}
      <Monitor />

      <section>
        <Question01 title="数字を増やすカウンター">
          <p>ボタンをクリックして数字を増やしましょう。</p>
        </Question01>
      </section>

      <section>
        <Question02 title="Q2. ON / OFFの切り替え">
          ボタンを押すたびにONとOFFを切り替えましょう。
        </Question02>
      </section>

      <section>
        <Question03 title="Q3. カウンターの表示切り替え">
          数字のstateと真偽値のstateを組み合わせましょう。
        </Question03>
      </section>
    </>
  )
}

export default App
