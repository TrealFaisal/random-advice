import React from 'react'
import './App.css'
import {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false)

    const [advice, setAdvice] = useState("")

    useEffect(() => {
        fetchAdvice();
    }, [])

const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response)=>{
        const {advice} = response.data.slip;
        setAdvice(advice);
    })
    .catch((error)=>{
        console.log(error);

    });


}
    
  return (
    <div className={darkTheme ? 'dark': ''}>

    <div className="bg-city dark:bg-city-dark dark:brightness-75 bg-cover bg-center min-h-screen m-0 p-0 box-border flex justify-center items-center">
   <button type='button' onClick={()=> setDarkTheme(!darkTheme)} 
   className="absolute top-0 right-0 text-xl  bg-white border rounded-full px-2 py-1 hover:shadow-lg" >
     {darkTheme ? ('light 💡'):('dark 🌙')}</button> 
      <div className="bg-white dark:bg-gray-500 bg-opacity-70 dark:bg-opacity-90 p-10 rounded-lg shadow-2xl shadow-black ">
        <h1 className="text-black dark:text-white font-bold font-serif"> {advice} </h1>
             <button className="bg-blue-500 hover:bg-blue-700 dark:bg-red-400 text-white dark:text-black font-bold py-2 px-4 rounded mt-5 font-serif" 
           onClick={fetchAdvice}>Get Advice</button>   
        </div>
    </div>
   
    </div>

  
    )
}

export default App