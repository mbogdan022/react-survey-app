import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './CategoryScreen.css';
import '../../App.css';

import Sidebar from '../../components/Sidebar/Sidebar'
import { saveQuestionAndAnswer, removeAnswer } from '../../redux/actions';

import BackIcon from '../../assets/back-icon.png';
import CheckIcon from '../../assets/checkedIcon.png'
import sharedCategories from '../../utils/sharedCategories';

const Subcategory2Screen = () => {
  const dispatch = useDispatch();
  const checkedCategories = useSelector(store => store.store.questionsAndAnswers)
  const activeMainCategory = useSelector(store => store.store.selectedMainCategory)

  const navigate = useNavigate();
  const { state } = useLocation();
  const { subcategories_2, subcategoryName } = state

  let displayNextBtn = false

  subcategories_2.map(subcategory => {
    let subcategoryName = ''
    if (subcategory.categoryLetter) subcategoryName = subcategory.categoryLetter + '.' + subcategory.name
    else subcategoryName = subcategory.name
    checkedCategories.map(checkedCategory => {
      const res = checkedCategory.answer == subcategoryName
      if (res) displayNextBtn = true
    })
  })

  const renderNextButton = (onClick) => {
    return (
      <div onClick={() => onClick()}
        className="next-button-container" style={{ backgroundColor: displayNextBtn ? '#363740' : '#B4B5B9' }}>
        <p className="next-button-text-style">NEXT</p>
      </div>
    )
  }

  const renderHeader = () => (
    <div className="header-container">
      <a className="go-back-btn-container" onClick={() => navigate(-1)}>
        <img src={BackIcon} style={{ width: 20, height: 20 }} />
      </a>
      <h2 className="title-text-style">{subcategoryName}</h2>
    </div>
  )

  let question = subcategoryName
  const handleSavingCategory = (category, isSaved, hasAutoNext, color) => {
    if (isSaved) dispatch(removeAnswer(category))
    else {
      dispatch(saveQuestionAndAnswer(question, category, color))
      if (hasAutoNext) navigate('/shared-category', { state: { sharedCategory: sharedCategories[0], subcategoryName: 'test' } })
    }
  }

  const renderActionCard = (categoryLetter, name, customColor, isChecked, hasAutoNext) => {
    let categoryName = ''
    if (categoryLetter) categoryName = categoryLetter + '.' + name
    else categoryName = name
    return (
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        <div
          className='main-container-card'
          style={{ backgroundColor: customColor || 'white' }}
          onClick={() => handleSavingCategory(categoryName, isChecked, hasAutoNext, customColor)}
        >
          <div className='inner-container-card' style={{ backgroundColor: customColor || 'white' }}>
            {categoryLetter && <h1 className='card-text-style' style={{ color: customColor ? 'white' : 'black' }}>{categoryLetter}. </h1>}
            <h1 className='card-text-style' style={{ color: customColor ? 'white' : 'black' }}>{name}</h1>
          </div>
        </div>
        {isChecked ? <img src={CheckIcon} style={{ width: 20, height: 20, marginLeft: 30, marginBottom: 20 }} /> : null}
      </div>
    )
  }

  return (
    <>
      <Sidebar activeMainCategory={activeMainCategory} />
      <div style={{ position: 'fixed', left: '25%', width: '100%', height: '100%', alignItems: 'start', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
        {renderHeader()}
        {
          subcategories_2.map((subcategory, index) => {
            let name = ''
            if (subcategory.categoryLetter) name = subcategory.categoryLetter + '.' + subcategory.name
            else name = subcategory.name
            const isChecked = checkedCategories?.find(category => category.answer == name)
            if (subcategory.shouldDeleteLast) {
              if (index < subcategories_2.length - 1) {
                return renderActionCard(
                  subcategory.categoryLetter,
                  subcategory.name,
                  subcategory.customColor,
                  isChecked,
                )
              }
            } else return renderActionCard(
              subcategory.categoryLetter,
              subcategory.name,
              subcategory.customColor,
              isChecked,
            )
          })
        }
        {renderNextButton(() => {
          navigate('/shared-category', { state: { sharedCategory: sharedCategories[0], subcategoryName: sharedCategories[0].name } })
        })}
      </div>
    </>
  )
}

export default Subcategory2Screen
