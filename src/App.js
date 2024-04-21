import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import HomeScreen from './screens/HomeScreen/HomeScreen';
import CategoryScreen from './screens/CategoryFlow/CategoryScreen';
import Subcategory1Screen from './screens/CategoryFlow/Subcategory1Screen';
import Subcategory2Screen from './screens/CategoryFlow/Subcategory2Screen';
import SharedCategoryScreen from './screens/CategoryFlow/SharedCategoryScreen';
import SharedCategory1Screen from './screens/CategoryFlow/SharedCategory1Screen';
import GenerateReport from './screens/GenerateReport/GenerateReport';

function App() {
  let logger = useSelector(store => store.store)
  console.log('logger -->', logger)

  return (
    <div id="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/category" exact element={<CategoryScreen />} />
          <Route path="/subcategory1" exact element={<Subcategory1Screen />} />
          <Route path="/subcategory2" exact element={<Subcategory2Screen />} />
          <Route path="/shared-category" exact element={<SharedCategoryScreen />} />
          <Route path="/shared-category1" exact element={<SharedCategory1Screen />} />
          <Route path="/generate-report" exact element={<GenerateReport />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
