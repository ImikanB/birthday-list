import React, { useState } from 'react';
import {names} from './data'


const App = () => {
  const [people, setPeople] = useState(names);
  const number = people.length;
  const handle = () => {
    setPeople([]) 
  }
  return (
    <>
      <section className='container'>
        <p className='head'>{number} Birthdays Today</p>
        {people.map((person) => {
          const { id, name, age, img } = person
          return (
            <>
              <article key={id} className='item'>
                <img src={img} alt='' />
                <div>
                  <h4>{name}</h4>
                  <p>{age} years</p>
                </div>
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
