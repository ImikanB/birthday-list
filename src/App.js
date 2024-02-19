import React, { useState } from 'react';
import {names} from './data'


const App = () => {
  const [people, setPeople] = useState(names);
  const number = people.length;
  // const handle = () => {
  //   setPeople([]) 
  // }
  const removeBtn = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <>
      <section className='container'>
        <p className='head'>{number} Birthdays Today</p>
        {people.map((person) => {
          const { id, name, age, img } = person
          return (
            <>
            <section className='data'>
              <article key={id} className='item'>
                <img src={img} alt='' />
                <div>
                  <h4>{name}</h4>
                  <p>{age} years</p>
                </div>
              </article>
              <button className='bn' onClick={() => removeBtn(id)}>Remove</button>
              </section>
            </>
          )
        })}
        <button className='btn' onClick={() => setPeople([])}>Clear All</button>
      </section>
    </>
  )
}

export default App
