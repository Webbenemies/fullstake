
import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
function App() {
const [first, setfirst] = useState([])

useEffect(()=>{
  axios.get("/api/v1/public/randomjokes?limit=10&query=science&inc=categories%2Cid%2Ccontent&page=1").then((e)=>{
    console.log('>>>>>>>>>>>', e.data.data.data)
    setfirst(e.data.data.data)
  }).catch((err)=>{
    console.log(err);
  })
},[])
  return (
    <>
    {
      first.map((e)=>(
        <h3 key={e.id}>
          {e.content}
        </h3>
      ))
    }
    </>
  )
}

export default App
