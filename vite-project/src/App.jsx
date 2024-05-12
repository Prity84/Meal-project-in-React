import axios from "axios"
import { useState, useEffect } from "react"
import './App.css'


function App() {
  const[items, setIteams] = useState([])

  useEffect(()=>{
    axios
    .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood")
    .then((res)=>{
      console.log(res.data);
      setIteams(res.data.meals);
    })
    .catch((err)=>{
      console.log("Error")
    })
  },[])

 
const itemsList = items.map(({strMeal, strMealThumb, idMeal})=>{
  return(
    <>
    <section className="card">
      <img src={strMealThumb} alt="image" />
      <section className="content">
        <p>{strMeal}</p>
        <p>{idMeal}</p>
      </section>
    </section>
    </>
  )
})
return <div className="iteams-container">{itemsList}</div>;

}

export default App
