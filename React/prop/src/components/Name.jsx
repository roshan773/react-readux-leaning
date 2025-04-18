import React from 'react'

const Name = ({ name, age, greet }) => {
    return (
        <div>
            <h1>Hello</h1>
            <h2>My Name is {name} and my age is {age} years old</h2>
            <button onClick={greet}>CLICK ME</button>
        </div>
    )
}

export default Name