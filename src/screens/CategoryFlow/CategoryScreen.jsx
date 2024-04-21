import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './CategoryScreen.css';
import '../../App.css';

import Sidebar from '../../components/Sidebar/Sidebar'
import sharedCategories from '../../utils/sharedCategories'
import { removeAnswer, saveQuestionAndAnswer } from '../../redux/actions';

import BackIcon from '../../assets/back-icon.png';
import CheckIcon from '../../assets/checkedIcon.png'

const CategoryScreen = () => {
  const dispatch = useDispatch();
  const checked = useSelector(store => store.store.questionsAndAnswers)
  const activeMainCategory = useSelector(store => store.store.selectedMainCategory)

  const navigate = useNavigate();
  const { state } = useLocation();
  const { category } = state

  const renderHeader = () => (
    <div className="header-container">
      <a className="go-back-btn-container" onClick={() => navigate(-1)}>
        <img src={BackIcon} style={{ width: 20, height: 20 }} />
      </a>
      <h2 className="title-text-style">{category.categoryLetter + '.' + category.name}</h2>
    </div>
  )

  const question = category.name

  const handleSavingCategory = (category, isSaved, hasAutoNext, subcategories_1, subcategoryName, color) => {
    if (isSaved) dispatch(removeAnswer(category))
    else {
      dispatch(saveQuestionAndAnswer(question, category, color))
      if (hasAutoNext) navigate('/subcategory1', { state: { subcategories_1, subcategoryName } })
    }
  }

  const renderYesNoSection = (toggleYes, toggleNo) => (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <a className="go-back-btn-container" style={{ backgroundColor: 'rgb(83, 198, 140)', marginLeft: 20, marginBottom: 20 }} onClick={() => toggleYes()}>
        <h4 style={{ color: 'white' }}>Yes</h4>
      </a>
      <a className="go-back-btn-container" style={{ backgroundColor: 'rgb(83, 198, 140)', marginLeft: 20, marginBottom: 20 }} onClick={() => toggleNo()}>
        <h4 style={{ color: 'white' }}>No</h4>
      </a>
    </div>
  )

  const handleNo = (categoryName, color) => {
    dispatch(saveQuestionAndAnswer(categoryName, 'NO', color))
    navigate('/shared-category1', { state: { sharedCategory: sharedCategories[1], subcategoryName: 'With the intention of doing harm?', parentName: categoryName } })
  }

  const renderActionCard = (categoryLetter, name, customColor, isChecked, hasAutoNext, subcategories_1, hasYesNoSection, autoEnable) => {
    let categoryName = ''
    if (categoryLetter) categoryName = categoryLetter + '.' + name
    else categoryName = name

    let checker = false;

    if (name == 'Judge/Plan') {
      const search = checked.find(item => item.answer == 'A-1.Conflict Detection')
      if (search) checker = true
    } else if (name == 'Execution') {
      console.log('here')
      const search = checked.find(item => item.answer == 'A-3.Judge/Plan')
      if (search) checker = true
    }

    const enabled = autoEnable || checker || false
    return (
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        <div
          className='main-container-card'
          style={{ backgroundColor: !enabled ? '#B4B5B9' : customColor }}
          onClick={() =>
            enabled ? handleSavingCategory(categoryName, isChecked, hasAutoNext, subcategories_1, categoryName, customColor) : {}
          }
        >
          <div className='inner-container-card' style={{ backgroundColor: !enabled ? '#B4B5B9' : customColor }}>
            {categoryLetter && <h1 className='card-text-style' style={{ color: !enabled ? 'grey' : 'white' }}>{categoryLetter}. </h1>}
            <h1 className='card-text-style' style={{ color: !enabled ? 'grey' : 'white' }}>{name}</h1>
          </div>
        </div>
        {isChecked ? <img src={CheckIcon} style={{ width: 20, height: 20, marginLeft: 30, marginBottom: 20 }} /> : null}
        {hasYesNoSection && enabled ?
          renderYesNoSection(
            () => handleSavingCategory(categoryName, isChecked, hasAutoNext, subcategories_1, categoryName, customColor),
            () => handleNo(categoryName, customColor))
          : null
        }
      </div>
    )
  }

  return (
    <>
      <Sidebar activeMainCategory={activeMainCategory} />
      <div style={{ position: 'fixed', left: '25%', width: '100%', height: '100%', alignItems: 'start', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
        {renderHeader()}
        {
          category.subcategories.map(subcategory => {
            let name = ''
            if (subcategory.categoryLetter) name = subcategory.categoryLetter + '.' + subcategory.name
            else name = subcategory.name
            const isChecked = checked.find(item => item.answer == name)
            return renderActionCard(
              subcategory.categoryLetter,
              subcategory.name,
              subcategory.customColor,
              isChecked,
              subcategory.autoNext,
              subcategory.subcategories_1,
              subcategory.hasYesNo,
              subcategory.autoEnable
            )
          })
        }
      </div>
    </>
  )
}

export default CategoryScreen
