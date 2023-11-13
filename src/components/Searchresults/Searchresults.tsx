import React from 'react'
import './Searchresults.scss'

type ResultProps = {
    result : any;
}

const Searchresults: React.FC<ResultProps> = ({ result }) => {
  return (
    <div className='result-ind'>{result.productName}</div>
  )
}

export default Searchresults