import Button from './Components/Button'
import Display from './Components/Display';
import './App.css';
import { useState } from 'react';

function App() {
  const[value,setValue] = useState("")

  const handleClick=(e)=>{
    
     if(e.target.value==="C")
    {
      
      setValue("")
      console.log("c")
    }
    else if(e.target.value==="+/-")
    {
      console.log("+-")
      console.log(value)
      setValue(-1*value)
    }
    else if(e.target.value==="=")
    {
      try{
        console.log(value)
        let regex_num = value.replace(/^0+/,"");
        setValue(eval(regex_num).toString());
        console.log(value)

      }
      catch(error){
        setValue('Error')
        console.log(value+"+")
      }
     

    }
    else{
      console.log("value")
      setValue(value + e.target.value)
    }
  }

  return (
    <div className="App">
      <Display value= {value} />
            <div className='keys'>
               
                <Button value="C" name= "C" onClick={handleClick} />
                <Button value="+/-" name= "+/-" onClick={handleClick}/>
                <Button value="%" name= "%" onClick={handleClick}/>
                <Button value="/" name = "/" onClick={handleClick}/>
            </div>
            <div>
                <Button value="7" name= "7" onClick={handleClick}/>
                <Button value="8" name= "8" onClick={handleClick}/>
                <Button value="9" name= "9" onClick={handleClick}/>
                <Button value="*" name = "*" onClick={handleClick}/>
            </div>
            <div>
                <Button value="4" name= "4" onClick={handleClick}/>
                <Button value="5" name= "5" onClick={handleClick}/>
                <Button value="6" name= "6" onClick={handleClick}/>
                <Button value="-" name = "-" onClick={handleClick}/>
            </div>
            <div>
                <Button value="1" name= "1" onClick={handleClick}/>
                <Button value="2" name= "2" onClick={handleClick}/>
                <Button value="3" name= "3" onClick={handleClick}/>
                <Button value="+" name = "+" onClick={handleClick}/>
            </div>
            <div  >
                <Button  value="0" name= "0" onClick={handleClick} />
                <Button value="." name= "." onClick={handleClick}/>
                <Button className="eval" value="=" name = "=" onClick={handleClick}/>
            </div>
      
    </div>
  );
}

export default App;