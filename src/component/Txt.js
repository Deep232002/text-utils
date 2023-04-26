import React, { useState } from 'react'

export default function Txt(props) {
    const [text,setText]=useState('');
    // const[docolor,dothis]=useState({
    //     color:"black",
    //     backgroundColor:'white'
    // })
    // setText("new text");
    
    // const docolor={
    //     color:'red',
    //     backgroundColor:'blue',
    //     fontSize:'10px'
        
    // }
    const clear=()=>{
        // console.log("convert uperclick")

       
        setText('');
      props.showalert('text is clear successfully ','success ')

    }
    
    const handleloClick=()=>{

        let newtext=text.toLowerCase();
        setText(newtext);
      props.showalert('text is converted to lowercase successfully ','success ')

    }
    const handleUpClick=()=>{

      let newtext=text.toUpperCase();
      setText(newtext);
    props.showalert('text is converted to Uppercase successfully ','success ')

  }
    const handleonChance=(event)=>{
        console.log("handle change")
        setText(event.target.value)
    }
    
    // const [btntext,setbtnText]=useState('Dark-Mode')
    // const changeColor=()=>{
    //      if(docolor.color === 'green'){
    //         dothis({
    //            color:'black',
    //            backgroundColor:'white'
    //         })

    //         setbtnText('Dark-Mode')
    //      }
    //      else{
    //         dothis({
    //             color:'green',
    //             backgroundColor:'black'
    //          })

    //          setbtnText('Light-Mode')
    //      }
    // }

    const handlecopy=()=>{
       
      // let copytext=document.getElementById('area');
      
      // copytext.select();
      // navigator.clipboard.writeText(copytext.value);
      navigator.clipboard.writeText(text);
      props.showalert('copy to clipboard successfully ','success ')
    }

    const removeSpace=()=>{
        let newtext=text.split(/[ ]+/);
        console.log(newtext);
        setText(newtext.join(" "))
      props.showalert('space is remove successfully ','success ')

    }
    
  return (
    <>
    <div >
    <div className='container' style={{color:props.mode==='dark' ? 'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="form">
        <textarea className="form-control" name={props.name} onChange={handleonChance} id="area"  value={text} rows='8'
        style={{backgroundColor:props.mode==='dark' ? 'black':'white',color:props.mode==='dark' ? 'green':'black' }}></textarea>
      </div> 
      <button className='btn btn-primary mx-1 my-10'  style={{margin:'3px 0'}}onClick={handleUpClick}>Convert to Uppercase</button>
      <button className='btn btn-primary mx-1 my-10' style={{margin:'3px 0'}}onClick={handleloClick}>Convert to Lowercase</button>

       {/* <button className='btn btn-primary mx-1' onClick={changeColor}>{btntext}</button> */}
       <button className='btn btn-primary mx-1 my-10'  style={{margin:'3px 0'}}onClick={handlecopy}>copy</button>
       <button className='btn btn-primary mx-1 my-10' style={{margin:'3px 0'}} onClick={removeSpace}>remove space</button>
       <button className='btn btn-primary mx-1 my-10' style={{margin:'3px 0'}} onClick={clear}>clear</button>


       


    </div>
    <div className="container my-3" style={{color:props.mode==='dark' ? 'white':'black'}}>
        <h1>your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words {text.length} characters</p>
        <p>{.008*(text.split(" ").filter((element)=>{return element.length !==0}).length)} Minutes read</p>
    </div>
    <div className="preview" style={{color:props.mode==='dark' ? 'white':'black'}}>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </div>
    </>
  )
}
