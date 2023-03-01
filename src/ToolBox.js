
import React from 'react';


// import 'tippy.js/dist/tippy.css'; // optional
import "./forCss/tool.css"




function Tool(props) {

  function MouseOver(event) {
    event.target.style.background = 'red';
    let j=event.target.parentElement.firstChild.style.background = 'black';
    event.target.parentElement.firstChild.style.color = 'red';
    event.target.parentElement.firstChild.style.display = '';
    // console.log(j);
    // console.log(j);
    
  }
  function MouseOut(event){
    event.target.style.background="";
    let j=event.target.parentElement.firstChild.style.background = 'black';
    event.target.parentElement.firstChild.style.color = 'black';
    event.target.parentElement.firstChild.style.display = 'none';

    
  }
    return (
      <div className="container" style={styles.forConatiner}>
        <div className="btnHolder" >

          <div className="tTip" style={styles.forTip}>I am Tool Tip</div>
          <button className="mainButton" style={styles.forBtn} onMouseOver={MouseOver} onMouseOut={MouseOut} >Hover Me</button>
           
            
        </div>
      </div>
    );
  }


  const styles={
   
    forConatiner:{
      height:'846px',
      background: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      positionTop:'50%'

    },
    forBtn:{
    height:'80px',
    background:'red',
    fontWeight:'bold',
    fontSize:'50px',
    fontStyle:'italic'
    }
    ,

    // forTip:{
    //   height:'80px',
    //   background: "red",
    //   fontSize:'30px',
      


    // }



  }
  
  export default Tool;
  
