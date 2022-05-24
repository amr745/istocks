import {Link} from "react-router-dom"

function Header(props) {
    return <nav>
        <Link to="/">iStock</Link>
        <Link to="/stocks">Stocks</Link>
        <Link to="about">About</Link>
    </nav>
}

export default Header;