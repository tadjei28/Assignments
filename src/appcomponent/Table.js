import React from 'react'

 function Table(props) {
    return (
        <table border="2px">
        <thead>
          <td>Fullname</td>
          <td>Username</td>
          <td>Email</td>
        </thead>
        <tbody>
          {props.data.map((data, key) => (
            <tr key={key}>
              <td>{data.fullname}</td>
              <td>{data.username}</td>
              <td>{data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    )
}

export default Table