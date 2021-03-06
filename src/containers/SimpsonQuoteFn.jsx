import React, { useState } from 'react';
import Load from '../components/quote/Load';
import Quote from '../components/quote/Quote';
import { fetchQuote } from '../services/simpsonApi';

const SimpsonQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const quote = await fetchQuote();
    setQuote(quote);
    setLoading(false);
  };
  
  return (
    <>
      <Load onClick={handleClick} />
      {loading ? (
        <h1> Now Loading... </h1>
      ) : (
        quote && (
          <Quote 
            text={quote.text} 
            character={quote.character} 
            image={quote.image} 
          />
        )
      )}
    </>
  );
};

export default SimpsonQuote;
