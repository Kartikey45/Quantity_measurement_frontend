import React, { useEffect, useState } from "react";
import "./GetHistory.scss";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import UnitService from "../../services/UnitService";

export default function GetHistory() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    UnitService.getConversions()
      .then((data) => {
        console.log(data.data.data);
        setNotes(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const Notes = notes.map((note) => (
    <tr>
      <td>{note.id}</td>
      <td>{note.value}</td>
      <td>{note.operation}</td>
      <td>{note.result}</td>
    </tr>
  ));

  return (
    <div className="historyOuterdiv">
      <div className="historyParentDiv">
        <div className="navBar">
          <Link to="/dashboard">
            <h6 style={{ color: "black" }}>Back</h6>
          </Link>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Values</th>
                <th>Operations</th>
                <th>Results</th>
              </tr>
            </thead>
            <tbody>{Notes}</tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
