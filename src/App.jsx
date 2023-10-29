import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './components/LoginForm'
import { AppComponent , Welcome, WelcomeMsg, Button, NameText } from './AppStyles'

function App() {
  
  //registered user hardcoded
  const adminDetails =  {
    email : "test@gmail.com",
    password : "test123"
  }

    const [user,setUser] = useState({name : "", email : "", password : ""})
    const [error,setError] = useState("")

  const Login = (details) => {
    console.log(details);
    console.log(user);
  }

  const setUserDetails = (details) => {
    setUser({
      name : details.name,
      email : details.email
    })
    console.log(details);
  }

  const setErrorDetails = () => {
    setError("Details do not match");
  }

  const Logout = () =>  {
    setUser({name : "", email : ""});
  }
  return (
    <>
      <AppComponent className="App">
        {(user.email != "") ? (
          <Welcome className="welcome">
              <WelcomeMsg> Welcome <NameText> {user.name} </NameText></WelcomeMsg>
              <Button onClick={Logout}> Logout </Button>
          </Welcome>
        ) : (
          <LoginForm Login={Login} error={error} admin={adminDetails} setUserDetails={setUserDetails} setErrorDetails={setErrorDetails}/>
        )}
      </AppComponent>
    </>
  )
}

export default App
