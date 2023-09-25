import axios from "axios";
import { useState } from "react";

function Marks() {

    const [res,setRes] = useState(null);
    const [search, setSearch] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setSearch(data.get("searchbox"))
        axios.get('https://raw.githubusercontent.com/venkateshjonna/MERN/main/data', {

        }).then((response)=>{
            console.log(response.data[0])
            setRes(response.data)
        })
    }

    if (res === null) {
    return(
        <center>
            <div style={{ 
      backgroundImage: `url("https://cdn.neowin.com/news/images/uploaded/2021/04/1619644762_github-desktop_story.jpg")` ,
      width:'100%',
    height:'680px',
    }}>


<div style={{height:"250px", width:"300px", backgroundColor:"white", margin:"30px", padding:"20px", border:"4px solid aqua"}}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="searchbox" /><br></br><br></br>
                <input type="submit" value="search" />
            </form>
          <h1>SEARCH DATA BY NAME</h1>
        </div>
        </div>
        </center>
    );
}
else {
    return(
        <center>
        <div style={{height:"600px", width:"500px", backgroundColor:"black", marginTop:"40px", padding:"20px", border:"1px solid green"}}>
            <table>
            {res.map((obj)=>{
                if(obj.login === search) {
                    console.log(obj.login)
                    console.log(search)
                    return(
                        <div>
                            <tr><td style={{width:"180px",color:"white"}}>ID:</td> <td style={{color:"white"}}>{obj.id}</td></tr>
                           <br></br>
                            <tr><td style={{width:"180px",color:"white"}}>Name:</td> <td style={{color:"white"}}>{obj.login}</td></tr>
                            <br></br>
                            <tr><td style={{width:"180px",color:"white"}}>Profile Photo:</td> <td><img src={obj.avatar_url} style={{width:"150px", height:"100px"}} /></td></tr> 
                            <br></br>
                            <tr><td style={{width:"180px",color:"white"}}>DAA:</td> <td style={{color:"white"}}>{obj.DAA}</td></tr>
                            <br></br>
                            <tr><td style={{width:"180px",color:"white"}}>MERN:</td> <td style={{color:"white"}}>{obj.MERN}</td></tr>
                            <br></br>
                            <tr><td style={{width:"180px",color:"white"}}>PFSD:</td> <td style={{color:"white"}}>{obj.PFSD}</td></tr>
                            <br></br>
                            <tr><td style={{width:"180px",color:"white"}}>ATFL:</td> <td style={{color:"white"}}>{obj.ATFL}</td></tr>
                            <br></br>
                            <tr><td style={{width:"180px",color:"white"}}>OS:</td> <td style={{color:"white"}}>{obj.OS}</td></tr>
                        </div>
                    );
                }
                return (<div></div>);
            })}
            </table>
        </div>

       </center>
        
        
    )
}

}

export default Marks