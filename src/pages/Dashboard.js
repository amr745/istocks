import { Link } from "react-router-dom";
// import { useState, useEffect } from 'react'

export default function Dashboard(props) {
    // const [stock, setStock] = useState(null)

    // async function getStock(){
    //     const data = await (await fetch(stock)).json()
    //     setStock(data)
    // }

    // useEffect(() => {
    //     getStock();
    // });
    // console.log("stocks work!", stock)

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


// import {Link} from "react-router-dom"

// function Dashboard(props) {
//     return props.stocks.map((stock) => <Link to={`/stocks/${stock.symbol}`}><h3>{stock.name}</h3>
//     </Link>)
// }

// export default Dashboard;