import React from "react";


function DataBody({ users }) {
    function formatDate(date) {
        console.log( date)
        const dataArray = date.split("-");
        console.log(dataArray)
        const year = dataArray[0];
        const month = dataArray[1]
        const dayArray = dataArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("_");
        return formattedDate;
    }

    return (
        <tbody>
            {users[0] !== undefined && users[0].name !== undefined ?(
             users.map(({ login, name, picture, phone, email, dob}) => {
             return (
            <tr key={login.id}>
                
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
          })
        )   :  (
            <></>
        )}
      </tbody>
    );
}


export default DataBody;