import { Link } from 'react-router';

function Navbar() {
  return <ul>
    <Link to="/">Home</Link>
    <Link to="/Black">Black</Link>
    <Link to="/Silver">Silver</Link>
    <Link to="/Grey">Grey</Link>
    <Link to="/ExtraCredit">XtraCredit</Link>
    <Link to="/FTE">FTE</Link>
    
  </ul>;
}

export default Navbar;