import React from 'react'
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
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
            <div className='ms-5-mt-5 row d-flex gap-s'>
                {
                    data && data.map(list => (
                        <Card key={list.id} style={{ width: '20rem', height: 'fit-content'}}>
                            <Card.Img style={{ width: '10rem', height: '10rem' }} variant="top" src={list.image} />
                            <Card style={{ width: '18rem' }}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>{list.title}</ListGroup.Item>                        
                                    <ListGroup.Item>Price: ${list.price}</ListGroup.Item>
                                    <ListGroup.Item>Rating: {list.rating.rate}</ListGroup.Item>
                                    <ListGroup.Item className='mb-0'><Button variant="primary">Add to Bag</Button></ListGroup.Item>
                                </ListGroup>                                
                            </Card>
                        </Card>
                    ))
                }
            </div>


        </div>
    )
}


export default Product
