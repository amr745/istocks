function Stock(props) {

    const symbol = props.match.params.symbol

    const stock = props.stocks.filter((stock) => stock.symbol === symbol)[0]
    
    return <div>
        <h1>{stock.name}</h1>
    </div>
}

export default Stock;