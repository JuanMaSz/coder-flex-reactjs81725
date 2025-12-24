import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({prod}) => {
  return (
    <Card className='cardItem d-flex flex-column' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.img} style={{ height: '250px', objectFit: 'cover', objectPosition: 'center' }}/>
      <Card.Body className='d-flex flex-column p-3'>
      <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex flex-column'>
                <Card.Title className='m-0' >{prod.name}</Card.Title>
                <Card.Text className='cardPrice m-0'>
                  ${prod.price},00
                </Card.Text>
            </div>
            <Link className='btn btn-sm btn-primary' to={'/item/'+prod.id}>
                Ver Más
            </Link>  
      </div> 
      </Card.Body>
    </Card>
  )
}

export default Item