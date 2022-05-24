import {Link} from "react-router-dom"

function Dashboard(props) {
    return props.stocks.map((stock) => <Link to={`/stock/${stock.symbol}`}><h3>{stock.name}</h3>
    </Link>)
}

export default Dashboard;