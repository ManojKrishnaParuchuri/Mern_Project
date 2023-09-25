import React,{Component} from "react";
export default class Reset extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const {email}=this.state;
        console.log(email);
        fetch("http://localhost:8888/forgot-password",{
          method:"POST",
          crossDomain:true,
          headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
          },
          body:JSON.stringify({
            email,
          }),
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data,"userRegister");
            alert(data.status);
        });
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} >
                <div className=" mt-36 ">
                <h3 className="-pt-32 mt-56 font-sans font-bold text-3xl">Forgot Password</h3>
                <div className="mb-3">
                    <label>Email Address</label>
                    <input type="text" className="form-control" placeholder="Enter Email"
                    onChange={(e)=>this.setState({email:e.target.value})}/>

                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
                <p className="forgot-password text-right">
                    
                </p>
                </div>
            </form>
        )
    }
}