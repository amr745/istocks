import {Link} from "react-router-dom"

function Header(props) {
    return <nav>
        <span><Link to="/">iStocks</Link></span>
        <Link to="/stocks">Home</Link>
        <Link to="about">About</Link>
    </nav>
}

export default Header;