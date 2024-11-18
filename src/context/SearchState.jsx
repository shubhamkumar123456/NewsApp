import React, { useState } from 'react'
import SearchContext from './SearchContext'

const SearchState = (props) => {
    const [search, setsearch] = useState("");
    console.log(search)
  return (
    <SearchContext.Provider value={{search, setsearch}}>
        {props.children}
    </SearchContext.Provider>
  )
}

export default SearchState
