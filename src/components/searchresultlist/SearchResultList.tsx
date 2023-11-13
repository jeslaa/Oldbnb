import React from "react";
import "./SearchResultList.scss";
import Searchresults from "../Searchresults/Searchresults";

type SearchResultList = {
  productName: string;
  _id: string;
};
type SearchResultsProps = {
  results: SearchResultList[];
};

const SearchresultsList: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className="results-list">
  {results.map((result, index) => (
    <Searchresults result={result} key={index} />
  ))}
</div>

  );
};

export default SearchresultsList;
