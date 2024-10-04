import Input from "./components/Input"
import { useState } from "react"
import Output from "./components/Output";




function App() {

  const [showOutput,setShowOutput] = useState('')

  function passBmi(bmiValue){
      setShowOutput(bmiValue) 
      console.log(showOutput);
       
  }


  
  
 
 
  return (
    <section>
     <Input accessBmi={passBmi} />
     <Output showValue={showOutput} />
    </section>
  )
}

export default App
