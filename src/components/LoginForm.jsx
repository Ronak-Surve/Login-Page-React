import React, { useState } from 'react'
import { Form, InnerForm, FormElement, FormLabel, FormInput, Button, LoginText} from '../FormStyles';

function LoginForm({ Login, error, admin, setUserDetails, setErrorDetails}) {

    const [details,setDetails] = useState({name : "", email : "", password : ""})

    const submitForm = (e) =>   {
        e.preventDefault();

        if(details.email == admin.email && details.password == admin.password)    {
            console.log("Logged in");
            setUserDetails(details);
        }
        else    {
            console.log("Details do not match!!");
            setErrorDetails();
        }
    }
  return (
    <div>
      <Form onSubmit={submitForm}>

        <InnerForm className="inner-form">
            <LoginText> Login </LoginText>
            {(error != "") ? (<div className='error'>{error}</div>) : ""}
            <FormElement className="form-group">

                <FormLabel htmlFor="name"> Name :</FormLabel>
                <FormInput type="text" name="name" id="id" onChange={(e) => {setDetails({...details,name : e.target.value})}} value={details.name}/>
            </FormElement>
            <FormElement className="form-group">
                <FormLabel htmlFor="email"> Email :</FormLabel>
                <FormInput type="email" name="email" id="email" onChange={(e) => {setDetails({...details,email : e.target.value})}} value={details.email}/>
            </FormElement>
            <FormElement className="form-group">
                <FormLabel htmlFor="password"> Password :</FormLabel>
                <FormInput type="password" name="password" id="password" onChange={(e) => {setDetails({...details,password : e.target.value})}} value={details.password}/>
            </FormElement>
            <Button type='submit' value='LOGIN'> LOGIN </Button>
        </InnerForm>
      </Form>
    </div>
  )
}

export default LoginForm
