

import { useDispatch,useSelector } from "react-redux"
import { increment,decrement, RootState } from "./Store/Features/Counter";


function App() {
  const  dispatch = useDispatch();
  const value = useSelector((state:RootState)=>{
    return state.counter.value
  });


    const incrementHandler = ()=>{
      dispatch(increment());
    }
    const decrementHandler = ()=>{
      dispatch(decrement());
    }
  return (
    <>
      <h1>Counter App</h1>
      <div style={{ backgroundColor:"white",padding:"20px"}}>
        <h1 style={{color: '#000',marginBottom:"20px",fontSize:"4rem",textAlign:"center"
        }}>{value}</h1>
        <button className="btn" style={{marginRight:"10px"}} onClick={incrementHandler}>Increment</button>
        
        <button className="btn" onClick={decrementHandler}>Decreent</button>
      </div>

    </>
  )
}

export default App
