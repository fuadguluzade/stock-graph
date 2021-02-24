import React from "react";
import SearchForm from "../components/SearchForm";

class Main extends React.Component {
    state = {
        search: ""
    }


    handleInputChange = e => {
        this.setState({ search: e.target.value })
    }

    render() {
        return (
            <SearchForm
                search={this.state.search}
                handleInputChange={this.handleInputChange}
            />
        )
    }
}

export default Main
