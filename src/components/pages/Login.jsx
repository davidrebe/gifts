import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { doLogin } from "../../actions/login-actions";

const Login = function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const history = useHistory();

  const changeEmail = ({ target: { name, value } }) => setEmail(value);
  const changePassword = ({ target: { name, value } }) => setPassword(value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password){
      return;
    }

    dispatch(doLogin(email));
    history.push("/gifts");

    setEmail("");
    setPassword("");
  };

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>Iniciar sesión</Header>
      <Form size='large' onSubmit={handleSubmit} >
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Email' name='email' onChange={changeEmail} />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Contraseña'
            type='password'
            onChange={changePassword}
          />
          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
  )
}

export default Login;