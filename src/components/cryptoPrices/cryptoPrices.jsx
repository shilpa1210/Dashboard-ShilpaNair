import React, { useEffect, useState } from "react";
import "./cryptoPrices.css";

const CryptoPrices = () => {
  const [cryptoPrices, setCryptoPrices] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json",
      );
      const data = await response.json();
      setCryptoPrices(data.bpi);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="crypto-container">
      {Object.entries(cryptoPrices).map(([currency, { rate }]) => (
        <div key={currency} className="crypto-card">
          <h2>{currency}</h2>
          <p>{rate}</p>
        </div>
      ))}
    </div>
  );
};

export default CryptoPrices;