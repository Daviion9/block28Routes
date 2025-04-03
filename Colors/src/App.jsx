
import './App.css'
import Home from "./Pages/Home.jsx";
import Black from "./Pages/Black";
import Silver from "./Pages/Silver";
import Grey from "./Pages/Grey";
import FTE from "./Pages/FTE";
import ExtraCredit from "./Pages/ExtraCredit";
import { Routes, Route, Link } from 'react-router';


function App() {


  return (
    <>

    <div id = "Navbar">
    <Link to="/">Home</Link>
    <Link to="/Black">Black</Link>
    <Link to="/Silver">Silver</Link>
    <Link to="/Grey">Grey</Link>
    <Link to="/ExtraCredit/:color">Grey</Link>
    <Link to="/FTE">FTE</Link>
    

    </div>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Black" element={<Black />} />
        <Route path="/Silver" element={<Silver />} />
        <Route path="/Grey" element={<Grey />} />
        <Route path="/FTE" element={<FTE />} />
        {/*Personal thing i'm working on*/}
        <Route path="/ExtraCredit/:color" element={<ExtraCredit/>}/>
        
</Routes>
    </>
  )
}

export default App
