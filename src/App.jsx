import './App.css'
import HookContext from './components/HookContext/HookContext'
import UserProfile from './components/UserProfile/UserProfile';
import UserContext from './context/UserContext';

const user = {
  name: "田中太郎",
  email: "tanaka@example.com",
};

// Reactで扱うコンポーネント（関数）の名前はパスカルケース
// パスカルケースというのは頭文字が大文字で書く書き方
// ファイルの名前をつける際も、コンポーネントと同じく、
// パスカルケース、かつ、コンポーネント名と一致させておくと便利。
function App() {

  return (
    <>
      <h1>Chapter7 フック基本</h1>
      <h2>use + Context</h2>

      <HookContext />

      <UserContext value={user}>
        <UserProfile />
      </UserContext>

    </>
  )
}

export default App
