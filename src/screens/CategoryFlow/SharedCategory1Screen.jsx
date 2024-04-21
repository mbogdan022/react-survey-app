import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './CategoryScreen.css';
import '../../App.css';

import Sidebar from '../../components/Sidebar/Sidebar'
import { saveQuestionAndAnswerA5 } from '../../redux/actions';

import BackIcon from '../../assets/back-icon.png';
import CheckIcon from '../../assets/checkedIcon.png'
import sharedCategories from '../../utils/sharedCategories'

const SharedCategory1Screen = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { subcategoryName, parentName } = state

  const sharedCategory = state.sharedCategory.subcategories_2 || state.sharedCategory.subcategories_1 || state.sharedCategory?.subcategories || state.sharedCategory

  const dispatch = useDispatch();
  const checked = useSelector(store => store.store.questionsAndAnswers)
  const activeMainCategory = useSelector(store => store.store.selectedMainCategory)

  const renderHeader = () => (
    <div className="header-container">
      <a className="go-back-btn-container" onClick={() => navigate(-1)}>
        <img src={BackIcon} style={{ width: 20, height: 20 }} />
      </a>
      <h2 className="title-text-style">{subcategoryName}</h2>
    </div>
  )

  let displayNextBtn = false

  sharedCategory.map(subcategory => {
    let subcategoryName = ''
    if (subcategory.categoryLetter) subcategoryName = subcategory.categoryLetter + '.' + subcategory.name
    else subcategoryName = subcategory.name
    checked.map(checkedCategory => {
      const res = checkedCategory.answer == subcategoryName
      if (res) displayNextBtn = true
    })
  })

  const renderNextButton = () => {
    return (
      <div onClick={() => navigate('/shared-category', { state: { sharedCategory: sharedCategories[0], subcategoryName: sharedCategories[0].name, parentName: parentName + '/' + 'A.5 Compliance with rules' } })}
        className="next-button-container" style={{ backgroundColor: displayNextBtn ? '#363740' : '#B4B5B9' }}>
        <p className="next-button-text-style">NEXT</p>
      </div>
    )
  }

  const question = subcategoryName

  const handleSavingCategory = (category, isSaved, hasAutoNext, subcategories_1, subcategoryName, color) => {
    if (isSaved) { }
    else {
      dispatch(saveQuestionAndAnswerA5(parentName + '/' + 'A.5 Compliance with rules', question, category, color))
      if (hasAutoNext) navigate('/shared-category1', { state: { sharedCategory: subcategories_1, subcategoryName, parentName } })
    }
  }

  const renderActionCard = (categoryLetter, name, customColor, isChecked, hasAutoNext, subcategories_1) => {
    console.log('customColor: ', customColor)
    let categoryName = ''
    if (categoryLetter) categoryName = categoryLetter + '.' + name
    else categoryName = name
    return (
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        <div className='main-container-card' style={{ backgroundColor: customColor || 'white' }} onClick={() => handleSavingCategory(categoryName, isChecked, hasAutoNext, subcategories_1, categoryName, customColor)}
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
          sharedCategory.map(subcategory => {
            let name = ''
            if (subcategory.categoryLetter) name = subcategory.categoryLetter + '.' + subcategory.name
            else name = subcategory.name
            const isChecked = checked.find(item => item.answer == name && item.parent == parentName + '/' + 'A.5 Compliance with rules')
            return renderActionCard(
              subcategory.categoryLetter,
              subcategory.name,
              subcategory.customColor,
              isChecked,
              subcategory.autoNext,
              subcategory.subcategories_1 || subcategory.subcategories_2
            )
          })
        }
        {renderNextButton()}
      </div>
    </>
  )
}

export default SharedCategory1Screen
