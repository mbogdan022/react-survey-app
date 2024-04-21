import React from 'react';
import { useNavigate , useLocation} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './CategoryScreen.css';
import '../../App.css';

import Sidebar from '../../components/Sidebar/Sidebar'
import { removeAnswer, saveQuestionAndAnswerA2 } from '../../redux/actions';

import BackIcon from '../../assets/back-icon.png';
import CheckIcon from '../../assets/checkedIcon.png'
import mainCategories from '../../utils/mainCategories'
import sharedCategories from '../../utils/sharedCategories'

const SharedCategoryScreen = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { subcategoryName, parentName } = state

  const sharedCategory = state.sharedCategory.subcategories || state.sharedCategory

  const dispatch = useDispatch();
  const checked = useSelector(store => store.store.questionsAndAnswersA2) || []
  const activeMainCategory = useSelector(store => store.store.selectedMainCategory)

  const findCategoryLetter = sharedCategories.find(category => category.name == subcategoryName)

  const renderHeader = () => (
    <div className="header-container">
      <a className="go-back-btn-container" onClick={() => navigate(-1)}>
        <img src={BackIcon} style={{ width: 20, height: 20 }} />
      </a>
      <h2 className="title-text-style">{findCategoryLetter ? findCategoryLetter.categoryLetter + '.' + subcategoryName : subcategoryName}</h2>
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
      <div onClick={() => navigate('/category', { state: { category: mainCategories[0].categories[0] } })}
        className="next-button-container" style={{ backgroundColor: displayNextBtn ? '#363740' : '#B4B5B9' }}>
        <p className="next-button-text-style">NEXT</p>
      </div>
    )
  }

  const question = subcategoryName

  const handleSavingCategory = (category, isSaved, hasAutoNext, subcategories_1, subcategoryName, color) => {
    if (isSaved) return dispatch(removeAnswer(category))
    else {
      dispatch(saveQuestionAndAnswerA2(parentName, question, category, color))
      if (hasAutoNext) navigate('/shared-category', { state: { sharedCategory: subcategories_1, subcategoryName, parentName } })
    }
  }

  const renderActionCard = (categoryLetter, name, customColor, isChecked, hasAutoNext, subcategories_1) => {
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
            const isChecked = checked.find(item => item.answer == name && item.parent == parentName)
            return renderActionCard(
              subcategory.categoryLetter,
              subcategory.name,
              subcategory.customColor,
              isChecked,
              subcategory.autoNext,
              subcategory.subcategories_1
            )
          })
        }
        {sharedCategory[0].autoNext ? null : renderNextButton()}
      </div>
    </>
  )
}

export default SharedCategoryScreen
