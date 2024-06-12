import './App.scss'
import Header from './components/Header/Header'
import Date from './components/Date/Date'
import CardList from './components/CardList/CardList'
import { useState, useEffect } from 'react'

// function getDate(){
//   const newDate = new Date();
//   const month = newDate.getMonth() + 1;
//   const day = newDate.getDate()
//   return newDate;
// }

function App() {
  // const [ date , setDate ] = useState(getDate());

  return (
    <>
      <Header />
      <Date />
      <CardList />
    </>
  )
}

export default App
