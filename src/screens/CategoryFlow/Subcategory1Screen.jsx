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

const Subcategory1Screen = () => {
  const dispatch = useDispatch();
  const checkedCategories = useSelector(store => store.store.questionsAndAnswers)
  const activeMainCategory = useSelector(store => store.store.selectedMainCategory)

  const navigate = useNavigate();
  const { state } = useLocation();
  const { subcategories_1, subcategoryName } = state

  let displayNextBtn = false

  subcategories_1.map(subcategory => {
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
  const handleSavingCategory = (category, isSaved, hasAutoNext, subcategories_2, subcategoryName, color) => {
    if (isSaved) dispatch(removeAnswer(category))
    else {
      dispatch(saveQuestionAndAnswer(question, category, color))
      if (hasAutoNext) navigate('/subcategory2', { state: { subcategories_2, subcategoryName } })
    }
  }

  const renderActionCard = (categoryLetter, name, customColor, isChecked, hasAutoNext, subcategories_2) => {
    let categoryName = ''
    if (categoryLetter) categoryName = categoryLetter + '.' + name
    else categoryName = name
    return (
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        <div
          className='main-container-card'
          style={{ backgroundColor: customColor || 'white' }}
          onClick={() => handleSavingCategory(categoryName, isChecked, hasAutoNext, subcategories_2, categoryName, customColor)}
        >
          <div className='inner-container-card' style={{ backgroundColor: customColor || 'white' }}>
            {categoryLetter && <h1 className='card-text-style' style={{ color: customColor ? 'white' : 'black' }}>{categoryLetter}.</h1>}
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
          subcategories_1.map((subcategory, index) => {
            const subcategories_2 = subcategories_1[subcategories_1.length - 1].subcategories_2
            let name = ''
            if (subcategory.categoryLetter) name = subcategory.categoryLetter + '.' + subcategory.name
            else name = subcategory.name
            const isChecked = checkedCategories?.find(category => category.answer == name)
            if (subcategory.shouldDeleteLast) {
              if (index < subcategories_1.length - 1) {
                return renderActionCard(
                  subcategory.categoryLetter,
                  subcategory.name,
                  subcategory.customColor,
                  isChecked,
                  subcategory.autoNext,
                  subcategories_2,
                )
              }
            } else {
              return renderActionCard(
                subcategory.categoryLetter,
                subcategory.name,
                subcategory.customColor,
                isChecked,
                subcategory.autoNext,
                subcategories_2,
              )
            }
          })
        }
        {renderNextButton(() => {
          navigate('/shared-category', { state: { sharedCategory: sharedCategories[0], subcategoryName: sharedCategories[0].name, parentName: subcategoryName } })
        })}
      </div>
    </>
  )
}

export default Subcategory1Screen
