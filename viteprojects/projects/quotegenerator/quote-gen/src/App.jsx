import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [quote, setquote] = useState("this is a quote")

//we use the fetch api here 
//then convert the result into json 

 const getquotes=() => {
  fetch(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`)
  .then(res=>res.json())
  .then(ans=>{
    let dataquotes=ans.quotes
    let randomNum = Math.floor(Math.random() * dataquotes.length);
    let randq=dataquotes[randomNum]
    setquote(randq.quote)
  })
}

//use this only to get the new quote everytime we refresh the page , getquotes get called.
useEffect(() => {
  getquotes()
}, [])

const handleclick=()=>{
  getquotes()
}

  return (
    <>
      <div className="headng">
        <h1>Quote generator</h1>
      </div>
      <section>
        <span>To generte a new Quote:</span>
        <div>{quote}</div>
        <div>
        <button className='border bg-blue-500' onClick={handleclick}>click here</button>
        </div>
      </section>
    </>
  )
}

export default App
