import { useState } from 'react'
import Page from './components/chi_fu_mi/Page'


const gameRule= [
  {type:'pierre',gagne:['ciseaux','lizzard']},
  {type:'papier',gagne:['pierre','spock']},
  {type:'ciseaux',gagne:['papier','lizzard']},
  {type:'lizzard',gagne:['spock','papier']},
  {type:'spock',gagne:['ciseaux','pierre']}
]


function App() {
  const [score,setScore] = useState(0)
  const [botScore,setBotScore] = useState(0)
  const [playerChose,setPlayerChose] = useState()
  const [botChose,setBotChose] = useState()
  const [play,setPlay] = useState(false)
  const [resultat,setResultat] = useState('')

  function victoire() {
    setScore(score+1)
  }
  function defaite() {
    setBotScore(botScore+1)
  }
  function jouer(e) {
    const random = Math.round(Math.random()*3)
    const botChosen = gameRule[random]
    
    
    const chose = gameRule.find(element=>element.type === e.currentTarget.id)

    setBotChose(botChosen.type)
    setPlayerChose(chose.type)

    botChosen.gagne.map((element)=>{
      
      element==chose.type ?
        (setResultat('bot'),
        defaite())
      
        :chose.gagne.map((element2)=>{
          element2 == botChosen.type ? (setResultat('joueur'),victoire()) : setResultat( 'egaliter')
        })
    })
    setPlay(true)
  }
  function relancer(){
    setPlay(false)
    setResultat('')
  }

  return (
    <>
      <Page relancer={relancer} resultat={resultat} score={score} botScore={botScore} play={jouer} lancer={play} playerChose={playerChose} botChose={botChose}
      />
    </>
  )
}

export default App
