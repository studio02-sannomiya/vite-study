import './App.css'
import NoticeBox from './components/NoticeBox/NoticeBox'
import ThemeDemo from './components/ThemeDemo/ThemeDemo'
import ToggleDemo from './components/ToggleDemo/ToggleDemo'
import ThemeProvider from './context/ThemeProvider/ThemeProvider'

// Reactで扱うコンポーネント（関数）の名前はパスカルケース
// パスカルケースというのは頭文字が大文字で書く書き方
// ファイルの名前をつける際も、コンポーネントと同じく、
// パスカルケース、かつ、コンポーネント名と一致させておくと便利。
function App() {

  return (
    <>
      <h1>Chapter8 カスタムフック</h1>

      <h2>表示・非表示の切り替え</h2>
      <ToggleDemo />
      <NoticeBox />

      <h2>テーマの切り替え</h2>
      <ThemeProvider>
        <ThemeDemo />
      </ThemeProvider>

    </>
  )
}

export default App
