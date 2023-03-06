import React from 'react'
import { useState } from 'react';

const Searchbox = () => {

  const [input, setInput] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
        <input
            className="outline-none border-none mr-2"
            type="search"
            name="search"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
    </form>
  )
}

export default Searchbox