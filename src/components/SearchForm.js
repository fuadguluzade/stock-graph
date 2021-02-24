import React from "react";
import "./SearchForm.css";

function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="stock">Enter stock symbol:</label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="stock"
                    type="text"
                    className="form-control"
                    placeholder="stock symbol"
                    id="stock"
                />
                <button onClick={props.handleFormSubmit} type="submit" className="btn btn-success">Search</button>
            </div>
        </form>
    )
}

export default SearchForm