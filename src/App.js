import React, { useState } from 'react';
import {names} from './data'


const App = () => {
  const [people, setPeople] = useState(names);
  let number = 5;
  const handle = () => {
    setPeople([])  
  }
  return (
    <>
      <section className='container'>
        <p className='head'>{number} Birthdays Today</p>
        {people.map((person) => {
          const { id, name, age } = person
          return (
            <>
              <article key={id} className='item'>
                <h4>{name}</h4>
                <p>{age} years</p>
              </article>
            </>
          )
        })}
        <button className='btn' onClick={handle}>Clear All</button>
      </section>
    </>
  )
}

export default App
