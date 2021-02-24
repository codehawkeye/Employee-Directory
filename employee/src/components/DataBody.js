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
             user.map(({ login, name, picture, phone, email, }))
             return ( 
            <tr key={ligin.uuid}>
                <td data-th="Image" className="align-middle">
                    <img
                        src={picture.medium}
                        alt={"profile image for " + name.first + name.last}
                        className="img-responsive"
                    />
                </td>
                <td data-th="Name" className="name-cell align-middle">
                    {name.first} {name.last}
                </td>
                <td data-th="Phone" className="align-middle">
                    {phone}
                </td>
                <td data-th="Email" className="align-middle">
                    <a href={"mailto:" + email} target="_bla">
                        {email}
                    </a>
                </td>
                <td data-th="DOB" className="align-middle">
                    {formatDate(dob.date)}
                </td>    
            </tr>
            
         );
      </tbody>  
    )
}