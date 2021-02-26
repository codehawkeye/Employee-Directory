import React, { Component } from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";
import API from "../utils/API";
import "../styles/DataArea.css";

export default class DataArea extends Component {


    state = {
        users: [{}],
        order: " descended",
        filteredUsers: [{}]
    }
    // heading for the result page. this is the name of each 
    headings = [
        {name: "Image", width: "10%" },
        {name: "Name", width: "10%" },
        {name: "Phone", width: "20%" },
        {name: "Email", width: "20%" },
        {name: "DOB", width: "10%" }
    ]

// set order of State in heading
    HandleSort = heading => {
        if (this.state.order === "descend") {
            this.setState({
               order: "ascend"
           }) 
        } else {
            this.setState({
                order: "desend"
            })
        }

        const conpareFnc = (a, b) => {
            if (this.state.order === "ascend") {
                //  account for missing values
                if (a[heading] === undefined) {
                    return -1;
                } else if (b[heading] === undefined) {
                    return -1;
                }

                // numerically
                else if (heading === "name") {
                    return b[heading].first.localeCompare(a[heading]);
                } else {
                    return b[heading] - a[heading];
                }

            }
        }
        const sortedUsers = this.state.filteredUsers.sort(this.componentDidMount);
        this.setState({ filteredUsers: sortedUsers });
    }

    handleSearchChange = event => {
        console.log(event.target.value);
        const filter = event.target.value;
        const filteredList = this.state.users.filter(item => {
            // merg data together, then see if user is an
            let values = Object.values(item)
                .join("")
                .toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ filteredUsers: filteredList });
    }

    componentDidMount() {
        API.getUsers().then(results => {
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
    }

    render() {
      return (
        <>
            <Nav handleSearchChange={this.handleSearchChange}/>
            <div className="data-area">
                <DataTable
                    headings={this.heading}
                    users={this.state.filteredUsers}
                    handleSort={this.handleSort}
                />
            </div>
        </>
        );
    }

}

