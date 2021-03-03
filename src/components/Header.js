import React, { Component } from 'react';
import "../styles/Header.css";

export default class Header extends Component {
    render() {
        return(
            <div>
                <h1>Employee Directory</h1>
                <p>Click on the carrots to filter by heading or search box to narrow your results</p>
            </div>
        )
    }
}