import React from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";

class Main extends React.Component {
    state = {
        search: ""
    }


    handleInputChange = e => {
        this.setState({ search: e.target.value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        API.getData(this.state.search)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <SearchForm
                search={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
            />
        )
    }
}

export default Main
