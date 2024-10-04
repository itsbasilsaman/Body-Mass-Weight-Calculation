import React from 'react'
 

function Output({showValue}) {

 

  return (
    <main className='right-main'>
      <h1>Your Body Mass Index Score</h1>
       { showValue && <h2>{showValue}</h2>}
       {(showValue < 18.5 && showValue > 0.5) && <p className='bmi-status'>Under Weight</p>}
       {(showValue < 18.5 && showValue > 0.5) &&  <img src="src/assets/underweight.png" alt="" className='result-image' />}
       {(showValue >= 18.5 && showValue <= 24.5)  && <p className='bmi-status'>Normal</p>}
       {(showValue >= 18.5 && showValue <= 24.5)  && <img src="src\assets\woman-clipart-fitness-removebg-preview.png" alt="" className='result-image' />}
       {(showValue >= 25 && showValue < 29.9) && <p className='bmi-status'>Over Weight</p> }
       {(showValue >= 25 && showValue < 29.9) && <img src="src/assets/9221aa7c20557050d72b364545a050a7-removebg-preview.png" alt="" className='result-image' /> }
       {showValue >= 30 && <p className='bmi-status'>Obesity</p>}
       {showValue >= 30 && <img src="src/assets/obesity.png" alt="" className='result-image' height={'270px'} />}
    </main>
  )
}

export default Output