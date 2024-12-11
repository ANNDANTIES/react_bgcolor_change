import { useState } from 'react'
import { Button } from '@mui/material';
import './App.css'

function App() {
  const [colors, setcolor] = useState("#0d6eaa")
  const blueclick = ()=>{
    console.log("blue clicked");
    setcolor("#0d6eaa");
  }
 const violetclick = () =>{
  console.log("violet clicked");
  setcolor("violet");
 }
 const redclick =() =>{
  console.log("red clicked");
  setcolor("#dc3545");
 }
  return (
    <>
      <div style={{backgroundColor:colors,height:"100vh",width:"100%",margin:"0px",padding:"0px"}}>
        <h1 style={{color:"white",textAlign:"center"}} className='mb-5 pt-2'>Color Changing Using React App</h1>
            <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
            <Button type="submit" name="blue" onClick={blueclick} className='text-white btn btn-light p-2 btn-lg border border-light-subtle rounded' variant="outlined">Blue</Button>
            <Button type="submit" name="violet" onClick={violetclick}  className="text-white color-white btn btn-light p-2 btn-lg border border-light-subtle rounded" variant="outlined">Purple</Button>
            <Button type="submit" name="red" onClick={redclick} className='text-white color-white btn btn-light p-2 btn-lg border border-light-subtle rounded' variant="outlined">Red</Button>
        </div>
      </div>
    </>
  )
}

export default App
