import { Component } from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
     e.preventDefault();
     const { email,password } =this.state;
     console.log(email,password);
     
     fetch("http://localhost:8888/login",{
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if(data.status === "ok"){
            alert("Login Successfull");
        window.localStorage.setItem("token",data.data);
        window.location.href = "./studenthome";
        }
    });
    }
    render(){
  return (
    <>
    <body className='loginbody'>
        <div class="container" id="container">
  <div class="form-container sign-in-container">
    <form onSubmit={this.handleSubmit}>
      <h1>Sign in</h1>
      <input type="email" placeholder="Email"
      onChange={(e)=>this.setState({email: e.target.value})}
       />
      <input type="password" placeholder="Password" onChange={(e)=>this.setState({password: e.target.value})}
      />
     <NavLink to={"/forgot"}>Forgot Password</NavLink>
      <button  className="loginbutton">Sign In</button>
    </form>
  </div>
  <div class="overlay-container">
    <div class="overlay">
      <div class="overlay-panel overlay-left">
        <h1 style={{color:"black"}}>Welcome Back!</h1>
        <p style={{color:"black"}}>To keep connected with us please login with your personal info</p>
        <button class="ghost" id="signIn">Sign In</button>
      </div>
    </div>
  </div>
</div>
</body>

    </>
  )
}
}
