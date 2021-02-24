import React from "react";
import "./style.css";

function SearchForm({ handleFormSubmit, handleInputChange, value }) {
  return (
    <form>
      <div className='form-group'>
        <input
          onChange={handleInputChange}
          value={value}
          name='search'
          type='text'
          className='form-control'
          placeholder='Search'
          id='search'
        />
        <br />
        <button onClick={handleFormSubmit} className='btn btn-primary'>
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
