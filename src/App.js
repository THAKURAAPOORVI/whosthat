
import './App.css';
import Navbar from './Navbar';
import {Route, Routes,Link} from 'react-router-dom'; 
import About from './About';
import Home from './Home';
import Faq from './Faq';
import Privacy from './Privacy';
import Contact from './Contact';

function App() {
  return (
    <>
    <Navbar/>

<Routes>
<Route path="/" element={<Home></Home>}/>
<Route path="/About" element={<About></About>}/>

<Route path="/Privacy" element={<Privacy></Privacy>}/>
<Route path="/Contact" element={<Contact></Contact>}/>

</Routes>
    </>
    );
}

export default App;
