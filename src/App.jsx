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
  const [rule,setRule] = useState(false)
  const [mode5,setMode5] = useState(false)

  
  function ocRule() {
    rule? setRule(false) : setRule(true)
  }
  function victoire() {
    setScore(score+1)
  }
  function defaite() {
    setBotScore(botScore+1)
  }


  function jouer(e) {
    let random = Math.round(Math.random()*2)
    let botChosen = gameRule[random]
    
    
    let chose = gameRule.find(element=>element.type === e.currentTarget.id)

    setBotChose(botChosen.type)
    setPlayerChose(chose.type)

    botChosen.type==chose.type ? setResultat('Egaliter !!') : (
      botChosen.gagne.map((element)=>{
        
        element==chose.type ?
          (setResultat('Vous avez perdu'),defaite())
        
          :chose.gagne.map((element2)=>{
            element2 == botChosen.type && (setResultat('vous avez gagnez'),victoire())
          })
      })
    )
    setPlay(true)
  }

  function relancer(){
    setPlay(false)
    setResultat('')
  }

  function play5fiv(){
    mode5?setMode5(false):setMode5(true)
  }

  return (
    <>
      <Page changerMode={play5fiv} mode={mode5} ocRule={ocRule} rule={rule} relancer={relancer} resultat={resultat} 
      score={score} botScore={botScore} play={jouer} lancer={play} playerChose={playerChose} botChose={botChose}/>
      
    </>
  )
}

export default App
