import React from 'react';
import TextField from 'material-ui/TextField';
const text={
  float:'right',
  height:'300px',
  width:'350px',
  backgroundColor:'#42A5F5',
  borderRadius:'5px',
  paddingTop:'10px',
  paddingLeft:'50px',
  marginTop:'40px',
}
const det={
   textAlign:'center',
   color:'white',
   fontSize:'20px',
   fontFamily:'verdana',
}
const rem={
    fontSize:'13px',
    color:'white',
    float:'left',
    fontFamily:'verdana',
}
const chk={
   float:'left',
}
const fori={
  float:'right',
  color:'white',
  marginTop:'-5px',
  paddingRight:'10px',
  fontFamily:'verdana',
  fontSize:'13px',

}
const but={
   height:'40px',
   width:'300px',
   backgroundColor:'white',
   borderRadius:'20px',
   color:'#42A5F5',
   marginTop:'30px',
 fontFamily:'verdana',
 fontSize:'20px',
 border:'1px solid white',
 cursor:'pointer',
}
const TextFieldExampleSimple = () => (
  <div style={text}>
    <h3 style={det}>Log in to your account</h3>
    <TextField
      hintText="Phone,username or email"
    /><br />
    <br />
    <TextField
      hintText="Password"
    /><br />
   <input style={chk} type='checkbox'></input><div style={rem}>Remember me</div>
   <div style={fori}>Forget password?</div>
   <button  style={but}>login</button>
  </div>
);

export default TextFieldExampleSimple;
