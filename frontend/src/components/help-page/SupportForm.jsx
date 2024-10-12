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
      console.log(error.message);
      setErrorMessage("Non hai eseguito l'accesso");
    }
  };

  return (
    <div className='div'>
      <h1 className='title'>Supporto</h1>
      <div className='line'></div>
      <Container className="support-container">
        <Form className="support-form" onSubmit={handleSubmit}>
          <h2>Compila i campi qui sotto grazie</h2>
          <Form.Group controlId="formEmail" className="form-group">
            <Form.Control
              type="email"
              placeholder="Inserisci email*"
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
              placeholder="Descrivi l'anomalia riscontrata*"
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
            Invia
          </Button>
        </Form>

        <p>{formResponse && formResponse}</p>
      </Container>
    </div>
  );
};

export default SupportForm;
