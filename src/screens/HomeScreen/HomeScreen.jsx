import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../../App.css';
import mainCategories from '../../utils/mainCategories'

import { useDispatch } from 'react-redux'
import { saveQuestionAndAnswer, removeAnswer } from '../../redux/actions'

import Sidebar from '../../components/Sidebar/Sidebar'

import CheckIcon from '../../assets/checkedIcon.png'

const HomeScreen = () => {
  const navigate = useNavigate();

  const activeMainCategory = useSelector(store => store.store.selectedMainCategory)
  const checked = useSelector(store => store.store.questionsAndAnswers)

  const renderActionCard = (categoryLetter, name, customColor, onCardPressed, isChecked) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        <div className='main-container-card' style={{ backgroundColor: customColor || 'white' }} onClick={() => onCardPressed()}>
          <div className='inner-container-card' style={{ backgroundColor: customColor || 'white' }}>
            {categoryLetter && <h1 className='card-text-style' style={{ color: customColor ? 'white' : 'black' }}>{categoryLetter}. </h1>}
            <h1 className='card-text-style' style={{ color: customColor ? 'white' : 'black' }}>{name}</h1>
          </div>
        </div>
        {isChecked ? <img src={CheckIcon} style={{ width: 20, height: 20, marginLeft: 30, marginBottom: 20 }} /> : null}
      </div>
    )
  }

  const dispatch = useDispatch()

  const handleBusinessLogic = () => {
    switch (activeMainCategory) {

      case 'Operator Involvement':
        return mainCategories[0].categories.map(category => {
          return renderActionCard(category.categoryLetter, category.name, category.customColor, () => navigate('/category', { state: { category } }))
        })

      case 'Pilot Involvement':
        return mainCategories[1].categories.map(category => {
          const isChecked = checked.find(item => item.answer == category.name)
          return renderActionCard(category.categoryLetter, category.name, category.customColor, () => isChecked ? dispatch(removeAnswer(category.name)) : dispatch(saveQuestionAndAnswer('Pilot Involvement', category.name, category.customColor)), isChecked)
        })

      case 'Other people Involvement':
        return mainCategories[2].categories.map(category => {
          const isChecked = checked.find(item => item.answer == category.name)
          return renderActionCard(category.categoryLetter, category.name, category.customColor, () => isChecked ? dispatch(removeAnswer(category.name)) : dispatch(saveQuestionAndAnswer('Other people Involvement', category.name, category.customColor)), isChecked)
        })

      case 'Operations':
        return mainCategories[3].categories.map(category => {
          const isChecked = checked.find(item => item.answer == category.name)
          return renderActionCard(category.categoryLetter, category.name, category.customColor, () => isChecked ? dispatch(removeAnswer(category.name)) : dispatch(saveQuestionAndAnswer('Operations', category.name, category.customColor)), isChecked)
        })

      case 'Traffic':
        return mainCategories[4].categories.map(category => {
          const isChecked = checked.find(item => item.answer == category.name)
          return renderActionCard(category.categoryLetter, category.name, category.customColor, () => isChecked ? dispatch(removeAnswer(category.name)) : dispatch(saveQuestionAndAnswer('Traffic', category.name, category.customColor)), isChecked)
        })

      case 'Organizational Environment':
        return mainCategories[5].categories.map(category => {
          const isChecked = checked.find(item => item.answer == category.name)
          return renderActionCard(category.categoryLetter, category.name, category.customColor, () => isChecked ? dispatch(removeAnswer(category.name)) : dispatch(saveQuestionAndAnswer('Organizational Environment', category.name, category.customColor)), isChecked)
        })

      case 'Technical Systems':
        return mainCategories[6].categories.map(category => {
          const isChecked = checked.find(item => item.answer == category.name)
          return renderActionCard(category.categoryLetter, category.name, category.customColor, () => isChecked ? dispatch(removeAnswer(category.name)) : dispatch(saveQuestionAndAnswer('Technical Systems', category.name, category.customColor)), isChecked)
        })

      case 'Abnormal Situations':
        return mainCategories[7].categories.map(category => {
          const isChecked = checked.find(item => item.answer == category.name)
          return renderActionCard(category.categoryLetter, category.name, category.customColor, () => isChecked ? dispatch(removeAnswer(category.name)) : dispatch(saveQuestionAndAnswer('Abnormal Situations', category.name, category.customColor)), isChecked)
        })

      default:
        return null
    }
  }

  return (
    <div>
      <Sidebar activeMainCategory={activeMainCategory} />
      <div style={{ position: 'fixed', left: '25%', width: '100%', height: '100%', alignItems: 'start', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
        {handleBusinessLogic()}
      </div>
    </div>

  )
}

export default HomeScreen
