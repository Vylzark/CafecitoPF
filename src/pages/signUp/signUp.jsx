import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const SignUp = () => {
  const initialValues = {username: "", email: "", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
   
  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormValues({...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };


  const validate = (values) => {
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!values.username) {
      errors.username = "Necesitas un nombre!";
    } 
    if (!values.email) {
      errors.email = "Necesitas un email!";
    } else if(!regexEmail.test(values.email)) {
      errors.email = "El email no es valido!";
    }
    if (!values.password) {
      errors.password = "Necesitas una contraseña!";
    } else if(!regexPass.test(values.password)) {
      errors.password = "La contraseña no es valida!";
    }
    return errors;
  };

  return (
  <div class="container">
    <div class="text-center">
    <h1>Convertirse en miembro es muy facil!</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="inputForm" controlId="formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control name="username" type="text" placeholder="Como quiere que lo conozcamos?" 
        value={formValues.username} onChange={handleChange} />
          <Form.Text className="text-danger">
          {formErrors.username}
        </Form.Text>
      </Form.Group>
    
      
      <Form.Group className="inputForm" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" type="email" placeholder="Inserte un email valido"
        value={formValues.email} onChange={handleChange} />
        <Form.Text className="text-danger">
          {formErrors.email}
        </Form.Text>
      </Form.Group>
      

      <Form.Group className="inputForm" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Inserte una contraseña"
        value={formValues.password} onChange={handleChange} />
       <Form.Text className="text-muted">
          La contraseña debe tener al menos 8 caracteres y 1 numero
        </Form.Text>
        <div><Form.Text className="text-danger">
          {formErrors.password}
        </Form.Text></div>
      </Form.Group>
      
      <Button variant="custom" type="submit">
        Registrarse
      </Button>
    </Form>
    </div>
    </div>
  );
}
