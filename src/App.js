import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((respone) => respone.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> :
        <select>
        {coins.map((coin) =>  (
          <option>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
        ))}
      </select>
      }
      <hr />
      <input placeholder="inset coin" />
      
    </div>
  );
}

export default App;
