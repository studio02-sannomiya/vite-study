import './App.css'
import FormSelect from './components/FormSelect'
import FormTextArea from './components/FormTextArea'
import StateForm from './components/StateForm'
import StateFormUC from './components/StateFormUC'

// Reactで扱うコンポーネント（関数）の名前はパスカルケース
// パスカルケースというのは頭文字が大文字で書く書き方
// ファイルの名前をつける際も、コンポーネントと同じく、
// パスカルケース、かつ、コンポーネント名と一致させておくと便利。
function App() {

  return (
    <>
      <h1>Chapter4 コンポーネント開発（フォーム）</h1>

      <StateForm />

      <StateFormUC />

      <FormTextArea />

      <FormSelect />
    </>
  )
}

export default App
