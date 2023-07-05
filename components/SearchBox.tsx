import React from 'react'
import {Search} from "react-feather"
type SearchBoxProps = {
    value : string ; 
    setValue : React.Dispatch<React.SetStateAction<string>> ;
    className? : string 
}

const SearchBox = (props : SearchBoxProps) => {
  const {
    value , 
    setValue , 
    className , 

  } = props


 
  return  (
    <div className='relative'>
        <input 
            className={`${className}`}
            placeholder="search"
            type="text" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
        />

        <Search className='absolute top-5 left-2 stroke-neutral-500 w-5 cursor-pointer' /> 
    </div>
  )
}

export default SearchBox