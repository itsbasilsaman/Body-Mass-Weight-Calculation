import React, { useState } from 'react'

function Input({accessBmi}) {

  const [height,setHeight] = useState('')
  const [weight,setWeight] = useState('')
  const [weighterror,setWeightError] = useState(false)
  const [heighterror,setHeightError] = useState(false)

  
  const calculateBmi =() => {
     if(!heighterror && !weighterror && height != '' && weight != ''){
      let output =  weight/(height*height)  
      accessBmi(output.toFixed(2))
      setHeight('')
      setWeight('')
     }
  }

  const weightCheck = (e) =>{
    setWeight(e.target.value)
    if(!!e.target.value.match('^[0-9]*(\.[0-9]+)?$')){
      setWeightError(false)
    } else {
      setWeightError(true)
    }
  }

  const heightCheck =(e) => {
    setHeight(e.target.value)
    if(!!e.target.value.match('^[0-9]*(\.[0-9]+)?$')){
      setHeightError(false)
    } else {
      setHeightError(true)
    }
  }


  const clearContent=()=> {
    setHeight('')
    setWeight('')
    accessBmi('')
    setHeightError(false)
    setWeightError(false)
  }


   
  

  return (
    <>
    <main className='left-main'>
     <div className='input-head'>
        <h1>Body Mass Index</h1>
        <p>Calculator</p>
     </div>
     <div className='input-body'>
        <input type="text" placeholder='Enter Your Weight' value={weight} onChange={(e)=> weightCheck(e)} />
        {weighterror && <p className='invalid-input'>invalid input</p>}
        <input type="text" placeholder='Enter Your Height' value={height} onChange={(e)=> heightCheck(e)} />
        {heighterror && <p className='invalid-input'>invalid input</p>}
       <div className='button-section'>
          <button onClick={clearContent} >Clear</button>
          <button onClick={calculateBmi}>Calculate</button>
       </div>
     </div>
     <img src="src/assets/bg-img.png" alt="" className='background-image' />
    </main> 
    </>
  )
}

export default Input