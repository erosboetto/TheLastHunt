import React, { useState } from "react";
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { Form, Button, Container } from "react-bootstrap";
import { baseUrl } from "../../helpers/const";
import "./SupportForm.css";

const SupportForm = () => {
  const { token } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    text: "",
    file: null,
  });
  const [formResponse, setFormResponse] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('email', formData.email);
      formDataToSend.append('text', formData.text);
      if (formData.file) {
        formDataToSend.append('file', formData.file);
      }
  
      const response = await axios.post(`${baseUrl}/api/support`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      setFormResponse(response.data.message);

      setFormData({
        email: "",
        text: "",
        file: null
      });

      if (e.target.file) {
        e.target.file.value = "";
      }
      
      console.log("Form submitted:", formData);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Container className="support-container">
      <h1 className="support-title">Support</h1>
      <Form className="support-form" onSubmit={handleSubmit}>
        <h2>Please fill in the fields below</h2>
        <Form.Group controlId="formEmail" className="form-group">
          <Form.Control
            type="email"
            placeholder="Enter email*"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formProblem" className="form-group">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Describe the problem you encountered*"
            name="text"
            value={formData.text}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formImage" className="form-group">
          <Form.Control
            type="file"
            accept="image/*"
            name="file"
            onChange={handleChange}
          />
        </Form.Group>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <Button variant="primary" type="submit" className="btn-submit">
          Submit
        </Button>
      </Form>

      <p>{formResponse && formResponse}</p>
    </Container>
  );
};

export default SupportForm;
