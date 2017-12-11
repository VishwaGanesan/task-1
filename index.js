import React from 'react'
import { render } from 'react-dom'
import index from './index.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ListExampleSimple from './ListExampleSimple.js'
import Image from './images.jpg'
import Search from './Search.png'
import screenshot from './image2.png'
import TextFieldExampleSimple from './TextFieldExampleSimple.js'
const hs={
   textAlign:'center',
   fontFamily:'verdana',
   fontSize:'45px',
};
const scree={
   float:'left',
}
const bu={
   borderRadius:'30px',
   backgroundColor:'transparent',
   color:'white',
   height:'40px',
   border:'1px solid white',
   fontStyle:'verdana',
   fontWeight:'bold',
   position: 'absolute',
   top: '20px',
   right: '175px',
   fontSize:'14px',
   padding:'5px 5px 5px 5px',
   width:'90px',
};
const si={
  borderRadius:'30px',
  backgroundColor:'transparent',
  color:'white',
  height:'40px',
  border:'1px solid white',
  fontStyle:'verdana',
  fontWeight:'bold',
  position: 'absolute',
  top: '20px',
  right: '75px',
  fontSize:'14px',
  padding:'5px 5px 5px 5px',
  width:'90px',
}

const ele = (
  <div>
    <div id='image'>
       <button style={si}>login</button>
       <button style={bu}>Sign up</button>
       <img src={Image} />
      <h1 style={hs}>What &#39;s happening ?</h1>
      </div>
  <div>
    <ul>
        <li><img src={Search}  height='15px' width='15px'/></li>
        <li>Featured</li>
        <li>Sports</li>
        <li>Music</li>
        <li>Entertainment</li>
        <li>News</li>
        <li>Lifestyle</li>
        <li>More </li>
    </ul>
  </div>
  <div>
    <img src={screenshot}  style={scree}/ >
  </div>
  <div>
    <MuiThemeProvider>
    <TextFieldExampleSimple/>
    </MuiThemeProvider>
  </div>
    </div>
);
render(
  ele,
  document.getElementById('root')
);
