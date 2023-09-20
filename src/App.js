import Teacher from './components/teacher/teacher'
import Students from './components/students/students'
import Layaout from './components/layaout/layaout'
import Listcreat from './components/listcreat/Listcreat'
import Details from './components/details/details'
import Edit from './components/edit/Edit'
import Listcreatpost from './components/listcreatpost/Listcreatpost'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layaout/>}></Route>
        <Route path='/teacher' element={<Teacher />}></Route>
        <Route path='/students' element={<Students />}></Route>
        <Route path='/listcreat' element={<Listcreat/>}></Route>
        <Route path='/listcreatpost' element={<Listcreatpost/>}></Route>
        <Route path='/details/:listid' element={<Details/>}></Route>
        <Route path='/edit/:listid' element={<Edit/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
