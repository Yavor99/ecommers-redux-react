import React, {useEffect, useState} from 'react'
const Product = () => {
    const [data, setData] = useState([]);

    const getData = async () => {

     const response = await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        setData(response);
    };

    useEffect(() => {
        getData()
    }, []);


    return (
        <div>

        </div>
    )
}

export default Product
