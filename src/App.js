// import './App.css';
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import { Route, Routes } from 'react-router-dom';
import ReservationPage from './components/ReservationPage.jsx'
import Confirmation from './components/Confirmation.jsx';

function App() {
  return (<>
    {/* <Header/> */}
    <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/reservation' element={<ReservationPage/>}/>
    {/* <Route path='/confirm' element={<Confirmation/>}/> */}
s    </Routes>
    </>);
}

export default App;
