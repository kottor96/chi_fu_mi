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
  function victoire() {
    setScore(score+1)
  }
  function defaite() {
    setBotScore(botScore+1)
  }
  function jouer(e) {
    const random = Math.round(Math.random()*3)
    const botChosen = gameRule[random]
    const chose = gameRule.find(element=>element.type === 'pierre')
    
    botChosen.gagne.map((element)=>{
      
      console.log(score);
      element==chose.type ?
        console.log('bot a gagner')+defaite()
      
        :chose.gagne.map((element2)=>{
          element2 == botChosen.type ? console.log('joueur a gagner')+victoire() : console.log('egaliter')
        })
    })
    

    // botChosen == e.target.value ?    
  }
  jouer()

  return (
    <>
      <Page score={score} botScore={botScore}/>
    </>
  )
}

export default App
