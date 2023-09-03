import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Assignment = () => {
  const baseURL = "http://localhost:1400";
  const [assignments, setAssignments] = useState([]);

  // Function to delete an assignment
  const handleDelete = (id) => {
    // Ask for confirmation before deleting
    const confirmed = window.confirm("Are you sure you want to delete this assignment?");
    if (confirmed) {
      // Send a DELETE request to the server
      axios
        .delete(`${baseURL}/assignment/${id}`)
        .then((response) => {
          // Remove the deleted assignment from the state
          setAssignments((prevAssignments) => prevAssignments.filter((assignment) => assignment._id !== id));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // Fetch assignments when the component mounts
  useEffect(() => {
    axios
      .get(`${baseURL}/assignment/`)
      .then((response) => {
        setAssignments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div style={{ padding: "5px 5px 2px 5px" }}>
        <Card className="bg-light w-100" style={{ height: "100%" }}>
          <Card.Body>
            <Card.Title>Manage and Create Assignments Easily</Card.Title>
            <NavLink to="/assignment/create">
              <Card.Link>
                <button className="btn btn-primary mt-2">Add New</button>
              </Card.Link>
            </NavLink>
          </Card.Body>
        </Card>
      </div>
      <div style={{ padding: "2px 5px" }}>
        <Card className="bg-light w-100" style={{ height: "100%" }}>
          <Card.Body>
            <Table hover bordered responsive>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th style={{ display: "flex", justifyContent: "center" }}>
                    Deadline
                  </th>
                  <th style={{ width: "50px" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {assignments.map((item) => {
                  const isoDateString = item.deadline;
                  const date = new Date(isoDateString);
                  const formattedDate = date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  });
                  return (
                    <tr key={item._id}>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>{formattedDate}</td>
                      <td>
                        <button
                          className="btn btn-danger text-light align-center mx-2"
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Assignment;
