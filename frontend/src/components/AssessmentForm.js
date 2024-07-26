import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import "./styles/assessmentform.css";
import { URL } from "../url";
function AssessmentPage() {
  const [assessments, setAssessments] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios
      .get(`${URL}/api/assessments`)
      .then((response) => setAssessments(response.data))
      .catch((error) => console.error("Error fetching assessments:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const assessment = { title, description, dueDate };

    if (editId) {
      axios
        .put(`${URL}/api/assessments/${editId}`, assessment)
        .then((response) => {
          setAssessments(
            assessments.map((a) => (a._id === editId ? response.data : a))
          );
          setEditId(null);
        })
        .catch((error) => console.error("Error updating assessment:", error));
    } else {
      axios
        .post(`${URL}/api/assessments`, assessment)
        .then((response) => setAssessments([...assessments, response.data]))
        .catch((error) => console.error("Error adding assessment:", error));
    }

    setTitle("");
    setDescription("");
    setDueDate("");
  };

  const handleDelete = (id) => {
    axios
      .delete(`${URL}/api/assessments/${id}`)
      .then(() => setAssessments(assessments.filter((a) => a._id !== id)))
      .catch((error) => console.error("Error deleting assessment:", error));
  };

  const handleEdit = (assessment) => {
    setTitle(assessment.title);
    setDescription(assessment.description);
    setDueDate(assessment.dueDate.split("T")[0]);
    setEditId(assessment._id);
  };

  return (
    <div>
      <Header />
      <h2 className="login-title">Assessments</h2>
      <form onSubmit={handleSubmit} className="assessment-section">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
        <button type="submit" className="get-started">
          {editId ? "Update" : "Add"} Assessment
        </button>
      </form>
      <ul className="assessment-card">
        {assessments.map((assessment) => (
          <li key={assessment._id}>
            <h3>{assessment.title}</h3>
            <p>{assessment.description}</p>
            <p>Due Date: {new Date(assessment.dueDate).toLocaleDateString()}</p>
            <button onClick={() => handleEdit(assessment)}>Edit</button>
            <button onClick={() => handleDelete(assessment._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AssessmentPage;
