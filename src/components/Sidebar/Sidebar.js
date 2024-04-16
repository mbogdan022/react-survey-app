import './Sidebar.css'
import React from 'react'
import mainCategories from '../../utils/mainCategories'

const Sidebar = ({ activeMainCategory, onSelectCategory }) => {
  const renderItem = (itemTitle, key) => {
    return (
      <a key={key} onClick={() => onSelectCategory(itemTitle)}>
        <h2
          className='item-style-sidebar'
          style={{ color: activeMainCategory == itemTitle ? 'white' : '#669999' }}
        >
          {itemTitle}
        </h2>
      </a>
    )
  }

  return (
    <div className="main-container-sidebar">
      <div className="inner-container-sidebar">
        {
          mainCategories.map(category => {
            return renderItem(category.name, category.id)
          })
        }
      </div>
    </div>
  )
}

export default Sidebar
