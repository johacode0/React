import React, { Component } from 'react'

export class SearchUsers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: ''
        }
    }

    handleForm = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    searchUsers = (e) => {
        e.preventDefault()
        this.props.getUserSearch(this.state.search)
    }

    render() {
        const { search } = this.state
        return (

            <form onSubmit={this.searchUsers}>
                <div className="row">
                    <div className="col-md-11 form-group">
                        <input value={search} onChange={this.handleForm} placeholder="Search Users" id="search" type="text" className="form-control" />
                    </div>
                    <button className="col-md-1  btn btn-danger btn-block">Search</button>
                </div>
            </form>
        )
    }
}

export default SearchUsers