import React from "react";
import Container from "./Container";
import parseJSON from 'date-fns/parseJSON'

function Table({ rows }) {

  return (
    <Container>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col' onClick>Image</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone Number</th>
            <th scope='col'>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ picture, name:{ first, last}, email, phone, dob }) => (
            <tr>
              <td><img src={picture.thumbnail}></img></td>
              <td>{first + " " + last}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{dob.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default Table;
