import './Form.css';
import React from 'react';
import Myelement from './reactjsx/Fruits';
class Form extends React.Component {
  render() {
    var myStyle = {  
      fontSize: 80,  
      fontFamily: 'Courier',  
      color: '#003300'  
   } 
    return (
      <div className="Form">
        <h1 style={myStyle}>I am a  sambleTable </h1>
        

<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>aathi</td>
    <td>Senthil</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>soft</td>
    <td>Thiru</td>
    <td>Mexico</td>
  </tr>
</table>
<button onClick={()=>Myelement()}>login</button>
</div> 
);
  }
}
  
  export default Form;
  






