import { Route, Routes } from 'react-router-dom';
import './scss/styles.scss';
import Authorization from './components/Authorization';
import Home from './components/Home';

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='/*' element={<Authorization />}>
          <Route path='home' element={<Home />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
