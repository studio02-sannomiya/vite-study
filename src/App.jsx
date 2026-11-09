import './App.css'
import Question01 from './components/Question1'
import Question01Props from './components/Question1Props'
import Question02 from './components/Question2'
import Question02Props from './components/Question2Props'
import Question03 from './components/Question3'
import Question03Props from './components/Question3Props'
import UserSection from './components/UserSection'
import { users } from './components/users'

// Reactで扱うコンポーネント（関数）の名前はパスカルケース
// パスカルケースというのは頭文字が大文字で書く書き方
// ファイルの名前をつける際も、コンポーネントと同じく、
// パスカルケース、かつ、コンポーネント名と一致させておくと便利。
function App() {

  return (
    <>
      <section>
        <h2>Q1</h2>
        <Question01 />

      </section>

      <section>
        <h2>Q2</h2>
        <Question02 />
      </section>

      <section>
        <h2>Q3</h2>
        <Question03 />
      </section>

      <UserSection>
        <Question03 />
      </UserSection>

      <section>
        <h2>propsを使ってusersを渡す場合</h2>
        <h3>Q1</h3>
        <Question01Props users={users} />
        <h3>Q2</h3>
        <Question02Props users={users} />
        <h3>Q3</h3>
        <Question03Props users={users} />
        <h3>Q4</h3>
        <UserSection>
          <Question03Props users={users} />
        </UserSection>

      </section>
    </>
  )
}

export default App
