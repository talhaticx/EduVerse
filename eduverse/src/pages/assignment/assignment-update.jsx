import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AssignmentUpdate = () => {
  const { id } = useParams(); // Get assignment ID from URL
  const baseURL = "http://localhost:1400";
  const [assignment, setAssignment] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  useEffect(() => {
    // Fetch assignment details by ID when the component mounts
    axios
      .get(`${baseURL}/assignment/${id}`)
      .then((response) => {
        const assignmentData = response.data;
        setAssignment(assignmentData);
        setTitle(assignmentData.title);
        setDescription(assignmentData.description);
        setDeadline(assignmentData.deadline);
        setSelectedClass(assignmentData.selectedClass);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // Handle form submission to update the assignment
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a PUT request to update the assignment with new data
    const updatedAssignment = {
      title,
      description,
      deadline,
      selectedClass,
    };

    axios
      .put(`${baseURL}/assignment/${id}`, updatedAssignment)
      .then((response) => {
        console.log("Assignment updated successfully");
        // Redirect to the assignment page or do something else on success
      })
      .catch((error) => {
        console.log(error);
        // Handle errors if the update request fails
      });
  };

  return (
    <div>
      <h2>Update Assignment</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Deadline</Form.Label>
          <Form.Control
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Select Class</Form.Label>
          <Form.Control
            as="select"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="">Select a class</option>
            <option value="1">Class One</option>
            <option value="2">Class Two</option>
            <option value="3">Class Three</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default AssignmentUpdate;
