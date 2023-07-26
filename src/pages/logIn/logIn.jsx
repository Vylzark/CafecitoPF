import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import { NavLink} from "react-router-dom";


const validation = () =>
	Yup.object().shape({
		email: Yup.string()
			.email("Debe ser un email válido")
			.required("* Campo obligatorio"),
		password: Yup.string().required("* Campo obligatorio"),
	})
    const initialValues = {email: "", password: ""};

export const getUser = async (email, password) => {
	const response = await axios.post(
		`${import.meta.env.VITE_SERVER_URI}/api/login`,
		{
			email,
			password,
		}
	)

	return response.data
}
export const LogIn = () => {
    const navigate = useNavigate()
    const onSubmit = () => {
		getUser(formik.values.email, formik.values.password)
			.then(data => {
				localStorage.setItem("user", JSON.stringify(data.user))
				localStorage.setItem("role", data.user.role)
				localStorage.setItem("token", data.token)
				navigate("/")
			})
			.catch(err => {
				if (err.response.status === 401) alert("credenciales inválidas")
			})
	}

	const formik = useFormik({
		initialValues,
		enableReinitialize: true,
		validation,
		onSubmit,
	})
  
    return (
        <Container className="secondary-container">
    <div className="container">
      <div className="text-center">
      <h1 className="titles">Log in to start enjoying your benefits!</h1>
      <Form onSubmit={formik.handleSubmit}>

        <Form.Group className="inputForm" controlId="formEmail">
          <Form.Label className="label">Email</Form.Label>
          <Form.Control name="email" type="email" placeholder="Registered email"
          value={formik.values.email} onChange={formik.handleChange} />
          <Form.Text className="text-danger">
            {formik.errors.email && (
						<div className="errorMessage">{formik.errors.email}</div>
					)}
          </Form.Text>
        </Form.Group>
        
  
        <Form.Group className="inputForm" controlId="formPassword">
          <Form.Label className="label">Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password"
          value={formik.values.password} onChange={formik.handleChange} />
          <div><Form.Text className="text-danger">
          {formik.errors.password && (
						<div className="errorMessage">{formik.errors.password}</div>
					)}
          </Form.Text></div>
        </Form.Group>
        
        <Button variant="custom" type="submit">
          Log In
        </Button>
      </Form>
      <NavLink to="/signup" className="text-light">Don't have an account?</NavLink>
      </div>
      </div>
      </Container>
    );
  }