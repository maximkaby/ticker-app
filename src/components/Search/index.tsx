import React from 'react';
import AsyncSelect from 'react-select/async';
import FormatOptionLabel from "../FormatOptionLabel";
import { getTickers } from "helpers/api";
import { StockInfo } from "types/common";
import Control from "components/Control";

interface SearchProps {
  changeStock(stock: StockInfo | null): void
}

const Search: React.FC<SearchProps> = ({ changeStock }) => {
  const loadOptions = (inputValue: any, callback: any) => {
    getTickers(inputValue).then(data => {
      const results: StockInfo[] = (data.results || []).map((item: any) => ({
        value: item.ticker,
        label: item.name,
        ...item
      }))
      callback(results);
    });
  };

  const handleChange = (selectedOption: StockInfo | null) => {
    changeStock(selectedOption);
  };

  return (
    <div className="search">
      <AsyncSelect
        cacheOptions
        classNamePrefix="stock-select"
        loadOptions={loadOptions}
        placeholder=""
        defaultOptions
        onChange={handleChange}
        components={{ Control, Option: FormatOptionLabel }}
      />
    </div>
  );
}

export default Search;