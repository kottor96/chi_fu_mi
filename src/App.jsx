import { useState } from 'react'
import Page from './components/chi_fu_mi/Page'

function App() {
  const [score,setScore] = useState(0)
  const [botScore,setBotScore] = useState(0)
  function victoire() {
    setScore(score+1)
  }
  function defaite() {
    setBotScore(botScore+1)
  }

  return (
    <>
      <Page/>
    </>
  )
}

export default App
