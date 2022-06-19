import React from 'react'

export default function navbar(props) {
    const filters = props.filters
    const select = props.selected
    
    function hundleSelected(filter) {
        props.onSelectFilter(filter);
      }
    
  return (
    <div className='filters'>
        {filters.map((filter => {
            return <div className={select == filter ? 'filter select' : 'filter'}  key={filter} onClick={() => hundleSelected(filter)}>{filter}</div>
        }))}
    </div>
  )
}
