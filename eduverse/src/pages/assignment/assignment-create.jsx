import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useHistory to handle redirection
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "axios";

const AssignmentCreate = () => {
  const baseURL = "http://localhost:1400";
  const navigateTo = useNavigate(); // Access the history object for redirection

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const currentDate = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (deadline < currentDate) {
      alert("Deadline must be after the current date.");
      return;
    }

    if (!title || !description || !deadline || !selectedClass) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      // Send a POST request to create a new assignment
      const response = await axios.post(`${baseURL}/assignment/create`, {
        title,
        description,
        deadline,
        selectedClass,
      });

      // Check if the request was successful
      if (response.status === 201) {
        alert("Assignment created successfully");
        // Redirect back to the assignment list page
        navigateTo('/assignment')
      } else {
        alert("Failed to create the assignment");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while creating the assignment");
    }
  };

  return (
    <>
      <div style={{ padding: "5px 5px 2px 5px" }}>
        <Card className="bg-light w-100" style={{ height: "100%" }}>
          <Card.Body>
            <Card.Title>Create a new Assignment</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div style={{ padding: "5px 5px 2px 5px" }}>
        <Card className="bg-light w-100" style={{ height: "100%" }}>
          <Card.Body>
            <Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    Enter a title for the Assignment
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>
                <Row>
                  <Form.Group className="mb-3 col-md-6">
                    <Form.Label>Deadline</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Deadline"
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className=" col-md-6 mb-3">
                    <Form.Label>Select Class</Form.Label>
                    <Form.Select
                      aria-label="Select Class"
                      value={selectedClass}
                      onChange={(e) => setSelectedClass(e.target.value)}
                    >
                      <option value="">Select a class</option>
                      <option value="1">Class One</option>
                      <option value="2">Class Two</option>
                      <option value="3">Class Three</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default AssignmentCreate;
