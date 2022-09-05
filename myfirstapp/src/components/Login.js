
import'./Login.css'
function Login() {
    return (

      
      <div className="Login">
        <h1>I am a samble login page</h1>
        <form>
          <label for="fname">FIRSTNAME</label><br></br>
          <input type="text"id="fname"name="fname" placeholder="Firstname"/><br></br>
          <label form="lname">LAST NAME</label><br></br>
          <input type ="text"id="lname"name="lname" placeholder="Lastname"/> <br></br>
          <label form="uname">USERNAME</label><br></br>
          <input type ="text"id="uname"name="uname"placeholder="Username" required/> <br></br>
          <label form="psw">PASSWORD</label><br></br>
          <input type ="password"id="psw"name="psw" placeholder="Password"required/><br></br>
          <input type ="submit"value="Submit"/> 
          <button type ='button 'value="return">return</button><br/>
          <button class='button button1'>Back</button>
         
        </form>
         </div>
    );
  }
  
  export default Login;
  