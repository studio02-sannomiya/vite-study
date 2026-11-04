import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Profile from './components/Profile'
import Section01 from './components/Section01'
import Section02 from './components/Section02'
import Section03 from './components/Section03'

// Reactで扱うコンポーネント（関数）の名前はパスカルケース
// パスカルケースというのは頭文字が大文字で書く書き方
// ファイルの名前をつける際も、コンポーネントと同じく、
// パスカルケース、かつ、コンポーネント名と一致させておくと便利。
function App() {

  return (
    <>
      <Header />
      <Section01 />
      <Section02 />
      <Section03 />

      <p className="wrapper">Reactがんばります</p>
      <Profile />
      <Footer />
    </>
  )
}

export default App
