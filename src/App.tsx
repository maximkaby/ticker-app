import React, { useState } from 'react';
import StockCompany from "./components/StockCompany";
import Search from "./components/Search";
import { StockInfo } from "types/common";
import './App.scss';

function App() {
  const initialStock: StockInfo = {
    value: '',
    label: '',
    ticker: '',
    name: '',
  };
  const [stock, setStock] = useState<StockInfo>(initialStock);

  const changeStock = (newStock: StockInfo | null) => {
    setStock(newStock || initialStock);
  }

  return (
    <div className="App">
      <div className="container">
        <Search changeStock={changeStock}></Search>
        <StockCompany stock={stock}/>
      </div>
    </div>
  );
}

export default App;
