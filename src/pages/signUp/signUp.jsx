import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert } from "reactstrap";

export const SignUp = () => {
  const initialValues = {username: "", email: "", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate()

  const postUser = async () => {
    const resp = await axios.post(
      `${import.meta.env.VITE_SERVER_URI}/api/create-user`,
			formValues
    )
    const { status } = resp

    if (status === 201) {
			alert("exito")
			navigate("/login")
  }
}
   
  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormValues({...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    postUser()
    setFormValues(initialValues);
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };


  const validate = (values) => {
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!values.username) {
      errors.username = "You need a nick!";
    } 
    if (!values.email) {
      errors.email = "You need an email!";
    } else if(!regexEmail.test(values.email)) {
      errors.email = "Invalid email";
    }
    if (!values.password) {
      errors.password = "You need a password!";
    } else if(!regexPass.test(values.password)) {
      errors.password = "Invalid password";
    }
    if (values.username && values.email && values.password) {
      errors.registroExitoso = <Alert severity="success">The registration was a success! Welcome aboard!</Alert>;
    }
    return errors;
  };

  return (
    <Container className="secondary-container">
  <div className="container">
    <div className="text-center">
    <h1 className="titles">Becoming a member is really easy!</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="inputForm" controlId="formName">
        <Form.Label className="label">Name/Nick</Form.Label>
        <Form.Control name="username" type="text" placeholder="How would you like to be know as?" 
        value={formValues.username} onChange={handleChange} />
          <Form.Text className="text-danger">
          {formErrors.username}
        </Form.Text>
      </Form.Group>
    
      
      <Form.Group className="inputForm" controlId="formEmail">
        <Form.Label className="label">Email</Form.Label>
        <Form.Control name="email" type="email" placeholder="Your email"
        value={formValues.email} onChange={handleChange} />
        <Form.Text className="text-danger">
          {formErrors.email}
        </Form.Text>
      </Form.Group>
      

      <Form.Group className="inputForm" controlId="formPassword">
        <Form.Label className="label">Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password"
        value={formValues.password} onChange={handleChange} />
       <Form.Text className="text-light">
          Password has to be at least 8 characters long and have a number
        </Form.Text>
        <div><Form.Text className="text-danger">
          {formErrors.password}
        </Form.Text></div>
      </Form.Group>
      
      <Button variant="custom" type="submit">
        Sign Up
      </Button>
      <div><Form.Text className="text-success">
          {formErrors.registroExitoso}
        </Form.Text></div>
    </Form>
    </div>
    </div>
    </Container>
  );
}
