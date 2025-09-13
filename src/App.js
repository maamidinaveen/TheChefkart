import {Routes, Route} from 'react-router-dom'

import Home from './components/Home'

import IngredientModal from './components/IngredientModal'


const App = () => {
  return (
    <Routes>
      <Route path ='/' element = {<Home />} />
      <Route path='/ingredients' element = {<IngredientModal />} />
    </Routes>
  )
}

export default App

