import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Jokes = () => {

    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(null)


    const fetchdata = async () => {
        let result = await axios("https://fakestoreapi.com/products")
        console.log(result)
        let detail = setdata(result.data)
        console.log(detail)
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return loading == true ? (<h1>LOADING....</h1>) : error == true ? (<h1>ERROR 404</h1>) : (
        <>
            <h1>PRODUCT FETCH</h1>
            {data.map((el) => (
                <div key={el.id}>
                    <img src={el.image} alt={el.title} />
                </div>
            ))}
        </>
    )
}

export default Jokes