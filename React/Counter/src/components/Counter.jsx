import React, { useState } from 'react'

const Counter = () => {

    const [value, setvalue] = useState(0)

    return (
        <>
            <div className='fs-1'>
                {value}
            </div>

            <button className='btn btn-success fw-bold px-5' onClick={() => setvalue(value - 1)} disabled={value === 0}>MINUS</button>
            <button className='btn btn-warning fw-bold mx-2 px-5' onClick={() => setvalue(0)}>RESET</button >
            <button className='btn btn-primary fw-bold px-5' onClick={() => setvalue(value + 1)}>ADD</button>
        </>
    )
}

export default Counter