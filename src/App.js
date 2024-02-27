import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Depart from './components/Depart';
import Form from './components/Form';
import Placem from './components/Placem';
import Training from './components/Training';
import Candidates from './components/Candidates';
import Pl from './components/Pl';
import Drive from './components/Drive';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/nav' element={<Nav/>}/>
    <Route path='/side' element={<Sidebar/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/card' element={<Cards/>}/>
    <Route path='/foot' element={<Footer/>}/>
    <Route path='/dep' element={<Depart/>}/>
    <Route path='/form' element={<Form/>}/>
    <Route path='/placem' element={<Placem/>}/>
    <Route path='tr' element={<Training/>}/>
    <Route path='can' element={<Candidates/>}/>
    <Route path='/pl' element={<Pl/>}/>
    <Route path='/drive' element={<Drive/>}/>
    
   </Routes>
   </BrowserRouter>
  );
}

export default App;
