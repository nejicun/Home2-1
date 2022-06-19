import React, { useState } from 'react'
import Items from '../db'

export default function ShowItems(props) {
  const items = Items;
  const select = props.selected;
  
  return (
    <div>
    <div className='Cards'>
        {items.map((item) => {
          if  (select === "All" || select === item.category) {
            return <div key={item.id} className="Card"><img src={item.img}/></div>
          } 
        })}
    </div>
    </div>
  )
}
