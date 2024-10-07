import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import StarShips from './screens/StarShips'
import Pilote from './screens/Pilote'
import Header from './components/DS/Header'
import Pilotes from './screens/Pilotes'
import Planets from './screens/Planets'


function App() {

  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<StarShips />} />
          <Route path='/pilote/:id' element={<Pilote />} />
          <Route path='/pilote' element={<Pilotes />} />
          <Route path='/planets' element={<Planets />} />
        </Routes>
      </Router>
    </div>

  )
}

export default App
