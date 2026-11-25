import { use } from 'react';
import './App.css'
import ThemeButton from './components/ThemeButton/ThemeButton'
import { ThemeContext } from './context/ThemeContextArea/ThemeContextArea';

// Reactで扱うコンポーネント（関数）の名前はパスカルケース
// パスカルケースというのは頭文字が大文字で書く書き方
// ファイルの名前をつける際も、コンポーネントと同じく、
// パスカルケース、かつ、コンポーネント名と一致させておくと便利。
function App() {
  // コンテキストの利用②
  const { theme } = use(ThemeContext);

  return (
    <>
      <div className={`app ${theme}`}>
        <h1>Chapter7 use + Context</h1>
        <ThemeButton />
      </div>
    </>
  )
}

export default App
