import React from "react";
import "../styles/DataBody.css";

function DataBody({ users }) {
    function formDate(date) {
        const dataArray = date.split("_");
        const year = dataArray[0];
        const month = dataArray[1]
        const dayArray = dayArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("_");
        return formattedDate;
    }

    return (
        <tbody>
            {users[0] !== undefined && users[0].name !== undefined}
      </tbody>  
    )
}