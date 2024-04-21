import './Sidebar.css'
import React from 'react'
import mainCategories from '../../utils/mainCategories'
import { useDispatch } from 'react-redux'
import { selectMainCategory } from '../../redux/actions'

import { useNavigate } from 'react-router-dom'

const Sidebar = ({ activeMainCategory }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const renderItem = (itemTitle, key) => {
    return (
      <a key={key} onClick={() => {
        dispatch(selectMainCategory(itemTitle))
        navigate('/')
      }}
      >
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
        <h2
          onClick={() => {
            dispatch(selectMainCategory('Generate report'))
            navigate('/generate-report')
          }}
          style={{ marginTop: '20%', color: '#53c68c' }}
          className="item-style-sidebar"
        >
          ~ Generate report ~
        </h2>
      </div>
    </div>
  )
}

export default Sidebar
