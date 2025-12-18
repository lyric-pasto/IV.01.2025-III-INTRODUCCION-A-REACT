//--Jhoseph Taype Huarocc--//
//ejecute npm run dev para iniciar el proyecto y en otra terminal npm run backend para iniciar el backend o el API//
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { List } from './pages/List'
import { Create } from './pages/Create'
import { ListCategory } from './pages/ListCategory.jsx'
import { CreateCategory } from './pages/CreateCategory.jsx'


import './App.css'

function App() {
  // routing
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/list' element={<List/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path="/edit/:id" element={<Create />} />
          <Route path="/categories" element={<ListCategory />} />
          <Route path="/categories/create" element={<CreateCategory />} />
          <Route path="/categories/edit/:id" element={<CreateCategory />} />


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
