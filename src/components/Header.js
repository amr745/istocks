import {Link} from "react-router-dom"

function Header(props) {
    return <nav>
        <span><Link to="/">iStock</Link></span>
        <Link to="/stocks">Stocks</Link>
        <Link to="about">About</Link>
    </nav>
}

export default Header;