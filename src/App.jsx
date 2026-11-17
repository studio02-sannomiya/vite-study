import { Profiler, Suspense } from 'react'
import './App.css'
import ProductInfo from './components/ProductInfo'
import UserList from './components/UserList'
import Loading from './components/Loading'
import { ErrorBoundary } from 'react-error-boundary'
import ModuleBasic from './components/ModuleBasic/ModuleBasic'
import EmotionBasic from './components/EmotionBasic'
import ProductList from './components/ProductList/ProductList'
import TogglePanel from './components/TogglePanel/TogglePanel'
import HintBox from './components/HintBox/HintBox'


const handleMeasure = (id, phase, actualDuration) => {
  console.log(`[${id}] ${phase}: ${actualDuration.toFixed(2)}ms`);
};

// Reactで扱うコンポーネント（関数）の名前はパスカルケース
// パスカルケースというのは頭文字が大文字で書く書き方
// ファイルの名前をつける際も、コンポーネントと同じく、
// パスカルケース、かつ、コンポーネント名と一致させておくと便利。
function App() {

  return (
    <>
      <h1>Chapter5 コンポーネント開発（応用）</h1>
      <section className="sec">
        <h2>SuspenseとProfiler</h2>
        <ProductInfo />

        <Profiler id="UserList" onRender={handleMeasure}>

          <ErrorBoundary fallback={<p className="error">エラーが発生しました。</p>}>
            <Suspense fallback={<Loading text="ユーザーを読み込み中..." />}>
              <UserList />
            </Suspense>
          </ErrorBoundary>
        </Profiler>
      </section>

      <section className="sec">
        <h2>CSS Modules</h2>
        <ModuleBasic />
      </section>

      <section className="sec">
        <h2>Emotion</h2>
        <EmotionBasic />
      </section>

      <section className="sec">
        <h2>問題1</h2>
        <TogglePanel />
      </section>

      <section className="sec">
        <h2>問題2</h2>
        <HintBox />
      </section>

      <section className="sec">
        <h2>問題3</h2>
        <ProductList />

      </section>
    </>
  )
}

export default App
