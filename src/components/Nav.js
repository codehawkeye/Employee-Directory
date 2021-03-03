import React from 'react';
import SearchBox from "./SearchBox";
function Nav({ handleSearchChange }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="search-area col-4">
                <SearchBox handleSearchChange={handleSearchChange} />
            </div>
        </nav>
    );
}
export default Nav;