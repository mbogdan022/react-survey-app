import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [activeMainCategory, setActiveMainCategory] = useState('');
  const [activeSubcategory, setActiveSubcategory] = useState('');

  console.log('activeMainCategory: ', activeMainCategory)
  console.log('activeSubcategory: ', activeSubcategory)

  const handleSelectCategory = (categoryName) => {
    setActiveMainCategory(categoryName);
  };

  const firstMainCategory = [
    {
      categoryLetter: 'A',
      name: 'Actions',
      customColor: 'black',
      subcategories: [
        {
          categoryLetter: 'A-1',
          name: 'Conflict Detection',
          customColor: 'black',
        },
        {
          categoryLetter: 'A-3',
          name: 'Judge/Plan',
          customColor: 'black',
        },
        {
          categoryLetter: 'A-4',
          name: 'Execution',
          customColor: 'black',
        },
        {
          categoryLetter: 'A-5',
          name: 'Compliance with rules',
          customColor: 'black',
        },
      ]
    },
    {
      categoryLetter: null,
      name: 'Personal and Interpersonal context',
      customColor: 'black'
    },
  ]

  const secondMainCategory = [
    {
      categoryLetter: 'B-1',
      name: 'Pilot Actions',
      customColor: 'black'
    },
    {
      categoryLetter: 'B-2',
      name: `Pilot/ATCO Communications`,
      customColor: 'black'
    },
  ]

  const renderActionCard = (categoryLetter, name, customColor, onCardPressed) => {
    return (
      <div className='main-container-card' onClick={() => onCardPressed()}>
        <div className='inner-container-card'>
          {categoryLetter && <h1 className='card-text-style' style={{ color: customColor || 'black' }}>{categoryLetter}. </h1>}
          <h1 className='card-text-style' style={{ color: customColor || 'black' }}>{name}</h1>
        </div>
      </div>
    )
  }

  const renderTestCards = () => {
    if (activeMainCategory === 'Operator Involvement') {
      if (activeSubcategory === 'Actions') {
        const foundedCatgeory = firstMainCategory.find(category => category.name === 'Actions')
        return foundedCatgeory.subcategories.map(category => {
          return renderActionCard(category.categoryLetter, category.name, category.customColor, () => setActiveSubcategory(category.name))
        })  
      }
      return firstMainCategory.map(category => {
        return renderActionCard(category.categoryLetter, category.name, category.customColor, () => setActiveSubcategory(category.name))
      })
    } else if (activeMainCategory === 'Pilot Involvement') {
      return secondMainCategory.map(category => {
        return renderActionCard(category.categoryLetter, category.name, category.customColor, () => console.log('clicked'))
      })
    }
  }

  return (
    <div id="App">
      <Sidebar activeMainCategory={activeMainCategory} onSelectCategory={handleSelectCategory} />
      <div style={{ position: 'fixed', left: '25%', height: '100%', alignItems: 'start', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
        {renderTestCards()}
      </div>
    </div>
  );
}

export default App;
