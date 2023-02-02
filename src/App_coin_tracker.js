import { useState, useEffect } from 'react';
//Authorization: <api-key>https://api.coinpaprika.com/v1/tickers</api-key>;

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]); // defaul 값 지정해주기!!

    useEffect(() => {
        fetch('https://api.coinpaprika.com/v1/tickers')
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <select>
                    {coins.map((coin) => (
                        <option>
                            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
}
export default App;
