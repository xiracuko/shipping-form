import { Route, Routes } from 'react-router-dom';
import './scss/styles.scss';

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='/*'>
          <Route path='home' />
        </Route>
      </Routes>
    </div>
  )
}

export default App
