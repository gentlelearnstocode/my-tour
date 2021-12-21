import React, { useState, useEffect } from 'react'
import Tour from './Tour'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function Display() {
    const [tours, setTours] = useState([])
    const fetchTours = async () =>{
        const res = await fetch(url)
        const tours = await res.json()
        setTours(tours)
    }
    useEffect(() =>{
        fetchTours()
    }, [] )
  return (
      <main>
          <Tours tours={tours}/>
          </main>
  )
}
export default Display