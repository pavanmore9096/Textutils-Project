import React from 'react'



export default function About(props) {

    // const [myStyle, setMyStyle] = useState( 
    //    {color: 'black',
    //     backgroundColor:'white'}
    // )
    
    let myStyle={
        color:props.Mode === 'dark'?'white':'black',
        backgroundColor:props.Mode === 'dark'?'#06385f':'white'

    }
    // const[btntext, setBtnText] = useState("Enable Dark Mode")
     
    // const toggleStyle =() =>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black' 
    //     })
    //     setBtnText("Disable Dark Mode")
    //    }

    //    else{
    //     setMyStyle({
    //         color:'black',
    //         backgroundColor:'white' 
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //}

    
  return (
  <div className="container" style={myStyle}> 
       <h2>About Us</h2>
    <div className="accordion" id="accordionExample" style={myStyle}>
       
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                <strong>Free to Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. 
                Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. 
                It suits to count characters in facebook, blog, books, excel docement, pdf document, essays, etc.
                </div>
                </div>
            </div>
            
    {/* <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btntext}</button> */}
    </div>
</div>
  )
}
