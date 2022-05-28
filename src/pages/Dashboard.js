import { Link } from "react-router-dom";

export default function Dashboard(props) {

    function loaded() {
        return (
            <div className="dashboard">
                <table>
                    <tr>
                        <th>Company Name</th>
                        <th>Price</th>
                        <th>Change</th>
                    </tr>
                    {props.stocks.map(({ name, symbol, lastPrice, change}) => (
                        <tr>
                            <td> 
                                <Link key={symbol} to={`/stocks/${symbol}`}>
                                     {name}
                                </Link>
                            </td>
                            <td>{lastPrice}</td>
                            <td>{change}</td>
                        </tr>
                    ))}
                </table>
            </div>
        );
    }

    function loading() {
        return <h1>loading ...</h1>
    }

    return props ? loaded() : loading()
}