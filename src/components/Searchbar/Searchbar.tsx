import { useState } from "react";
import axios from "axios";
import "./Searchbar.scss";
import SearchresultsList from "../searchresultlist/SearchResultList";

type SearchQuery = string;

type SearchbarProps = {
  setResults: React.Dispatch<React.SetStateAction<any[]>>;
};

const Searchbar: React.FC<SearchbarProps> = ({ setResults }) => {
  const [searchQuery, setSearchQuery] = useState<SearchQuery>("");
  const [results, setResultsLocal] = useState<any[]>([]);

  //Fetch the product data
  const getData = async (value: SearchQuery) => {
    try {
      const response = await axios.get("http://localhost:3000/api/products/");
      const products = response.data;

      //Filtering and checking if anything matches with the products listed on the database
      const filteredResults = products.filter(
        (product: { productName: string }) => {
          return (
            typeof value === "string" && //Check if value is a string
            value &&
            product.productName &&
            product.productName.toLowerCase().includes(value.toLowerCase())
          );
        }
      );
      setResultsLocal(filteredResults);
      setResults(filteredResults);
      return filteredResults;
    } catch (error) {
      console.log(error);
    }
  };

  //Setting the search to the value
  const handleChange = (value: any) => {
    setSearchQuery(value);
    getData(value);
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Sök destination..."
          value={searchQuery}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className="search-results">
        <SearchresultsList results={results} />
      </div>
    </div>
  );
};

export default Searchbar;
