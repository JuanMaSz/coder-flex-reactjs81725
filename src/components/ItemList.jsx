import React from 'react'
import Item from './Item'

export const ItemList = ({ data }) => {
  return (
    <>
      {data.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </>
  )
}
