import React from "react";
import "./Searchresults.scss";
import { Link } from "react-router-dom";

type ResultProps = {
  result: { productName: string; _id: string };
};

const Searchresults: React.FC<ResultProps> = ({ result }) => {
 
  return (
    //Link to productdetails for that id
    <Link to={`/productDetails/${result._id}`} className="result-ind"> 
      {result.productName}
    </Link>
  );
};

export default Searchresults;
