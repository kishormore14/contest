import React, { useEffect, useState } from "react";
// import axios from "axios";
const Top = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://api.coinlore.net/api/tickers/").then((result) => {
      result.json().then((rest) => {
        setdata(rest.data);
      });
    });
  }, []);
  // console.log(data);
  var k;
  k = data.filter((val) => val.rank < 11);
  console.log(k);
  return (
    <div>
      <h1 style={{ marginLeft: "50%" }}>Top 10 Global Crypto Coins</h1>
      <div>
        {k.map((Data) => (
          <div
            style={{
              border: "2px solid black",
              display: "inline-block",
              margin: "5px",
              padding: "15px",
            }}
          >
            <h4>{Data.rank}</h4>
            <h2>
              {Data.name}({Data.symbol})
            </h2>
            <h4>Price:{Data.price_usd}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top;
