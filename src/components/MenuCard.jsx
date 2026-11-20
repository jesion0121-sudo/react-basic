import React from 'react'

const MenuCard = ({}) => {
  return (
    <li className='menu-item'>
      <span className="tag"></span>
      <p className="menu-icon"></p>
      <h3></h3>
      <p className="price">
        {/* {price.toLocaleString()} */}
      </p>
      <button className='btn-cart'>담기</button>
    </li>
  )
}

export default MenuCard