import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Card from './components/Card/Card'

function App() {
  const [activeMainCategory, setActiveMainCategory] = useState('');

  const handleSelectCategory = (categoryName) => {
    setActiveMainCategory(categoryName);
  };

  const firstMainCategory = [
    {
      categoryLetter: 'A',
      name: 'Actions',
      customColor: 'black'
    },
    {
      categoryLetter: null,
      name: 'Personal and Interpersonal context',
      customColor: 'black'
    },
  ]

  const renderTestCards = () => {
    // if (activeMainCategory === 'Operator Involvement') {
      firstMainCategory.map(category => {
        return <Card
          categoryLetter={category.categoryLetter}
          name={category.name}
          onCardPressed={() => console.log('yolo')}
          customColor={category.customColor}
        />
      })
    // }
  }

  return (
    <div id="App">
      <Sidebar activeMainCategory={activeMainCategory} onSelectCategory={handleSelectCategory} />
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: '25%' }}>
        {renderTestCards()}
      </div>
    </div>
  );
}

export default App;
